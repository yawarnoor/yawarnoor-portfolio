"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SimpleLoadingLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  target?: string;
  rel?: string;
  onClick?: () => void;
}

export const SimpleLoadingLink = ({
  href,
  children,
  className = "",
  target,
  rel,
  onClick,
}: SimpleLoadingLinkProps) => {
  const handleClick = (e: React.MouseEvent) => {
    // Don't show loading for external links or same page anchors
    if (target === "_blank" || href.startsWith("#") || href.startsWith("http")) {
      onClick?.();
      return;
    }

    // For internal navigation, just call onClick without showing button loading
    onClick?.();
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <Link
        href={href}
        className={cn(
          "relative transition-colors",
          className
        )}
        target={target}
        rel={rel}
        onClick={handleClick}
      >
        <span className="inline-flex items-center justify-center">
          {children}
        </span>
      </Link>
    </motion.div>
  );
};
