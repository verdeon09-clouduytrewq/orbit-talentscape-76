import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Footer } from "@/components/Footer";
import { FloatingChat } from "@/components/FloatingChat";
import { BackgroundAnimation } from "@/components/BackgroundAnimation";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <BackgroundAnimation />
      <Navigation />
      <Hero />
      <About />
      <Footer />
      <FloatingChat />
    </div>
  );
};

export default Index;
