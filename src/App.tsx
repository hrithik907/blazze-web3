
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import Index from "./pages/Index";
import AboutPage from "./pages/AboutPage";
import DiscoverPage from "./pages/DiscoverPage";
import BusinessPage from "./pages/BusinessPage";
import BuildersPage from "./pages/BuildersPage";
import CommunityPage from "./pages/CommunityPage";
import CardPage from "./pages/CardPage";
import AuthPage from "./pages/AuthPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/discover" element={<DiscoverPage />} />
            <Route path="/business" element={<BusinessPage />} />
            <Route path="/builders" element={<BuildersPage />} />
            <Route path="/community" element={<CommunityPage />} />
            <Route path="/card" element={<CardPage />} />
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/features" element={<FeaturesPage />} />
            <Route path="/tokenomics" element={<TokenomicsPage />} />
            <Route path="/contact-sales" element={<ContactSales />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
