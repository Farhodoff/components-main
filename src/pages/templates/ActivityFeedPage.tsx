import { ActivityFeed } from "@/components/templates/ActivityFeed";
import { Header } from "@/components/Header";

const ActivityFeedPage = () => {
    return (
        <div className="min-h-screen bg-background">
            <Header />
            <div className="container py-8">
                <ActivityFeed />
            </div>
        </div>
    );
};

export default ActivityFeedPage;
