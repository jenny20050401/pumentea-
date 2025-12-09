import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Header from "./components/Header"; // Import Header
import Footer from "./components/Footer"; // Import Footer
import About from "./pages/About";
import Products from "./pages/Products";
import Store from "./pages/Store"; // Import Store
import NotFound from "./pages/NotFound";
import DialogflowMessenger from "@/components/DialogflowMessenger";
import BGMPlayer from "@/pages/BGMPlayer"; // 👈 匯入 BGM 播放器
import ScrollToTop from "./components/ScrollToTop"; // 👈 匯入捲動至頂部元件

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop /> {/* 👈 在這裡使用元件 */}
        <div className="flex flex-col min-h-screen bg-background text-foreground">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/products" element={<Products />} />
              <Route path="/store" element={<Store />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
          <DialogflowMessenger />
          <BGMPlayer /> {/* 👈 在這裡使用 BGM 播放器 */}
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
