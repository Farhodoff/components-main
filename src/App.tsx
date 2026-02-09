import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";

// ...

<HashRouter>
  <Routes>
    <Route path="/" element={<Index />} />
    <Route path="/docs" element={<Docs />} />
    <Route path="/docs/:component" element={<Docs />} />

    {/* Template Routes */}
    <Route path="/templates/landing" element={<LandingPage />} />
    <Route path="/templates/dashboard" element={<DashboardPage />} />
    <Route path="/templates/settings" element={<SettingsPage />} />
    <Route path="/templates/auth" element={<AuthPage />} />
    <Route path="/templates/project-board" element={<ProjectBoardPage />} />
    <Route path="/templates/activity-feed" element={<ActivityFeedPage />} />
    <Route path="/templates/chat" element={<ChatPage />} />

    {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
    <Route path="*" element={<NotFound />} />
  </Routes>
</HashRouter>
        </TooltipProvider >
      </GlobalErrorBoundary >
    </ThemeProvider >
  </QueryClientProvider >
);

export default App;
