import { ChatInterface } from "@/components/templates/ChatInterface";
import { Header } from "@/components/Header";

const ChatPage = () => {
    return (
        <div className="flex flex-col h-screen bg-background overflow-hidden">
            <Header />
            <ChatInterface />
        </div>
    );
};

export default ChatPage;
