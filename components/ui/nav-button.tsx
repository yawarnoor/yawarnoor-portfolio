"use client";

import { useRouter } from "next/navigation";
import { AnimatedLoadingButton } from "./animated-loading-button";

interface NavButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
  className?: string;
}

export const NavButton = ({ href, children, variant = "outline", size, className }: NavButtonProps) => {
  const router = useRouter();
  
  return (
    <AnimatedLoadingButton
      variant={variant}
      size={size}
      className={`inline-flex items-center justify-center ${className}`}
      onClick={() => router.push(href)}
      loadingDuration={1500}
    >
      <span className="inline-flex items-center justify-center">
        {children}
      </span>
    </AnimatedLoadingButton>
  );
};
