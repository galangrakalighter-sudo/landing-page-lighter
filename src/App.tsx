import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Branding from "./pages/Branding";
import DigitalMarketing from "./pages/Digital_Marketing";
import Ecommerce from "./pages/Ecommerce";
import Tech from "./pages/Tech";
import EventOrganizer from "./pages/Event_Organizer";
import Multimedia from "./pages/Multimedia";
import Academy from "./pages/Academy";
import MCN from "./pages/Mcn";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Card from "./pages/Card";
import TermsOfService from "./pages/Terms";
import Policy from "./pages/Policy";
// import Template_2 from "./pages/template_2";
// import Template_3 from "./pages/template_3";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/tentang" element={<About />} />
          {/* <Route path="/wedding_template_2" element={<Template_2 />} />
          <Route path="/wedding_template_3" element={<Template_3 />} /> */}
          <Route path="/" element={<Index />} />
          <Route path="/branding" element={<Branding />} />
          <Route path="/digital_marketing" element={<DigitalMarketing />} />
          <Route path="/ecommerce" element={<Ecommerce />} />
          <Route path="/event_organizer" element={<EventOrganizer />} />
          <Route path="/multimedia" element={<Multimedia />} />
          <Route path="/academy" element={<Academy />} />
          <Route path="/tech" element={<Tech />} />
          <Route path="/mcn" element={<MCN />} />
          <Route path="/card" element={<Card />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/privacy-policy" element={<Policy />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
