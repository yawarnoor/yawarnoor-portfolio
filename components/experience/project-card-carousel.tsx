"use client";

import { useMemo, useState, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

import { Icons } from "@/components/common/icons";
import { IntersectionObserverImage } from "@/components/common/intersection-observer-image";
import { SimpleLoadingLink } from "@/components/common/simple-loading-link";
import { AnimatedLoadingButton } from "@/components/ui/animated-loading-button";
import ChipContainer from "@/components/ui/chip-container";
import { ExperienceInterface } from "@/config/experience";
import { useRouter } from "next/navigation";

interface ProjectCardCarouselProps {
  project: ExperienceInterface;
}

export default function ProjectCardCarousel({ project }: ProjectCardCarouselProps) {
  const router = useRouter();
  
  // State declarations - simplified without lightbox
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  
  // Collect all images from pagesInfoArr for carousel navigation
  const allImages = project.pagesInfoArr.reduce((acc: string[], page) => {
    return [...acc, ...page.imgArr];
  }, []);
  
  // Use project logo as first image, then add all page images
  const images = [project.companyLogoImg, ...allImages];

  const prefersReducedMotion = useMemo(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  const nextImage = useCallback(() => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const prevImage = useCallback(() => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  const goToImage = useCallback((index: number) => {
    setCurrentImageIndex(index);
  }, []);

  // Keyboard navigation for carousel when focused
  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowRight") nextImage();
    if (e.key === "ArrowLeft") prevImage();
    if (e.key === "Enter" || e.key === " ") router.push(`/projects/${project.id}`);
  };

  return (
    <div 
      className="relative p-6 max-w-sm h-full bg-background border border-border rounded-lg flex flex-col group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      tabIndex={0}
      onKeyDown={handleKeyDown}
      aria-label={`${project.companyName} project card`}
    >
      {/* Status badge */}
      {project.status === "in-progress" && (
        <div className="absolute right-3 top-3 z-10 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full bg-orange-500 dark:bg-orange-600 text-white shadow-lg border-2 border-white/20 dark:border-black/20">
          <div className="w-2 h-2 rounded-full bg-white dark:bg-orange-200 animate-pulse shadow-sm"></div>
          In Progress
        </div>
      )}

      {/* Image Carousel Container */}
      <div className="relative w-full h-[200px] flex-shrink-0">
        <IntersectionObserverImage
          className={`rounded-lg border border-border object-cover cursor-pointer ${prefersReducedMotion ? "transition-none" : "transition-all duration-200"}`}
          src={images[currentImageIndex]}
          alt={`${project.companyName} - Image ${currentImageIndex + 1}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          onClick={() => router.push(`/projects/${project.id}`)}
          role="button"
          aria-label="View project details"
          rootMargin="100px"
        />
        {/* Navigation Arrows - Show on hover when multiple images */}
        {images.length > 1 && (
          <>
            <button
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className={`absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200 ${
                isHovered ? 'opacity-100' : 'opacity-0'
              }`}
              aria-label="Previous image"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className={`absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200 ${
                isHovered ? 'opacity-100' : 'opacity-0'
              }`}
              aria-label="Next image"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </>
        )}
        
        {/* Image Indicators - Show when multiple images */}
        {images.length > 1 && (
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={(e) => { e.stopPropagation(); goToImage(index); }}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  index === currentImageIndex
                    ? 'bg-white'
                    : 'bg-white/50 hover:bg-white/75'
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        )}
        
        {/* Image Counter - Show on hover when multiple images */}
        {images.length > 1 && isHovered && (
          <div className="absolute top-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            {currentImageIndex + 1} / {images.length}
          </div>
        )}
      </div>

      {/* Card Content */}
      <div className="pt-5 space-y-3 flex-grow flex flex-col">
        <SimpleLoadingLink 
          href={`/projects/${project.id}`}
          className="text-2xl font-bold tracking-tight text-foreground hover:text-primary transition-colors cursor-pointer"
        >
          {project.companyName}
        </SimpleLoadingLink>
        <p className="line-clamp-3 font-normal text-muted-foreground flex-grow">
          {project.shortDescription}
        </p>
        <div className="flex gap-2 flex-wrap">
          <ChipContainer textArr={project.category} />
        </div>
        <div className="mt-auto pt-2 flex justify-between items-end">
          <AnimatedLoadingButton 
            variant="default"
            onClick={() => router.push(`/projects/${project.id}`)}
            loadingDuration={1500}
          >
            Read more
            <Icons.chevronRight className="w-4 ml-1" />
          </AnimatedLoadingButton>
          <motion.div 
            className="p-3 rounded-full bg-background border border-border"
            whileHover={{ 
              scale: 1.1, 
              rotate: project.type === "Personal Project" ? 360 : -360,
              borderColor: "hsl(var(--primary))"
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ 
              duration: 0.3, 
              ease: "easeInOut"
            }}
          >
            {project.type === "Personal Project" ? (
              <Icons.userFill className="h-4 w-4 text-primary" />
            ) : (
              <Icons.work className="h-4 w-4 text-primary" />
            )}
          </motion.div>
        </div>
      </div>


    </div>
  );
} 