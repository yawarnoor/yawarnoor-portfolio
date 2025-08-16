"use client";

import Image from "next/image";
import { useState } from "react";
 

interface LoadingImageProps {
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
  [key: string]: any;
}

export const LoadingImage = ({
  src,
  alt,
  className = "",
  priority = false,
  sizes,
  ...props
}: LoadingImageProps) => {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div className={`bg-muted flex items-center justify-center ${className}`}>
        <span className="text-muted-foreground text-sm">Failed to load image</span>
      </div>
    );
  }

  if (props.fill) {
    return (
      <Image
        src={src}
        alt={alt}
        className={className}
        onError={() => setHasError(true)}
        priority={priority}
        sizes={sizes || "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"}
        loading={priority ? "eager" : "lazy"}
        quality={70}
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkrHB0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+hxRi5xTN9lQKfiRqYfHbVblLpWpJBJBPGSDJvkOW9RlbnAG5Hej/FmpHSr8ZB/mKPFf05lnErjLWd0/a/p9JtQVLjQzqe6L8EUfmrKe8+3mMWX/NZ8LtTa6eHKLdsXh5aw6g7EXx+K7E7hHNKp+sTa1GGRA/kfn2rPr"
        {...props}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      className={className}
      onError={() => setHasError(true)}
      priority={priority}
      sizes={sizes || "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"}
      loading={priority ? "eager" : "lazy"}
      quality={70}
      {...props}
    />
  );
};
