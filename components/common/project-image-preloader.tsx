"use client";

import { useEffect } from "react";
import { Experiences } from "@/config/experience";

interface ProjectImagePreloaderProps {
  currentProjectId?: string;
}

export const ProjectImagePreloader = ({ currentProjectId }: ProjectImagePreloaderProps) => {
  useEffect(() => {
    const preloadProjectImages = () => {
      // Get all images from all projects
      const allImages: string[] = [];
      
      Experiences.forEach((project) => {
        // Add company logo
        allImages.push(project.companyLogoImg);
        
        // Add all page images
        project.pagesInfoArr.forEach((page) => {
          page.imgArr.forEach((img) => {
            allImages.push(img);
          });
        });
      });

      // Prioritize current project images
      let priorityImages: string[] = [];
      let otherImages: string[] = [];

      if (currentProjectId) {
        const currentProject = Experiences.find(p => p.id === currentProjectId);
        if (currentProject) {
          priorityImages.push(currentProject.companyLogoImg);
          currentProject.pagesInfoArr.forEach((page) => {
            priorityImages.push(...page.imgArr);
          });
          
          otherImages = allImages.filter(img => !priorityImages.includes(img));
        }
      } else {
        otherImages = allImages;
      }

          // Preload priority images immediately
    priorityImages.forEach((src, index) => {
      setTimeout(() => {
        const img = new Image();
        img.loading = "eager";
        img.src = src;
      }, index * 25); // Faster staggering
    });

    // Preload other images with shorter delay
    otherImages.forEach((src, index) => {
      setTimeout(() => {
        const img = new Image();
        img.loading = "eager";
        img.src = src;
      }, 300 + (index * 50)); // Shorter delay, faster staggering
    });
    };

    // Start preloading after component mounts
    const timer = setTimeout(preloadProjectImages, 100);
    
    return () => clearTimeout(timer);
  }, [currentProjectId]);

  return null;
};
