"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Briefcase, GraduationCap, Users, Rocket, Code, Trophy, BookOpen } from "lucide-react";

import { Icons } from "@/components/common/icons";
import { SimpleLoadingLink } from "@/components/common/simple-loading-link";
import ChipContainer from "@/components/ui/chip-container";
import { CareerExperienceInterface } from "@/config/career";

interface TimelineItemProps {
  experience: CareerExperienceInterface;
  isLast: boolean;
  expandedId: string | null;
  toggleExpand: (id: string) => void;
}

// Helper function to extract year from date
const getYearFromDate = (date: Date): string => {
  return new Date(date).getFullYear().toString();
};

// Helper function to get icon and gradient based on experience type
const getExperienceVisuals = (experience: CareerExperienceInterface) => {
  const company = experience.company.toLowerCase();
  const position = experience.position.toLowerCase();
  
  // Debug log to see what we're checking
  console.log('Checking experience:', { position, company });
  
  // Determine experience type based on company and position
  if (company.includes('freelancer') || company.includes('fiverr') || company.includes('upwork')) {
    return {
      icon: Rocket,
      gradient: 'from-violet-500 to-pink-500',
      bgGradient: 'from-violet-500/20 to-pink-500/20',
      description: 'Freelance Work'
    };
  }
  
  // Check for leadership roles first (more specific)
  if (position.includes('lead') || position.includes('executive') || company.includes('society') || company.includes('robotics')) {
    return {
      icon: Trophy,
      gradient: 'from-orange-500 to-red-500',
      bgGradient: 'from-orange-500/20 to-red-500/20',
      description: 'Leadership'
    };
  }
  
  if (position.includes('matriculation') || position.includes('intermediate')) {
    return {
      icon: BookOpen,
      gradient: 'from-amber-500 to-yellow-500',
      bgGradient: 'from-amber-500/20 to-yellow-500/20',
      description: 'Early Education'
    };
  }
  
  if (company.includes('university') || position.includes('bachelor') || position.includes('science')) {
    return {
      icon: GraduationCap,
      gradient: 'from-emerald-500 to-teal-500',
      bgGradient: 'from-emerald-500/20 to-teal-500/20',
      description: 'Higher Education'
    };
  }
  
  if (position.includes('developer') || position.includes('intern')) {
    return {
      icon: Code,
      gradient: 'from-blue-500 to-purple-500',
      bgGradient: 'from-blue-500/20 to-purple-500/20',
      description: 'Development'
    };
  }
  
  // Default for professional work
  return {
    icon: Briefcase,
    gradient: 'from-indigo-500 to-blue-500',
    bgGradient: 'from-indigo-500/20 to-blue-500/20',
    description: 'Professional'
  };
};

