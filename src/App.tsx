import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import { GlobalErrorBoundary } from "@/components/ui/error-boundary";
import Index from "./pages/Index";
import Docs from "./pages/Docs";
import NotFound from "./pages/NotFound";
import LandingPage from "./pages/templates/LandingPage";
import DashboardPage from "./pages/templates/DashboardPage";
import SettingsPage from "./pages/templates/SettingsPage";
import AuthPage from "./pages/templates/AuthPage";
import ProjectBoardPage from "./pages/templates/ProjectBoardPage";
import ActivityFeedPage from "./pages/templates/ActivityFeedPage";
import ChatPage from "./pages/templates/ChatPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <GlobalErrorBoundary>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
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
          </BrowserRouter>
        </TooltipProvider>
      </GlobalErrorBoundary>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
