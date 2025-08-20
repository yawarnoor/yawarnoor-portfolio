import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

import { ClientPageWrapper } from "@/components/common/client-page-wrapper";
import { Icons } from "@/components/common/icons";
import { IntersectionObserverImage } from "@/components/common/intersection-observer-image";
import { SimpleLoadingLink } from "@/components/common/simple-loading-link";
import ExperienceDescription from "@/components/experience/exp-description";
import { buttonVariants } from "@/components/ui/button";
import { NavButton } from "@/components/ui/nav-button";
import ChipContainer from "@/components/ui/chip-container";
import CustomTooltip from "@/components/ui/custom-tooltip";
import { Experiences } from "@/config/experience";
import { siteConfig } from "@/config/site";
import { cn, formatDateFromObj } from "@/lib/utils";
import profileImg from "@/public/profile-img.jpg";

interface ProjectPageProps {
  params: {
    projectId: string;
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  let exp = Experiences.find((val) => val.id === params.projectId);
  if (!exp) {
    redirect("/projects");
  }

  return (
    <article className="container relative max-w-3xl py-6 lg:py-10">
      <Link
        href="/projects"
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "absolute left-[-200px] top-14 hidden xl:inline-flex"
        )}
      >
        <Icons.chevronLeft className="mr-2 h-4 w-4" />
        All Projects
      </Link>
      <div>
        <time
          dateTime={Date.now().toString()}
          className="block text-sm text-muted-foreground"
        >
          {formatDateFromObj(exp.startDate)}
        </time>
        <h1 className="flex items-center justify-between mt-2 font-heading text-4xl leading-tight lg:text-5xl">
          {exp.companyName}
          <div className="flex items-center">
            {exp.githubLink && (
              <CustomTooltip text="Link to the source code.">
                <Link href={exp.githubLink} target="_blank">
                  <Icons.gitHub className="w-6 ml-4 text-muted-foreground hover:text-foreground" />
                </Link>
              </CustomTooltip>
            )}
            {exp.websiteLink && (
              <CustomTooltip text="Please note that some project links may be temporarily unavailable.">
                <Link href={exp.websiteLink} target="_blank">
                  <Icons.externalLink className="w-6 ml-4 text-muted-foreground hover:text-foreground " />
                </Link>
              </CustomTooltip>
            )}
          </div>
        </h1>
        <ChipContainer textArr={exp.category} />
        <div className="mt-4 flex space-x-4">
          <Link
            href={siteConfig.links.github}
            className="flex items-center space-x-2 text-sm"
          >
            <Image
              src={profileImg}
              alt={"yawar"}
              width={42}
              height={42}
              className="rounded-full bg-background"
            />

            <div className="flex-1 text-left leading-tight">
              <p className="font-medium">{"Yawar Noor"}</p>
              <p className="text-[12px] text-muted-foreground">
                @{siteConfig.username}
              </p>
            </div>
          </Link>
        </div>
      </div>

      <div className="image-container my-8">
        <IntersectionObserverImage
          src={exp.companyLogoImg}
          alt={exp.companyName}
          width={720}
          height={405}
          className="rounded-md border bg-muted object-cover project-image mx-auto block"
          priority
        />
      </div>

      <div className="mb-7 ">
        <h2 className="inline-block font-heading text-3xl leading-tight lg:text-3xl mb-2">
          Tech Stack
        </h2>
        <ChipContainer textArr={exp.techStack} />
      </div>

      <div className="mb-7 ">
        <h2 className="inline-block font-heading text-3xl leading-tight lg:text-3xl mb-2">
          Description
        </h2>
        {/* {<exp.descriptionComponent />} */}
        <ExperienceDescription
          paragraphs={exp.descriptionDetails.paragraphs}
          bullets={exp.descriptionDetails.bullets}
        />
      </div>

      <div className="mb-7 ">
        <h2 className="inline-block font-heading text-3xl leading-tight lg:text-3xl mb-5">
          Page Info
        </h2>
        {exp.pagesInfoArr.map((page, ind) => (
          <div key={ind}>
            <h3 className="flex items-center font-heading text-xl leading-tight lg:text-xl mt-3">
              <Icons.star className="h-5 w-5 mr-2" /> {page.title}
            </h3>
            <div>
              <p>{page.description}</p>
              {page.imgArr.map((img, ind) => (
                <div key={ind} className="image-container my-4">
                  <IntersectionObserverImage
                    src={img}
                    alt={`${page.title} - Screenshot ${ind + 1}`}
                    width={720}
                    height={405}
                    className="rounded-md border bg-muted project-image mx-auto block"
                    priority={ind === 0}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 720px"
                    rootMargin="200px"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <hr className="mt-12" />
      <div className="flex justify-center py-6 lg:py-10">
        <NavButton href="/projects" variant="ghost">
          <Icons.chevronLeft className="mr-2 h-4 w-4" />
          All Projects
        </NavButton>
      </div>
    </article>
  );
} 