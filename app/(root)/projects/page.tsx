import { Metadata } from "next";

import { ClientPageWrapper } from "@/components/common/client-page-wrapper";
import PageContainer from "@/components/common/page-container";
import ProjectCardCarousel from "@/components/experience/project-card-carousel";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Experiences } from "@/config/experience";
import { pagesConfig } from "@/config/pages";

export const metadata: Metadata = {
  title: pagesConfig.projects.metadata.title,
  description: pagesConfig.projects.metadata.description,
};

const renderContent = (tabVal: string) => {
  let expArr = Experiences;
  
  if (tabVal === "mobile") {
    expArr = expArr.filter((val) => val.category.some(cat => cat === "Mobile Dev"));
  } else if (tabVal === "web") {
    expArr = expArr.filter((val) => val.category.some(cat => 
      cat === "Web Dev" || cat === "Frontend" || cat === "Backend" || cat === "Full Stack"
    ));
  } else if (tabVal === "ai") {
    expArr = expArr.filter((val) => val.category.some(cat => cat === "AI/ML"));
  } else if (tabVal === "other") {
    expArr = expArr.filter((val) => val.id === "campus-swipe" || val.id === "gsx2json-utility");
  }
  // tabVal === "all" shows all projects

  // Limit to first 6 projects per category for better performance
  const limitedExpArr = expArr.slice(0, 6);

  return (
    <div className="mx-auto my-4 grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3 static">
      {limitedExpArr.map((exp) => (
        <ProjectCardCarousel project={exp} key={exp.id} />
      ))}
      {expArr.length > 6 && (
        <div className="col-span-full flex justify-center mt-4">
          <p className="text-muted-foreground text-sm">
            Showing {limitedExpArr.length} of {expArr.length} projects
          </p>
        </div>
      )}
    </div>
  );
};

export default function ProjectsPage() {
  return (
    <ClientPageWrapper>
      <PageContainer
        title={pagesConfig.projects.title}
        description={pagesConfig.projects.description}
      >
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid max-w-[32rem] mx-auto grid-cols-5">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="mobile">Mobile</TabsTrigger>
            <TabsTrigger value="web">Web</TabsTrigger>
            <TabsTrigger value="ai">AI/ML</TabsTrigger>
            <TabsTrigger value="other">Utilities & IoT</TabsTrigger>
          </TabsList>
          <TabsContent value="all" className="w-full">
            {renderContent("all")}
          </TabsContent>
          <TabsContent value="mobile" className="w-full">
            {renderContent("mobile")}
          </TabsContent>
          <TabsContent value="web" className="w-full">
            {renderContent("web")}
          </TabsContent>
          <TabsContent value="ai" className="w-full">
            {renderContent("ai")}
          </TabsContent>
          <TabsContent value="other" className="w-full">
            {renderContent("other")}
          </TabsContent>
        </Tabs>
      </PageContainer>
    </ClientPageWrapper>
  );
} 