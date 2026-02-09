import { AnalyticsDashboard } from "@/components/templates/AnalyticsDashboard";
import { Header } from "@/components/Header";

const DashboardPage = () => {
    return (
        <div className="min-h-screen bg-background">
            <Header />
            <div className="container py-10">
                <AnalyticsDashboard />
            </div>
        </div>
    );
};

export default DashboardPage;
