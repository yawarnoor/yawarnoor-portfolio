import { Metadata } from "next";

import { AnimatedSection } from "@/components/common/animated-section";
import { Icons } from "@/components/common/icons";
import PageContainer from "@/components/common/page-container";
import { achievements, achievementsByType, keyStats } from "@/config/achievements";
import { pagesConfig } from "@/config/pages";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `${pagesConfig.achievements.metadata.title} | Professional Certifications & Awards`,
  description: `${pagesConfig.achievements.metadata.description} Showcasing academic excellence, technical certifications, and professional achievements.`,
  keywords: [
    "certifications",
    "awards",
    "academic achievements",
    "computer science graduate",
    "technical certifications",
    "professional recognition",
  ],
  alternates: {
    canonical: `${siteConfig.url}/achievements`,
  },
};

export default function AchievementsPage() {
  // Icon mapping for achievement types
  const getAchievementIcon = (achievementType: string, achievementId: string) => {
    switch (achievementType) {
      case "academic":
        return <Icons.star className="w-8 h-8 text-primary" />;
      case "certification":
        if (achievementId.includes("cnss")) return <Icons.work className="w-8 h-8 text-primary" />;
        if (achievementId.includes("react")) return <Icons.react className="w-8 h-8 text-primary" />;
        if (achievementId.includes("flutter")) return <Icons.flutter className="w-8 h-8 text-primary" />;
        if (achievementId.includes("mern")) return <Icons.nodejs className="w-8 h-8 text-primary" />;
        return <Icons.star className="w-8 h-8 text-primary" />;
      case "award":
        return <Icons.star className="w-8 h-8 text-primary" />;
      case "leadership":
        return <Icons.work className="w-8 h-8 text-primary" />;
      default:
        return <Icons.star className="w-8 h-8 text-primary" />;
    }
  };

  return (
    <PageContainer
      title={pagesConfig.achievements.title}
      description={pagesConfig.achievements.description}
    >
      {/* Key Stats Overview */}
      <AnimatedSection className="mb-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="bg-primary/10 rounded-lg p-4">
            <div className="text-2xl font-bold text-primary">{keyStats.cgpa}</div>
            <div className="text-sm text-muted-foreground">CGPA</div>
          </div>
          <div className="bg-primary/10 rounded-lg p-4">
            <div className="text-2xl font-bold text-primary">{keyStats.classRank}</div>
            <div className="text-sm text-muted-foreground">Class Rank</div>
          </div>
          <div className="bg-primary/10 rounded-lg p-4">
            <div className="text-2xl font-bold text-primary">{keyStats.certifications}</div>
            <div className="text-sm text-muted-foreground">Certifications</div>
          </div>
          <div className="bg-primary/10 rounded-lg p-4">
            <div className="text-2xl font-bold text-primary">{keyStats.awards}</div>
            <div className="text-sm text-muted-foreground">Awards</div>
          </div>
        </div>
      </AnimatedSection>

      {/* Academic Excellence */}
      <AnimatedSection className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
          <Icons.star className="w-6 h-6 text-primary" />
          Academic Excellence
        </h2>
        <div className="grid gap-6 md:grid-cols-1">
          {achievementsByType.academic.map((achievement, index) => (
            <div key={achievement.id} className="border rounded-lg p-6 bg-card">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  {getAchievementIcon(achievement.type, achievement.id)}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">{achievement.title}</h3>
                  <p className="text-primary font-medium mb-1">{achievement.organization}</p>
                  <p className="text-sm text-muted-foreground mb-3">{achievement.date}</p>
                  <p className="text-muted-foreground">{achievement.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </AnimatedSection>

      {/* Professional Certifications */}
      <AnimatedSection className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
          <Icons.star className="w-6 h-6 text-primary" />
          Professional Certifications
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {achievementsByType.certifications.map((achievement, index) => (
            <div key={achievement.id} className="border rounded-lg p-6 bg-card">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  {getAchievementIcon(achievement.type, achievement.id)}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-2">{achievement.title}</h3>
                  <p className="text-primary font-medium mb-1">{achievement.organization}</p>
                  <p className="text-sm text-muted-foreground mb-3">{achievement.date}</p>
                  <p className="text-sm text-muted-foreground">{achievement.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </AnimatedSection>

      {/* Awards & Recognition */}
      <AnimatedSection className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
          <Icons.star className="w-6 h-6 text-primary" />
          Awards & Recognition
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {achievementsByType.awards.map((achievement, index) => (
            <div key={achievement.id} className="border rounded-lg p-6 bg-card">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  {getAchievementIcon(achievement.type, achievement.id)}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-2">{achievement.title}</h3>
                  <p className="text-primary font-medium mb-1">{achievement.organization}</p>
                  <p className="text-sm text-muted-foreground mb-3">{achievement.date}</p>
                  <p className="text-sm text-muted-foreground">{achievement.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </AnimatedSection>

      {/* Leadership Experience */}
      <AnimatedSection className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
          <Icons.work className="w-6 h-6 text-primary" />
          Leadership & Community Impact
        </h2>
        <div className="grid gap-6 md:grid-cols-1">
          {achievementsByType.leadership.map((achievement, index) => (
            <div key={achievement.id} className="border rounded-lg p-6 bg-card">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  {getAchievementIcon(achievement.type, achievement.id)}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">{achievement.title}</h3>
                  <p className="text-primary font-medium mb-1">{achievement.organization}</p>
                  <p className="text-sm text-muted-foreground mb-3">{achievement.date}</p>
                  <p className="text-muted-foreground">{achievement.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </AnimatedSection>
    </PageContainer>
  );
} 