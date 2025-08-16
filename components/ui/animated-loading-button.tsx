"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "./button";

interface AnimatedLoadingButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void | Promise<void>;
  loadingDuration?: number;
}

export const AnimatedLoadingButton = ({
  children,
  className,
  onClick,
  variant = "default",
  size = "default",
  loadingDuration = 1500,
  disabled,
  ...props
}: AnimatedLoadingButtonProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [buttonWidth, setButtonWidth] = useState<number | null>(null);
  const [buttonPadding, setButtonPadding] = useState<string>("");

  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    if (isLoading || disabled) return;
    
    const button = e.currentTarget;
    setButtonWidth(button.offsetWidth);
    setButtonPadding(window.getComputedStyle(button).padding);
    
    setIsLoading(true);
    
    if (onClick) {
      try {
        await onClick(e);
      } catch (error) {
        console.error("Button click error:", error);
      }
    }
    
    setTimeout(() => {
      setIsLoading(false);
      setButtonWidth(null);
      setButtonPadding("");
    }, loadingDuration);
  };

  const buttonHeight = size === "sm" ? 36 : size === "lg" ? 44 : 40;
  const circleSize = buttonHeight;

  return (
    <div className="relative inline-flex items-center justify-center">
      <AnimatePresence mode="wait">
        {!isLoading ? (
          <motion.div
            key="button"
            initial={{ opacity: 1, scale: 1 }}
            exit={{
              opacity: 0,
              scale: 0.95,
              transition: { duration: 0.2, ease: "easeIn" }
            }}
          >
            <Button
              variant={variant}
              size={size}
              className={cn("relative overflow-hidden inline-flex items-center justify-center", className)}
              onClick={handleClick}
              disabled={disabled}
              {...props}
            >
              <motion.span
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.15 }}
                className="inline-flex items-center justify-center"
              >
                {children}
              </motion.span>
            </Button>
          </motion.div>
        ) : (
          <motion.div
            key="loading"
            className={cn(
              "flex items-center justify-center",
              variant === "default" && "bg-primary text-primary-foreground",
              variant === "destructive" && "bg-destructive text-destructive-foreground",
              variant === "outline" && "border border-input bg-background",
              variant === "secondary" && "bg-secondary text-secondary-foreground",
              variant === "ghost" && "bg-transparent",
              variant === "link" && "bg-transparent"
            )}
            initial={{ 
              width: buttonWidth || "auto",
              height: buttonHeight,
              borderRadius: "0.375rem",
              padding: buttonPadding
            }}
            animate={{
              width: circleSize,
              height: circleSize,
              borderRadius: "50%",
              padding: 0
            }}
            exit={{
              width: buttonWidth || "auto",
              height: buttonHeight,
              borderRadius: "0.375rem",
              padding: buttonPadding,
              transition: { duration: 0.3, ease: "easeOut" }
            }}
            transition={{
              duration: 0.4,
              ease: [0.4, 0, 0.2, 1]
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                rotate: 360
              }}
              transition={{
                opacity: { delay: 0.2, duration: 0.2 },
                scale: { delay: 0.2, duration: 0.3, ease: "easeOut" },
                rotate: { delay: 0.3, duration: 1.5, repeat: Infinity, ease: "linear" }
              }}
              className="relative flex items-center justify-center w-full h-full"
            >
              {/* Loading spinner */}
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
