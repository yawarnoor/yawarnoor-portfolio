import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

import { AnimatedSection } from "@/components/common/animated-section";
import { AnimatedText } from "@/components/common/animated-text";
import { ClientPageWrapper } from "@/components/common/client-page-wrapper";
import { Icons } from "@/components/common/icons";
import { SimpleLoadingLink } from "@/components/common/simple-loading-link";

import ProjectCardCarousel from "@/components/experience/project-card-carousel";
import SkillsCard from "@/components/skills/skills-card";
import { Button, buttonVariants } from "@/components/ui/button";
import { NavButton } from "@/components/ui/nav-button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { featuredExperiences, Experiences } from "@/config/experience";
import { pagesConfig } from "@/config/pages";
import { siteConfig } from "@/config/site";
import { featuredSkills } from "@/config/skills-safe";
import { keyStats, featuredAchievements } from "@/config/achievements";
import { cn } from "@/lib/utils";
import profileImg from "@/public/profile-img.jpg";

export const metadata: Metadata = {
  title: `${pagesConfig.home.metadata.title} | ${siteConfig.name}`,
  description: `${pagesConfig.home.metadata.description} Explore my portfolio showcasing innovative full-stack solutions and cutting-edge technology implementations.`,
  alternates: {
    canonical: siteConfig.url,
  },
};

