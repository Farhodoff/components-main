import React, { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Send, Phone, Video, MoreVertical, Search } from "lucide-react";
import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";

const contacts = [
    { id: 1, name: "Alice Smith", avatar: "/avatars/01.png", lastMessage: "Hey, how are you?", time: "10:30 AM", unread: 2 }, // Using /avatars path as generic example
    { id: 2, name: "Bob Jones", avatar: "/avatars/02.png", lastMessage: "Can we meet later?", time: "09:15 AM", unread: 0 },
    { id: 3, name: "Carol White", avatar: "/avatars/03.png", lastMessage: "Project looks great!", time: "Yesterday", unread: 0 },
    { id: 4, name: "David Brown", avatar: "/avatars/04.png", lastMessage: "See you tomorrow.", time: "Mon", unread: 0 },
    { id: 5, name: "Eve Black", avatar: "/avatars/05.png", lastMessage: "Thanks!", time: "Sun", unread: 0 },
];

const messages = [
    { id: 1, sender: "Alice Smith", content: "Hi there!", time: "10:00 AM", isMe: false },
    { id: 2, sender: "Me", content: "Hello! How can I help you?", time: "10:05 AM", isMe: true },
    { id: 3, sender: "Alice Smith", content: "I have a question about the new feature.", time: "10:10 AM", isMe: false },
    { id: 4, sender: "Alice Smith", content: "Is it available on mobile yet?", time: "10:11 AM", isMe: false },
    { id: 5, sender: "Me", content: "Yes, we just pushed the update this morning.", time: "10:15 AM", isMe: true },
    { id: 6, sender: "Alice Smith", content: "Awesome! Checking it now.", time: "10:20 AM", isMe: false },
];

export const ChatInterface: React.FC = () => {
    const { t } = useTranslation();
    const [selectedContact, setSelectedContact] = useState(contacts[0]);
    const [inputValue, setInputValue] = useState("");

    return (
        <div className="flex h-[calc(100vh-65px)] overflow-hidden bg-background">
            {/* Sidebar */}
            <div className="w-80 border-r flex flex-col">
                <div className="p-4 border-b">
                    <div className="relative">
                        <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input placeholder={t("templates.chat.searchMessages")} className="pl-8" />
                    </div>
                </div>
                <ScrollArea className="flex-1">
                    <div className="flex flex-col gap-2 p-2">
                        {contacts.map((contact) => (
                            <button
                                key={contact.id}
                                onClick={() => setSelectedContact(contact)}
                                className={cn(
                                    "flex items-start gap-3 p-3 rounded-lg transition-colors text-left",
                                    selectedContact.id === contact.id ? "bg-accent" : "hover:bg-muted"
                                )}
                            >
                                <Avatar>
                                    <AvatarImage src={contact.avatar} alt={contact.name} />
                                    <AvatarFallback>{contact.name.charAt(0)}</AvatarFallback>
                                </Avatar>
                                <div className="flex-1 overflow-hidden">
                                    <div className="flex items-center justify-between mb-1">
                                        <span className="font-semibold text-sm">{contact.name}</span>
                                        <span className="text-xs text-muted-foreground">{contact.time}</span>
                                    </div>
                                    <p className="text-xs text-muted-foreground truncate">
                                        {contact.lastMessage}
                                    </p>
                                </div>
                                {contact.unread > 0 && (
                                    <div className="bg-primary text-primary-foreground text-[10px] w-5 h-5 flex items-center justify-center rounded-full">
                                        {contact.unread}
                                    </div>
                                )}
                            </button>
                        ))}
                    </div>
                </ScrollArea>
            </div>

            {/* Main Chat Area */}
            <div className="flex-1 flex flex-col min-w-0">
                {/* Chat Header */}
                <div className="flex items-center justify-between p-4 border-b h-16">
                    <div className="flex items-center gap-3">
                        <Avatar>
                            <AvatarImage src={selectedContact.avatar} alt={selectedContact.name} />
                            <AvatarFallback>{selectedContact.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                            <div className="font-semibold text-sm">{selectedContact.name}</div>
                            <div className="text-xs text-muted-foreground flex items-center gap-1">
                                <span className="w-2 h-2 rounded-full bg-green-500" />
                                Online
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <Button variant="ghost" size="icon">
                            <Phone className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon">
                            <Video className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon">
                            <MoreVertical className="h-4 w-4" />
                        </Button>
                    </div>
                </div>

                {/* Messages List */}
                <ScrollArea className="flex-1 p-4">
                    <div className="space-y-4">
                        {messages.map((msg) => (
                            <div
                                key={msg.id}
                                className={cn(
                                    "flex gap-3 max-w-[80%]",
                                    msg.isMe ? "ml-auto flex-row-reverse" : ""
                                )}
                            >
                                {!msg.isMe && (
                                    <Avatar className="h-8 w-8">
                                        <AvatarFallback>{msg.sender.charAt(0)}</AvatarFallback>
                                    </Avatar>
                                )}
                                <div
                                    className={cn(
                                        "p-3 rounded-lg text-sm",
                                        msg.isMe
                                            ? "bg-primary text-primary-foreground"
                                            : "bg-muted"
                                    )}
                                >
                                    {msg.content}
                                </div>
                                <span className="text-[10px] text-muted-foreground self-end">
                                    {msg.time}
                                </span>
                            </div>
                        ))}
                    </div>
                </ScrollArea>

                {/* Input Area */}
                <div className="p-4 border-t bg-background">
                    <div className="flex gap-2">
                        <Input
                            placeholder={t("templates.chat.typeMessage")}
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                    // Handle send (mock)
                                    setInputValue("");
                                }
                            }}
                        />
                        <Button size="icon" disabled={!inputValue.trim()}>
                            <Send className="h-4 w-4" />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};
