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
import { ComboboxDocs } from "@/components/docs/ComboboxDocs";
import { DatePickerDocs } from "@/components/docs/DatePickerDocs";
import { EmptyStateDocs } from "@/components/docs/EmptyStateDocs";
import { FileUploadDocs } from "@/components/docs/FileUploadDocs";
import { TimelineDocs } from "@/components/docs/TimelineDocs";
import { DialogDocs } from "@/components/docs/DialogDocs";
import { SelectDocs } from "@/components/docs/SelectDocs";
import { TabsDocs } from "@/components/docs/TabsDocs";
import { AccordionDocs } from "@/components/docs/AccordionDocs";
import { BreadcrumbDocs } from "@/components/docs/BreadcrumbDocs";
import { CheckboxDocs } from "@/components/docs/CheckboxDocs";
import { SwitchDocs } from "@/components/docs/SwitchDocs";
import { SliderDocs } from "@/components/docs/SliderDocs";
import { TextareaDocs } from "@/components/docs/TextareaDocs";
import { TooltipDocs } from "@/components/docs/TooltipDocs";
import { PopoverDocs } from "@/components/docs/PopoverDocs";
import { ToastDocs } from "@/components/docs/ToastDocs";
import { AvatarDocs } from "@/components/docs/AvatarDocs";
import { SkeletonDocs } from "@/components/docs/SkeletonDocs";
import { ProgressDocs } from "@/components/docs/ProgressDocs";

const componentMap: Record<string, React.FC> = {
  tabs: TabsDocs,
  accordion: AccordionDocs,
  breadcrumb: BreadcrumbDocs,
  button: ButtonDocs,
  input: InputDocs,
  textarea: TextareaDocs,
  select: SelectDocs,
  checkbox: CheckboxDocs,
  switch: SwitchDocs,
  slider: SliderDocs,
  badge: BadgeDocs,
  avatar: AvatarDocs,
  skeleton: SkeletonDocs,
  progress: ProgressDocs,
  alert: AlertDocs,
  card: CardDocs,
  dialog: DialogDocs,
  tooltip: TooltipDocs,
  popover: PopoverDocs,
  toast: ToastDocs,
  sonner: ToastDocs,
  kanban: KanbanDocs,
  charts: ChartsDocs,
  auth: AuthDocs,
  datagrid: DataGridDocs,
  "project-board": ProjectBoardDocs,
  "activity-feed": ActivityFeedDocs,
  chat: ChatDocs,
  combobox: ComboboxDocs,
  datepicker: DatePickerDocs,
  "empty-state": EmptyStateDocs,
  "file-upload": FileUploadDocs,
  timeline: TimelineDocs,
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
