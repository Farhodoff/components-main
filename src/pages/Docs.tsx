import React from "react";
import { useParams, Navigate } from "react-router-dom";
import { DocsIntroduction } from "@/components/docs/DocsIntroduction";
import { ButtonDocs } from "@/components/docs/ButtonDocs";
import { InputDocs } from "@/components/docs/InputDocs";
import { BadgeDocs } from "@/components/docs/BadgeDocs";
import { AlertDocs } from "@/components/docs/AlertDocs";
import { CardDocs } from "@/components/docs/CardDocs";
import { InstallationDocs } from "@/components/docs/InstallationDocs";
import { ThemingDocs } from "@/components/docs/ThemingDocs";
import { DocsLayout } from "@/components/layout/DocsLayout";
import { DocsSidebar } from "@/components/docs/DocsSidebar";

const componentMap: Record<string, React.FC> = {
  button: ButtonDocs,
  input: InputDocs,
  badge: BadgeDocs,
  alert: AlertDocs,
  card: CardDocs,
};

const Docs: React.FC = () => {
  const { component } = useParams<{ component?: string }>();

  const renderContent = () => {
    if (!component) return <DocsIntroduction />;

    // Check for static pages
    if (component === "installation") return <InstallationDocs />;
    if (component === "theming") return <ThemingDocs />;

    // Check for component docs
    const ComponentDocs = componentMap[component.toLowerCase()];
    if (ComponentDocs) return <ComponentDocs />;

    return <Navigate to="/docs" replace />;
  };

  return (
    <DocsLayout sidebar={<DocsSidebar />}>
      {renderContent()}
    </DocsLayout>
  );
};

export default Docs;
