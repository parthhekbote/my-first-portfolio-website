import { ArrowDown, Download, Sparkles, Brain, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import profileImage from "@/assets/profile-image.jpg";

const Hero = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = "Aspiring Software Development Engineer | AI & ML Enthusiast | Web Designer";

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(fullText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-muted/30 to-accent/10 section-padding">
      {/* AI Particles Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-2 h-2 bg-primary/30 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-accent/40 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 left-1/4 w-1.5 h-1.5 bg-primary/20 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-accent/30 rounded-full animate-ping" style={{ animationDelay: '3s' }}></div>
        <div className="absolute bottom-20 right-10 w-2 h-2 bg-primary/25 rounded-full animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* AI Icons */}
        <div className="absolute -top-10 left-1/4 transform -translate-x-1/2">
          <Brain className="w-8 h-8 text-primary/40 animate-float" />
        </div>
        <div className="absolute -top-16 right-1/4 transform translate-x-1/2">
          <Code2 className="w-6 h-6 text-accent/40 animate-float" style={{ animationDelay: '1s' }} />
        </div>
        <div className="absolute top-0 right-0 transform translate-x-8">
          <Sparkles className="w-5 h-5 text-primary/30 animate-float" style={{ animationDelay: '2s' }} />
        </div>

        {/* Profile Image */}
        <div className="mb-6 sm:mb-8 relative group">
          <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 mx-auto rounded-full overflow-hidden shadow-2xl border-2 sm:border-4 border-white/80 relative">
            <img 
              src={profileImage} 
              alt="Punith A R - Software Developer" 
              className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
          <div className="absolute inset-0 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 mx-auto rounded-full bg-gradient-to-br from-primary/20 to-accent/20 animate-pulse -z-10"></div>
          
          {/* AI Glow Effect */}
          <div className="absolute inset-0 w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52 mx-auto rounded-full bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 animate-spin-slow -z-20" style={{ left: '50%', transform: 'translateX(-50%)' }}></div>
        </div>

        {/* Name and Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 relative px-4">
          <span className="gradient-text relative">
            Punith A R
            <div className="absolute -top-1 sm:-top-2 -right-1 sm:-right-2">
              <Sparkles className="w-4 h-4 sm:w-6 sm:h-6 text-accent/60 animate-pulse" />
            </div>
          </span>
        </h1>
        
        <div className="text-sm sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-6 sm:mb-8 max-w-3xl mx-auto px-4 min-h-[3rem] sm:min-h-[4rem] flex items-center justify-center">
          <span className="font-mono text-center leading-tight">
            {displayedText}
            <span className="animate-pulse">|</span>
          </span>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col gap-3 sm:flex-row sm:gap-4 justify-center items-center mb-8 sm:mb-12 px-4">
          <Button 
            size="lg" 
            className="btn-hero group w-full sm:w-auto text-sm sm:text-base py-3 sm:py-2"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Learn More About Me
            <ArrowDown className="ml-2 w-4 h-4 group-hover:translate-y-1 transition-transform duration-300" />
          </Button>
          
          <Button 
            variant="outline" 
            size="lg" 
            className="btn-outline group w-full sm:w-auto text-sm sm:text-base py-3 sm:py-2"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <Download className="mr-2 w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
            Download Resume
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="animate-bounce">
          <ArrowDown className="w-6 h-6 mx-auto text-primary opacity-60" />
        </div>
      </div>
    </section>
  );
};

export default Hero;