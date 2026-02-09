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
import { KanbanDocs } from "@/components/docs/KanbanDocs";
import { ChartsDocs } from "@/components/docs/ChartsDocs";
import { AuthDocs } from "@/components/docs/AuthDocs";
import { DataGridDocs } from "@/components/docs/DataGridDocs";
import { ProjectBoardDocs } from "@/components/docs/ProjectBoardDocs";
import { ActivityFeedDocs } from "@/components/docs/ActivityFeedDocs";
import { ChatDocs } from "@/components/docs/ChatDocs";

const componentMap: Record<string, React.FC> = {
  button: ButtonDocs,
  input: InputDocs,
  badge: BadgeDocs,
  alert: AlertDocs,
  card: CardDocs,
  kanban: KanbanDocs,
  charts: ChartsDocs,
  auth: AuthDocs,
  datagrid: DataGridDocs,
  "project-board": ProjectBoardDocs,
  "activity-feed": ActivityFeedDocs,
  "chat": ChatDocs,
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
