import { Navigation } from "@/components/Navigation";
import { About } from "@/components/About";
import { Footer } from "@/components/Footer";
import { FloatingChat } from "@/components/FloatingChat";
import { BackgroundAnimation } from "@/components/BackgroundAnimation";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <BackgroundAnimation />
      <Navigation />
      <div className="pt-16">
        <About />
      </div>
      <Footer />
      <FloatingChat />
    </div>
  );
};

export default AboutPage;