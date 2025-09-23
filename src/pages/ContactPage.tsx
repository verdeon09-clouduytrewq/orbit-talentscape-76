import { Navigation } from "@/components/Navigation";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { FloatingChat } from "@/components/FloatingChat";
import { BackgroundAnimation } from "@/components/BackgroundAnimation";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <BackgroundAnimation />
      <Navigation />
      <div className="pt-14">
        <Contact />
      </div>
      <Footer />
      <FloatingChat />
    </div>
  );
};

export default ContactPage;