import { Navigation } from "@/components/Navigation";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { FloatingChat } from "@/components/FloatingChat";
import { BackgroundAnimation } from "@/components/BackgroundAnimation";

const FAQPage = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <BackgroundAnimation />
      <Navigation />
      <div className="pt-16">
        <FAQ />
      </div>
      <Footer />
      <FloatingChat />
    </div>
  );
};

export default FAQPage;