import { Clock, ExternalLink, Github, Sparkles, Code2, Rocket, Brain } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Portfolio = () => {
  return (
    <section id="portfolio" className="section-padding bg-muted/50 relative overflow-hidden">
      {/* Creative Background Elements */}
      <div className="absolute inset-0 opacity-15">
        <Code2 className="absolute top-20 left-20 w-10 h-10 text-primary animate-float" />
        <Brain className="absolute top-40 right-10 w-8 h-8 text-accent animate-float" style={{ animationDelay: '1s' }} />
        <Rocket className="absolute bottom-40 left-10 w-6 h-6 text-primary animate-float" style={{ animationDelay: '2s' }} />
        <Github className="absolute bottom-20 right-20 w-7 h-7 text-accent animate-float" style={{ animationDelay: '3s' }} />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 relative">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 relative">
            My <span className="gradient-text">Portfolio</span>
            <Sparkles className="absolute -top-3 -right-8 w-6 h-6 text-accent/60 animate-pulse" />
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Showcasing projects that demonstrate my skills and passion
          </p>
        </div>

        {/* Coming Soon Card */}
        <div className="max-w-4xl mx-auto">
          <Card className="border-none shadow-2xl bg-white overflow-hidden group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <CardContent className="p-12 text-center relative z-10">
              <div className="bg-gradient-to-br from-primary/20 to-accent/20 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-500 relative">
                <Clock className="w-12 h-12 text-primary group-hover:rotate-12 transition-transform duration-500" />
                <div className="absolute -inset-2 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur opacity-50 group-hover:opacity-80 transition-opacity duration-300"></div>
              </div>
              
              <div className="flex items-center justify-center space-x-2 mb-4">
                <h3 className="text-3xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                  Coming Soon
                </h3>
                <Rocket className="w-6 h-6 text-accent animate-bounce" />
              </div>
              
              <p className="text-lg text-muted-foreground group-hover:text-foreground mb-8 max-w-2xl mx-auto leading-relaxed transition-colors duration-300">
                I'm currently working on exciting projects that showcase my skills in <span className="text-primary font-medium">web development</span>, 
                <span className="text-accent font-medium"> AI/ML applications</span>, and <span className="text-primary font-medium">UI/UX design</span>. Check back soon to see my latest work!
              </p>
              
              {/* Progress Indicators */}
              <div className="flex items-center justify-center space-x-8 mb-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/30 rounded-full flex items-center justify-center mb-2">
                    <Code2 className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-xs text-muted-foreground">Web Apps</span>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent/20 to-accent/30 rounded-full flex items-center justify-center mb-2">
                    <Brain className="w-6 h-6 text-accent" />
                  </div>
                  <span className="text-xs text-muted-foreground">AI Projects</span>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center mb-2">
                    <Sparkles className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-xs text-muted-foreground">UI/UX</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="outline" 
                  className="btn-outline group-button"
                  onClick={() => window.open('https://github.com/parthhekbote', '_blank')}
                >
                  <Github className="mr-2 w-4 h-4" />
                  View GitHub
                  <ExternalLink className="ml-2 w-3 h-3 group-hover:scale-110 transition-transform duration-300" />
                </Button>
                
                <Button 
                  className="btn-hero group-button"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <Rocket className="mr-2 w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                  Let's Collaborate
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;