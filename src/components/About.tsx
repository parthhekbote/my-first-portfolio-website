import { GraduationCap, Calendar, MapPin, Brain, Sparkles, Code2, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="section-padding bg-muted/50 relative overflow-hidden">
      {/* AI Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-gradient-to-br from-accent/10 to-primary/10 rounded-full blur-lg animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-gradient-to-br from-primary/5 to-accent/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 relative">
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
            <Brain className="w-8 h-8 text-primary/30 animate-float" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 relative">
            About <span className="gradient-text">Me</span>
            <Sparkles className="absolute -top-2 -right-8 w-5 h-5 text-accent/50 animate-pulse" />
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate about technology and driven by curiosity to solve complex problems
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Bio Section */}
          <div className="space-y-4 sm:space-y-6 group px-4 sm:px-0">
            <div className="flex items-center space-x-3">
              <Code2 className="w-5 h-5 sm:w-6 sm:h-6 text-primary animate-float" />
              <h3 className="text-xl sm:text-2xl font-semibold text-foreground">My Journey</h3>
            </div>
            <div className="space-y-3 sm:space-y-4">
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed transform transition-all duration-500 group-hover:translate-x-2">
                I am an aspiring Software Development Engineer with a strong foundation in <span className="text-primary font-medium">Python, C/C++, and Java</span>. 
                Currently pursuing a Bachelor's degree in <span className="text-accent font-medium">Artificial Intelligence and Machine Learning</span>, I am passionate 
                about problem-solving, building scalable solutions, and exploring innovative technologies.
              </p>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed transform transition-all duration-500 group-hover:translate-x-2" style={{ transitionDelay: '100ms' }}>
                With interests in <span className="text-primary font-medium">web development and AI applications</span>, I aim to leverage my skills to contribute to 
                impactful projects and grow as a professional in the tech industry.
              </p>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-4 sm:pt-6">
              <div className="text-center p-2 sm:p-4 bg-white/50 rounded-lg sm:rounded-xl backdrop-blur-sm border border-white/20 hover:scale-105 transition-transform duration-300">
                <div className="text-lg sm:text-2xl font-bold text-primary">2028</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Graduation</div>
              </div>
              <div className="text-center p-2 sm:p-4 bg-white/50 rounded-lg sm:rounded-xl backdrop-blur-sm border border-white/20 hover:scale-105 transition-transform duration-300" style={{ transitionDelay: '100ms' }}>
                <div className="text-lg sm:text-2xl font-bold text-accent">AI/ML</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Specialization</div>
              </div>
              <div className="text-center p-2 sm:p-4 bg-white/50 rounded-lg sm:rounded-xl backdrop-blur-sm border border-white/20 hover:scale-105 transition-transform duration-300" style={{ transitionDelay: '200ms' }}>
                <div className="text-lg sm:text-2xl font-bold text-primary">∞</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Learning</div>
              </div>
            </div>
          </div>

          {/* Education Card */}
          <div className="space-y-4 sm:space-y-6 px-4 sm:px-0">
            <Card className="card-hover border-none shadow-xl bg-white group overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-4 sm:p-6 lg:p-8 relative z-10">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="bg-gradient-to-br from-primary to-accent p-2 sm:p-3 rounded-lg sm:rounded-xl group-hover:scale-110 transition-transform duration-300 relative">
                    <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    <div className="absolute -inset-1 bg-gradient-to-br from-primary to-accent rounded-lg sm:rounded-xl blur opacity-30 group-hover:opacity-60 transition-opacity duration-300"></div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2 mb-2">
                      <h4 className="text-lg sm:text-xl font-semibold">Education</h4>
                      <Brain className="w-3 h-3 sm:w-4 sm:h-4 text-primary/60 animate-pulse" />
                    </div>
                    <h5 className="text-base sm:text-lg font-medium text-primary mb-2 group-hover:text-accent transition-colors duration-300 leading-tight">
                      Bachelor of Engineering in Artificial Intelligence and Machine Learning
                    </h5>
                    <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4 flex items-center space-x-2">
                      <Users className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                      <span className="leading-tight">Jyothy Institute of Technology, Bengaluru</span>
                    </p>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xs sm:text-sm text-muted-foreground">
                      <div className="flex items-center space-x-2 bg-primary/10 px-2 sm:px-3 py-1 rounded-full">
                        <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span>Expected Graduation: 2028</span>
                      </div>
                      <div className="flex items-center space-x-2 bg-accent/10 px-2 sm:px-3 py-1 rounded-full">
                        <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span>Bengaluru</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;