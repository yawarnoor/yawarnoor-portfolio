"use client";

import { useEffect } from "react";

interface ImagePreloaderProps {
  images: string[];
}

export const ImagePreloader = ({ images }: ImagePreloaderProps) => {
  useEffect(() => {
    // Preload images in the background
    const preloadImages = () => {
      images.forEach((src) => {
        const img = new Image();
        img.src = src;
        // Add to browser cache
        img.onload = () => {
          // Image is now cached
        };
      });
    };

    // Start preloading after a short delay to not block initial render
    const timer = setTimeout(preloadImages, 100);
    
    return () => clearTimeout(timer);
  }, [images]);

  return null; // This component doesn't render anything
};
