import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { Icons } from "@/components/common/icons";
import { IntersectionObserverImage } from "@/components/common/intersection-observer-image";
import { SimpleLoadingLink } from "@/components/common/simple-loading-link";
import { Button } from "@/components/ui/button";
import { LoadingButton } from "@/components/ui/loading-button";
import ChipContainer from "@/components/ui/chip-container";
import { ExperienceInterface } from "@/config/experience";

interface ProjectCardProps {
  project: ExperienceInterface;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="relative p-6 max-w-sm h-full bg-background border border-border rounded-lg flex flex-col">
      {/* Status badge */}
      {project.status === "in-progress" && (
        <div className="absolute right-3 top-3 z-10 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full bg-orange-500 dark:bg-orange-600 text-white shadow-lg border-2 border-white/20 dark:border-black/20">
          <div className="w-2 h-2 rounded-full bg-white dark:bg-orange-200 animate-pulse shadow-sm"></div>
          In Progress
        </div>
      )}
      
      <div className="relative w-full h-[200px] flex-shrink-0">
        <IntersectionObserverImage
          className="rounded-lg border border-border object-cover"
          src={project.companyLogoImg}
          alt={`${project.companyName} logo`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          rootMargin="50px"
        />
      </div>
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
          <SimpleLoadingLink href={`/projects/${project.id}`}>
            <LoadingButton variant={"default"}>
              Read more
              <Icons.chevronRight className="w-4 ml-1" />
            </LoadingButton>
          </SimpleLoadingLink>
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
