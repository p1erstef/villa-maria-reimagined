import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Offres from "./pages/Offres";
import OffreJournee from "./pages/offres/Journee";
import OffreMensuel from "./pages/offres/Mensuel";
import OffrePrive from "./pages/offres/Prive";
import OffreSalles from "./pages/offres/Salles";
import Evenements from "./pages/Evenements";
import LaVilla from "./pages/LaVilla";
import Histoire from "./pages/Histoire";
import Blog from "./pages/Blog";
import BlogArticle from "./pages/BlogArticle";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/offres" element={<Offres />} />
            <Route path="/offres/journee" element={<OffreJournee />} />
            <Route path="/offres/mensuel" element={<OffreMensuel />} />
            <Route path="/offres/prive" element={<OffrePrive />} />
            <Route path="/offres/salles" element={<OffreSalles />} />
            <Route path="/evenements" element={<Evenements />} />
            <Route path="/la-villa" element={<LaVilla />} />
            <Route path="/histoire" element={<Histoire />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogArticle />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
