import { ProjectBoard } from "@/components/templates/ProjectBoard";
import { Header } from "@/components/Header";

const ProjectBoardPage = () => {
    return (
        <div className="flex flex-col h-screen bg-background">
            <Header />
            <ProjectBoard />
        </div>
    );
};

export default ProjectBoardPage;
