"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Rating from "@/components/skills/rating";
import { skillCategories, SkillCategory } from "@/config/skills-safe";

interface CategorizedSkillsProps {
  categories?: SkillCategory[];
}

export default function CategorizedSkills({ 
  categories = skillCategories 
}: CategorizedSkillsProps) {
  const [activeTab, setActiveTab] = useState("all");

  // Get all skills from all categories
  const allSkills = categories.flatMap(category => category.skills);

  return (
    <div className="w-full">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3 md:grid-cols-5 lg:grid-cols-9 mb-8">
          <TabsTrigger value="all" className="text-sm">
            All
          </TabsTrigger>
          {categories.map((category) => (
            <TabsTrigger 
              key={category.id} 
              value={category.id}
              className="text-sm"
            >
              {category.title.split(' ')[0]}
            </TabsTrigger>
          ))}
        </TabsList>

        {/* All Skills Tab */}
        <TabsContent value="all" className="w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            <div className="text-center space-y-2">
              <h2 className="text-2xl font-bold">All Skills</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Complete overview of my technical expertise and professional competencies
              </p>
            </div>

            <div className="mx-auto grid justify-center gap-3 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8">
              {allSkills.map((skill, skillIndex) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    duration: 0.2, 
                    delay: skillIndex * 0.02,
                    ease: "easeOut"
                  }}
                  whileHover={{ scale: 1.1 }}
                  className="relative overflow-hidden rounded-lg border bg-background p-3 hover:shadow-md transition-all duration-200 cursor-pointer group"
                >
                  <div className="flex flex-col items-center justify-center space-y-2 h-20">
                    <div className="flex items-center justify-center">
                      <skill.icon size={32} className="text-primary group-hover:scale-110 transition-transform duration-200" />
                    </div>
                    <h3 className="font-medium text-xs text-center leading-tight">
                      {skill.name}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="text-center pt-4">
              <p className="text-sm text-muted-foreground">
                {allSkills.length} total skills across {categories.length} specialization areas
              </p>
            </div>
          </motion.div>
        </TabsContent>

        {categories.map((category, categoryIndex) => (
          <TabsContent key={category.id} value={category.id} className="w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <div className="text-center space-y-2">
                <h2 className="text-2xl font-bold">{category.title}</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  {category.description}
                </p>
              </div>

              <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ 
                      duration: 0.3, 
                      delay: skillIndex * 0.1,
                      ease: "easeOut"
                    }}
                    whileHover={{ scale: 1.05 }}
                    className="relative overflow-hidden rounded-lg border bg-background p-2 hover:shadow-lg transition-all duration-200"
                  >
                    <div className="flex h-[230px] flex-col justify-between rounded-md p-6">
                      <div className="flex items-center justify-center">
                        <skill.icon size={50} className="text-primary" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-bold text-center">{skill.name}</h3>
                        <p className="text-sm text-muted-foreground text-center">
                          {skill.description}
                        </p>
                        <div className="flex justify-center">
                          <Rating stars={skill.rating} />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="text-center pt-4">
                <p className="text-sm text-muted-foreground">
                  {category.skills.length} skills in {category.title}
                </p>
              </div>
            </motion.div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
