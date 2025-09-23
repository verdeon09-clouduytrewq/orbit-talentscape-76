import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { FloatingChat } from "@/components/FloatingChat";
import { Copy, Play, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { BackgroundAnimation } from "@/components/BackgroundAnimation";

const DevPage = () => {
  const { toast } = useToast();

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied!",
      description: "Command copied to clipboard",
    });
  };

  return (
    <div className="min-h-screen bg-background relative">
      <BackgroundAnimation />
      <Navigation />
      <div className="pt-16">
        <section className="py-20 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-3xl md:text-5xl font-bold mb-6">
                Development <span className="gradient-text">Setup</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Quick setup guide to run this project in your local environment
              </p>
            </div>

            {/* Setup Instructions */}
            <div className="space-y-8">
              {/* Prerequisites */}
              <div className="service-card p-6 rounded-xl">
                <div className="flex items-center gap-3 mb-4">
                  <Code className="w-6 h-6 text-primary" />
                  <h2 className="text-2xl font-semibold">Prerequisites</h2>
                </div>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Node.js (v18 or higher)</li>
                  <li>• npm or yarn package manager</li>
                  <li>• Git</li>
                  <li>• Code editor (VS Code recommended)</li>
                </ul>
              </div>

              {/* Installation Steps */}
              <div className="service-card p-6 rounded-xl">
                <div className="flex items-center gap-3 mb-4">
                  <Play className="w-6 h-6 text-primary" />
                  <h2 className="text-2xl font-semibold">Installation & Setup</h2>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">1. Clone the repository</h3>
                    <div className="bg-muted p-3 rounded-lg flex items-center justify-between">
                      <code className="text-sm">git clone &lt;repository-url&gt;</code>
                      <Button 
                        size="sm" 
                        variant="ghost"
                        onClick={() => copyToClipboard("git clone <repository-url>")}
                      >
                        <Copy className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">2. Navigate to project directory</h3>
                    <div className="bg-muted p-3 rounded-lg flex items-center justify-between">
                      <code className="text-sm">cd project-name</code>
                      <Button 
                        size="sm" 
                        variant="ghost"
                        onClick={() => copyToClipboard("cd project-name")}
                      >
                        <Copy className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">3. Install dependencies</h3>
                    <div className="bg-muted p-3 rounded-lg flex items-center justify-between">
                      <code className="text-sm">npm install</code>
                      <Button 
                        size="sm" 
                        variant="ghost"
                        onClick={() => copyToClipboard("npm install")}
                      >
                        <Copy className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">4. Start development server</h3>
                    <div className="bg-muted p-3 rounded-lg flex items-center justify-between">
                      <code className="text-sm">npm run dev</code>
                      <Button 
                        size="sm" 
                        variant="ghost"
                        onClick={() => copyToClipboard("npm run dev")}
                      >
                        <Copy className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">5. Open in browser</h3>
                    <p className="text-muted-foreground">Navigate to <code className="bg-muted px-2 py-1 rounded">http://localhost:5173</code></p>
                  </div>
                </div>
              </div>

              {/* Build Commands */}
              <div className="service-card p-6 rounded-xl">
                <h2 className="text-2xl font-semibold mb-4">Build Commands</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Production Build</h3>
                    <div className="bg-muted p-3 rounded-lg flex items-center justify-between">
                      <code className="text-sm">npm run build</code>
                      <Button 
                        size="sm" 
                        variant="ghost"
                        onClick={() => copyToClipboard("npm run build")}
                      >
                        <Copy className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Preview Production Build</h3>
                    <div className="bg-muted p-3 rounded-lg flex items-center justify-between">
                      <code className="text-sm">npm run preview</code>
                      <Button 
                        size="sm" 
                        variant="ghost"
                        onClick={() => copyToClipboard("npm run preview")}
                      >
                        <Copy className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tech Stack */}
              <div className="service-card p-6 rounded-xl">
                <h2 className="text-2xl font-semibold mb-4">Tech Stack</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {[
                    "React", "TypeScript", "Vite", "Tailwind CSS", 
                    "React Router", "Lucide Icons", "Radix UI"
                  ].map((tech) => (
                    <div key={tech} className="bg-primary/10 text-primary px-3 py-2 rounded-lg text-center">
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
      <FloatingChat />
    </div>
  );
};

export default DevPage;