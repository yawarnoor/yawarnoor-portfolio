import { Metadata } from "next";

import PageContainer from "@/components/common/page-container";
import CategorizedSkills from "@/components/skills/categorized-skills";
import { pagesConfig } from "@/config/pages";

export const metadata: Metadata = {
  title: pagesConfig.skills.metadata.title,
  description: pagesConfig.skills.metadata.description,
};

export default function SkillsPage() {
  return (
    <PageContainer
      title={pagesConfig.skills.title}
      description="Comprehensive overview of my technical expertise organized by specialization areas"
    >
      <CategorizedSkills />
    </PageContainer>
  );
}