export default function IndexPage() {
  // Structured data for personal portfolio
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.authorName,
    url: siteConfig.url,
    image: siteConfig.ogImage,
    jobTitle: "Full Stack Developer",
    sameAs: [siteConfig.links.github, siteConfig.links.linkedin],
  };

  // Icon mapping for achievement types (same as achievements page)
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

  // Function to filter projects by category for homepage tabs
  const getProjectsByCategory = (category: string) => {
    if (category === "all") return featuredExperiences.slice(0, 3); // Limit featured to 3
    if (category === "other") {
      return Experiences.filter(exp => exp.id === "campus-swipe" || exp.id === "gsx2json-utility").slice(0, 3);
    }
    return Experiences.filter(exp => 
      exp.category.some(cat => {
        if (category === "mobile") return cat === "Mobile Dev";
        if (category === "web") return cat === "Web Dev" || cat === "Frontend" || cat === "Backend" || cat === "Full Stack";
        if (category === "ai") return cat === "AI/ML";
        return false;
      })
    ).slice(0, 3); // Show up to 3 projects per category for faster loading
  };

  // Structured data for website as a software application (template)
  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Next.js Portfolio Template",
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    author: {
      "@type": "Person",
      name: siteConfig.authorName,
      url: siteConfig.url,
    },
  };

  return (
    <ClientPageWrapper>
      <Script
        id="schema-person"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <Script
        id="schema-software"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />

      <section className="space-y-6 pb-8 pt-24 mb-0 md:pb-12 md:pt-32 lg:pt-40 h-screen flex items-center">
        <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
          <Image
            src={profileImg}
            height={100}
            width={100}
            sizes="(max-width: 768px) 60vw, 16rem"
            className="bg-primary rounded-full mb-0 h-auto md:mb-2 w-[60%] max-w-[16rem] border-8 border-primary"
            alt="Yawar Noor - Full Stack Developer Portfolio"
            priority
          />
          <AnimatedText
            as="h1"
            delay={0.2}
            className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Yawar Noor
          </AnimatedText>
          <AnimatedText
            as="h3"
            delay={0.4}
            className="font-heading text-base sm:text-xl md:text-xl lg:text-2xl"
          >
            Full Stack Web and Mobile Developer
          </AnimatedText>
          <div className="mt-4 max-w-[42rem] text-center">
            <p className="leading-normal text-muted-foreground text-sm sm:text-base">
              Dedicated computer science student with a passion for technology and innovation. Proficient in MERN stack, Flutter, AI technologies, and automations with a proven track record in leadership through organizing large-scale tech events. I am eager to contribute my technical skills and enthusiasm to a dynamic software development team.
            </p>
          </div>

          <div className="flex flex-col mt-10 items-center justify-center sm:flex-row sm:space-x-4 gap-3">
            <AnimatedText delay={0.6}>
              <Link
                href={siteConfig.links.github}
                target="_blank"
                className={cn(buttonVariants({ size: "lg" }))}
                aria-label="View Yawar Noor's GitHub profile"
              >
                <Icons.gitHub className="w-4 h-4 mr-2" /> GitHub
              </Link>
            </AnimatedText>
            <AnimatedText delay={0.8}>
              <Link
                href={siteConfig.links.linkedin}
                target="_blank"
                className={cn(
                  buttonVariants({
                    variant: "outline",
                    size: "lg",
                  })
                )}
                aria-label="Connect with Yawar Noor on LinkedIn"
              >
                <Icons.linkedin className="w-4 h-4 mr-2" /> LinkedIn
              </Link>
            </AnimatedText>
            <AnimatedText delay={1.0}>
              <SimpleLoadingLink
                href={"/contact"}
                rel="noreferrer"
                className={cn(
                  buttonVariants({
                    variant: "secondary",
                    size: "lg",
                  }),
                  "inline-flex items-center"
                )}
              >
                <Icons.contact className="w-4 h-4 mr-2" /> Contact
              </SimpleLoadingLink>
            </AnimatedText>
            <AnimatedText delay={1.2}>
              <Link
                href={"/resume"}
                target="_blank"
                className={cn(
                  buttonVariants({
                    variant: "outline",
                    size: "lg",
                  })
                )}
                aria-label="View Yawar Noor's Resume"
              >
                <Icons.post className="w-4 h-4 mr-2" /> Resume
              </Link>
            </AnimatedText>
          </div>


          <AnimatedText delay={1.2}>
            <Icons.chevronDown className="h-6 w-6 mt-10" />
          </AnimatedText>
        </div>
      </section>
      <AnimatedSection
        className="container space-y-6 bg-muted py-10"
        id="skills"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <AnimatedText
            as="h2"
            className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl"
          >
            {pagesConfig.skills.title}
          </AnimatedText>
          <AnimatedText
            as="p"
            delay={0.2}
            className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7"
          >
            {pagesConfig.skills.description}
          </AnimatedText>
        </div>
        <SkillsCard skills={featuredSkills} />
        <AnimatedText delay={0.4} className="flex justify-center">
          <Link href="/skills">
            <Button variant={"outline"} className="rounded-xl">
              <Icons.chevronDown className="mr-2 h-4 w-4" /> View All
            </Button>
          </Link>
        </AnimatedText>
      </AnimatedSection>
      <AnimatedSection
        direction="right"
        className="container space-y-6 py-10 my-14"
        id="experience"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <AnimatedText
            as="h2"
            className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl"
          >
            {pagesConfig.projects.title}
          </AnimatedText>
          <AnimatedText
            as="p"
            delay={0.2}
            className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7"
          >
            {pagesConfig.projects.description}
          </AnimatedText>
        </div>
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid max-w-[32rem] mx-auto grid-cols-5 mb-8">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="mobile">Mobile</TabsTrigger>
            <TabsTrigger value="web">Web</TabsTrigger>
            <TabsTrigger value="ai">AI/ML</TabsTrigger>
            <TabsTrigger value="other">Utilities & IoT</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all" className="w-full">
            <div className="mx-auto grid justify-center gap-4 md:w-full lg:grid-cols-3">
              {getProjectsByCategory("all").map((exp, index) => (
                <AnimatedSection
                  key={exp.id}
                  delay={0.1 * (index + 1)}
                  direction="up"
                >
                  <ProjectCardCarousel project={exp} />
                </AnimatedSection>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="mobile" className="w-full">
            <div className="mx-auto grid justify-center gap-4 md:w-full lg:grid-cols-3">
              {getProjectsByCategory("mobile").map((exp, index) => (
                <AnimatedSection
                  key={exp.id}
                  delay={0.1 * (index + 1)}
                  direction="up"
                >
                  <ProjectCardCarousel project={exp} />
                </AnimatedSection>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="web" className="w-full">
            <div className="mx-auto grid justify-center gap-4 md:w-full lg:grid-cols-3">
              {getProjectsByCategory("web").map((exp, index) => (
                <AnimatedSection
                  key={exp.id}
                  delay={0.1 * (index + 1)}
                  direction="up"
                >
                  <ProjectCardCarousel project={exp} />
                </AnimatedSection>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="ai" className="w-full">
            <div className="mx-auto grid justify-center gap-4 md:w-full lg:grid-cols-3">
              {getProjectsByCategory("ai").map((exp, index) => (
                <AnimatedSection
                  key={exp.id}
                  delay={0.1 * (index + 1)}
                  direction="up"
                >
                  <ProjectCardCarousel project={exp} />
                </AnimatedSection>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="other" className="w-full">
            <div className="mx-auto grid justify-center gap-4 md:w-full lg:grid-cols-3">
              {getProjectsByCategory("other").map((exp, index) => (
                <AnimatedSection
                  key={exp.id}
                  delay={0.1 * (index + 1)}
                  direction="up"
                >
                  <ProjectCardCarousel project={exp} />
                </AnimatedSection>
              ))}
            </div>
          </TabsContent>
        </Tabs>
        <AnimatedText delay={0.4} className="flex justify-center">
          <NavButton href="/projects" variant="outline" className="rounded-xl">
            <Icons.chevronDown className="mr-2 h-4 w-4" /> View All
          </NavButton>
        </AnimatedText>
        {/* <div className="mx-auto text-center md:max-w-[58rem]">
                    <p className="leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                        See all the relevant experiences.
                    </p>
                </div> */}
      </AnimatedSection>
      <AnimatedSection
        direction="down"
        className="container space-y-6 bg-muted py-10 my-14"
        id="achievements"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <AnimatedText
            as="h2"
            className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl"
          >
            Certifications & Awards
          </AnimatedText>
          <AnimatedText
            as="p"
            delay={0.2}
            className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7"
          >
            Professional certifications, academic excellence, and recognition for technical achievements
          </AnimatedText>
        </div>
        <div className="mx-auto grid justify-center gap-4 md:w-full lg:grid-cols-3">
          {featuredAchievements.map((achievement, index) => (
            <AnimatedSection
              key={achievement.id}
              delay={0.1 * (index + 1)}
              direction="up"
            >
              <div className="relative overflow-hidden rounded-lg border bg-background p-6">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    {getAchievementIcon(achievement.type, achievement.id)}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg leading-tight">
                      {achievement.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {achievement.organization}
                    </p>
                    <p className="text-xs text-primary font-medium mt-1">
                      {achievement.date}
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-sm text-muted-foreground">
                  {achievement.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
        <AnimatedText delay={0.4} className="flex justify-center">
          <Link href="/achievements">
            <Button variant={"outline"} className="rounded-xl">
              <Icons.chevronDown className="mr-2 h-4 w-4" /> View All
            </Button>
          </Link>
        </AnimatedText>
      </AnimatedSection>
    </ClientPageWrapper>
  );
}
