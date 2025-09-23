import { useEffect, useState } from "react";

export function BackgroundAnimation() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Enhanced fade calculation - more dramatic fade effect
  const opacity = Math.max(0, 1 - scrollY / 300);
  const headerOpacity = Math.max(0, 1 - scrollY / 500);
  const scale = Math.max(0.8, 1 - scrollY / 1000);

  return (
    <>
      {/* Main header background animation */}
      <div 
        className="fixed inset-0 z-0 pointer-events-none overflow-hidden"
        style={{ opacity: headerOpacity, transform: `scale(${scale})` }}
      >
        {/* Dynamic gradient backgrounds with enhanced colors */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-transparent to-orange-600/25 animate-pulse" />
        <div className="absolute inset-0 bg-gradient-to-tl from-blue-600/20 via-transparent to-purple-600/20 animate-pulse" 
             style={{ animationDelay: '1s' }} />
        <div className="absolute inset-0 bg-gradient-to-tr from-emerald-600/15 via-transparent to-cyan-600/20 animate-pulse" 
             style={{ animationDelay: '2s' }} />
        
        {/* Enhanced header-specific elements */}
        <div className="absolute top-0 left-0 right-0 h-96">
          {/* Large floating orbs */}
          <div className="absolute top-10 left-20 w-40 h-40 bg-gradient-to-br from-primary/20 to-orange-600/30 rounded-full blur-2xl animate-float" 
               style={{ animationDelay: '0s', animationDuration: '6s' }} />
          <div className="absolute top-20 right-32 w-32 h-32 bg-gradient-to-br from-blue-500/25 to-purple-600/20 rounded-full blur-xl animate-float" 
               style={{ animationDelay: '1s', animationDuration: '8s' }} />
          <div className="absolute top-32 left-1/2 w-28 h-28 bg-gradient-to-br from-emerald-500/20 to-cyan-600/25 rounded-full blur-xl animate-float" 
               style={{ animationDelay: '2s', animationDuration: '7s' }} />
          
          {/* Animated geometric shapes */}
          <div className="absolute top-16 left-1/4 w-24 h-24 bg-gradient-to-r from-primary/30 to-orange-500/25 rounded-lg rotate-45 animate-spin" 
               style={{ animationDelay: '0.5s', animationDuration: '20s' }} />
          <div className="absolute top-40 right-1/4 w-20 h-20 bg-gradient-to-r from-blue-500/25 to-purple-500/20 rounded-full animate-ping" 
               style={{ animationDelay: '1.5s' }} />
          
          {/* Flowing lines */}
          <div className="absolute top-24 left-10 w-64 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent animate-pulse" />
          <div className="absolute top-48 right-20 w-48 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent animate-pulse" 
               style={{ animationDelay: '1s' }} />
        </div>
      </div>

      {/* Secondary layer for subtle body animations */}
      <div 
        className="fixed inset-0 z-0 pointer-events-none"
        style={{ opacity: opacity * 0.6 }}
      >
        {/* Smaller floating elements throughout the page */}
        <div className="absolute top-96 left-10 w-16 h-16 bg-primary/10 rounded-full animate-float" 
             style={{ animationDelay: '3s' }} />
        <div className="absolute top-[32rem] right-20 w-12 h-12 bg-orange-500/15 rounded-lg rotate-45 animate-float" 
             style={{ animationDelay: '4s' }} />
        <div className="absolute top-[40rem] left-1/3 w-10 h-10 bg-blue-500/10 rounded-full animate-float" 
             style={{ animationDelay: '5s' }} />
        <div className="absolute top-[48rem] right-1/3 w-20 h-20 bg-purple-500/8 rounded-full animate-float" 
             style={{ animationDelay: '2.5s' }} />
        <div className="absolute top-[56rem] left-20 w-8 h-8 bg-emerald-500/15 rounded-lg rotate-12 animate-float" 
             style={{ animationDelay: '6s' }} />
      </div>

      {/* Particle effect overlay */}
      <div 
        className="fixed top-0 left-0 right-0 h-screen z-0 pointer-events-none"
        style={{ opacity: headerOpacity * 0.8 }}
      >
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/40 rounded-full animate-ping"
            style={{
              left: `${10 + (i * 7)}%`,
              top: `${5 + (i * 3)}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${2 + (i % 3)}s`
            }}
          />
        ))}
      </div>
    </>
  );
}