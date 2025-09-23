import { Navigation } from "@/components/Navigation";
import { Services } from "@/components/Services";
import { Footer } from "@/components/Footer";
import { FloatingChat } from "@/components/FloatingChat";
import { BackgroundAnimation } from "@/components/BackgroundAnimation";

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <BackgroundAnimation />
      <Navigation />
      <div className="pt-16">
        <Services />
      </div>
      <Footer />
      <FloatingChat />
    </div>
  );
};

export default ServicesPage;