const TimelineItem: React.FC<TimelineItemProps> = ({
  experience,
  isLast,
  expandedId,
  toggleExpand,
}) => {
  const isExpanded = expandedId === experience.id;
  const visuals = getExperienceVisuals(experience);
  const IconComponent = visuals.icon;

  return (
    <div className="relative">
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute left-4 sm:left-8 top-12 w-0.5 bg-border h-full z-0" />
      )}

      {/* Timeline item */}
      <div className="flex mb-8 relative">
        {/* Timeline dot and date */}
        <div className="relative">
          <motion.div
            className="w-8 h-8 sm:w-16 sm:h-16 rounded-full flex items-center justify-center z-10 relative"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            whileHover={{ scale: 1.1, rotate: 5 }}
          >
            <div className={`
              relative w-8 h-8 sm:w-16 sm:h-16 rounded-full 
              bg-gradient-to-br ${visuals.gradient}
              flex items-center justify-center
              shadow-lg shadow-black/20
              border-2 border-white/20 backdrop-blur-sm
              group-hover:shadow-xl group-hover:shadow-black/30
              transition-all duration-300
            `}>
              {/* Subtle inner gradient overlay */}
              <div className={`
                absolute inset-0 rounded-full 
                bg-gradient-to-t ${visuals.bgGradient}
                opacity-50
              `} />
              
              {/* Icon */}
              <IconComponent className="w-4 h-4 sm:w-8 sm:h-8 text-white relative z-10 drop-shadow-sm" />
              
              {/* Animated ring on hover */}
              <motion.div
                className={`
                  absolute inset-0 rounded-full border-2 
                  bg-gradient-to-br ${visuals.gradient}
                  opacity-0 scale-110
                `}
                whileHover={{ 
                  opacity: 0.3, 
                  scale: 1.2,
                  transition: { duration: 0.3 }
                }}
              />
            </div>
          </motion.div>
        </div>

        {/* Content card */}
        <motion.div
          className="ml-3 sm:ml-6 flex-1"
          initial={{ x: -10, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <motion.div
            className={`
              p-3 sm:p-5 rounded-lg border border-border bg-card hover:shadow-lg 
              transition-all duration-300 cursor-pointer
              ${isExpanded ? "shadow-md" : ""}
            `}
            onClick={() => toggleExpand(experience.id)}
            whileHover={{ y: -2 }}
            layout
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0">
              <div>
                <h3 className="text-lg sm:text-xl font-bold">
                  {experience.position}
                </h3>
                <div className="flex items-center">
                  <span className="text-muted-foreground text-sm sm:text-base">
                    {experience.company}
                  </span>
                  {experience.companyUrl && (
                    <Link
                      href={experience.companyUrl}
                      target="_blank"
                      className="ml-2 text-muted-foreground hover:text-foreground"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Icons.externalLink className="w-3 h-3" />
                    </Link>
                  )}
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground">
                  {experience.location}
                </div>
              </div>
              <div className="flex flex-row sm:flex-col items-center sm:items-end justify-between sm:justify-start gap-2">
                <div className="inline-flex items-center justify-center bg-background border border-primary px-2 py-0.5 rounded-full text-xs font-medium text-primary shadow-sm">
                  {typeof experience.endDate === "string"
                    ? getYearFromDate(experience.startDate) + " - Now"
                    : getYearFromDate(experience.startDate) +
                      " - " +
                      getYearFromDate(experience.endDate)}
                </div>
                <motion.div
                  animate={{ rotate: isExpanded ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Icons.chevronDown className="w-5 h-5 text-muted-foreground" />
                </motion.div>
              </div>
            </div>

            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{
                height: isExpanded ? "auto" : 0,
                opacity: isExpanded ? 1 : 0,
              }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              {isExpanded && (
                <div className="pt-3 mt-3 sm:pt-4 sm:mt-4 border-t border-border">
                  <div className="mb-3 sm:mb-4">
                    <h4 className="font-medium mb-1 sm:mb-2 text-xs sm:text-sm">
                      Summary
                    </h4>
                    <ul className="list-disc pl-4 sm:pl-5 space-y-1">
                      {experience.description.map((desc, idx) => (
                        <li key={idx} className="text-xs sm:text-sm">
                          {desc}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-3 sm:mb-4">
                    <h4 className="font-medium mb-1 sm:mb-2 text-xs sm:text-sm">
                      Key Achievements
                    </h4>
                    <ul className="list-disc pl-4 sm:pl-5 space-y-1">
                      {experience.achievements.map((achievement, idx) => (
                        <li key={idx} className="text-xs sm:text-sm">
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-3 sm:mb-4">
                    <h4 className="font-medium mb-1 sm:mb-2 text-xs sm:text-sm">
                      Skills
                    </h4>
                    <ChipContainer textArr={experience.skills} />
                  </div>

                  <SimpleLoadingLink
                    href={`/career/${experience.id}`}
                    className="inline-flex items-center mt-1 sm:mt-2 text-xs sm:text-sm font-medium text-primary hover:underline"
                  >
                    View Details
                    <Icons.chevronRight className="ml-1 w-3 h-3 sm:w-4 sm:h-4" />
                  </SimpleLoadingLink>
                </div>
              )}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

interface TimelineProps {
  experiences: CareerExperienceInterface[];
}

const Timeline: React.FC<TimelineProps> = ({ experiences }) => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  // Sort experiences by date (most recent first)
  const sortedExperiences = [...experiences].sort((a, b) => {
    const dateA = a.endDate === "Present" ? new Date() : a.endDate;
    const dateB = b.endDate === "Present" ? new Date() : b.endDate;
    return dateB.getTime() - dateA.getTime();
  });

  // Auto-expand the first item on initial load
  useEffect(() => {
    if (sortedExperiences.length > 0 && expandedId === null) {
      setExpandedId(sortedExperiences[0].id);
    }
  }, [sortedExperiences, expandedId]);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="container max-w-5xl mx-auto py-4 sm:py-8 px-2 sm:px-4">
      {sortedExperiences.map((experience, index) => (
        <TimelineItem
          key={experience.id}
          experience={experience}
          isLast={index === sortedExperiences.length - 1}
          expandedId={expandedId}
          toggleExpand={toggleExpand}
        />
      ))}
    </div>
  );
};

export default Timeline;
