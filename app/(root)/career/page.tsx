import { Metadata } from "next";

import Timeline from "@/components/career/timeline";
import PageContainer from "@/components/common/page-container";
import { professionalExperiences, academicExperiences } from "@/config/career";
import { pagesConfig } from "@/config/pages";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `${pagesConfig.career.metadata.title} | Interactive Developer Timeline`,
  description: `${pagesConfig.career.metadata.description} This interactive career timeline showcases professional experience in a visually appealing way. Part of our open-source Next.js portfolio template.`,
  keywords: [
    "career timeline template",
    "interactive timeline",
    "developer experience",
    "portfolio template",
    "Next.js",
  ],
  alternates: {
    canonical: `${siteConfig.url}/career`,
  },
};

export default function CareerPage() {
  return (
    <PageContainer
      title={pagesConfig.career.title}
      description={pagesConfig.career.description}
    >
      <div className="space-y-12">
        <div>
          <h2 className="text-2xl font-bold mb-6 text-center">Professional Experience</h2>
          <Timeline experiences={professionalExperiences} />
        </div>
        
        <div>
          <h2 className="text-2xl font-bold mb-6 text-center">Academic Background</h2>
          <Timeline experiences={academicExperiences} />
        </div>
      </div>
    </PageContainer>
  );
}
