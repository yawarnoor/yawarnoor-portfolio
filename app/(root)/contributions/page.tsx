import { Metadata } from "next";

import PageContainer from "@/components/common/page-container";
import ContributionCard from "@/components/contributions/contribution-card";
import { contributionsUnsorted } from "@/config/contributions";
import { pagesConfig } from "@/config/pages";

export const metadata: Metadata = {
  title: "Open Source Contributions",
  description: "Yawar Noor's contributions to open source projects and community initiatives.",
};

export default function ContributonsPage() {
  return (
    <PageContainer
      title="Open Source Contributions"
      description="Contributing to the developer community through open source projects"
    >
      <ContributionCard
        contributions={contributionsUnsorted}
      />
    </PageContainer>
  );
}
