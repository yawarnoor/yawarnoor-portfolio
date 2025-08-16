"use client";

import { useEffect, useRef, useState } from "react";
import { LoadingImage } from "./loading-image";

interface IntersectionObserverImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  className?: string;
  priority?: boolean;
  sizes?: string;
  onClick?: () => void;
  role?: string;
  rootMargin?: string;
  [key: string]: any;
}

export const IntersectionObserverImage = ({
  src,
  alt,
  rootMargin = "50px",
  ...props
}: IntersectionObserverImageProps) => {
  const [shouldLoad, setShouldLoad] = useState(false);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const current = imgRef.current;
    if (!current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          setShouldLoad(true);
          observer.unobserve(current);
        }
      },
      {
        rootMargin,
        threshold: 0.1,
      }
    );

    observer.observe(current);

    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
  }, [rootMargin]);

  if (!shouldLoad) {
    return (
      <div
        ref={imgRef}
        className={`bg-muted animate-pulse flex items-center justify-center ${props.className || ""}`}
        style={props.fill ? {} : { width: props.width, height: props.height }}
      >
        <div className="w-8 h-8 rounded-full bg-muted-foreground/20" />
      </div>
    );
  }

  return <LoadingImage src={src} alt={alt} {...props} />;
};
