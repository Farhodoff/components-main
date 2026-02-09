import { useState } from "react";
import { ProfileForm, NotificationsForm, AccountForm } from "@/components/templates/SettingsLayout";
import { Header } from "@/components/Header";

const SettingsPage = () => {
    const [activeTab, setActiveTab] = useState("profile");

    const sidebarNavItems = [
        {
            title: "Profile",
            href: "#",
            onClick: () => setActiveTab("profile"),
        },
        {
            title: "Notifications",
            href: "#",
            onClick: () => setActiveTab("notifications"),
        },
        {
            title: "Account",
            href: "#",
            onClick: () => setActiveTab("account"),
        },
    ];

    return (
        <div className="min-h-screen bg-background">
            <Header />
            <div className="border-t">
                {/* We render a slightly modified version of SettingsLayout to handle click events instead of routing for this demo */}
                <div className="hidden space-y-6 p-10 pb-16 md:block">
                    <div className="space-y-0.5">
                        <h2 className="text-2xl font-bold tracking-tight">Settings</h2>
                        <p className="text-muted-foreground">
                            Manage your account settings and set e-mail preferences.
                        </p>
                    </div>
                    <div className="my-6 border-b" />
                    <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
                        <aside className="-mx-4 lg:w-1/5">
                            <nav className="flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1">
                                {sidebarNavItems.map((item) => (
                                    <button
                                        key={item.title}
                                        onClick={item.onClick}
                                        className={`justify-start text-left px-4 py-2 rounded-md hover:bg-muted ${activeTab === item.title.toLowerCase() ? "bg-muted font-medium text-primary" : "text-muted-foreground"}`}
                                    >
                                        {item.title}
                                    </button>
                                ))}
                            </nav>
                        </aside>
                        <div className="flex-1 lg:max-w-2xl">
                            {activeTab === "profile" && <ProfileForm />}
                            {activeTab === "notifications" && <NotificationsForm />}
                            {activeTab === "account" && <AccountForm />}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SettingsPage;
