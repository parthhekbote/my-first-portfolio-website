import { Code, Palette, Layers, Monitor, Sparkles, Brain, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Skills = () => {
  const skills = [
    {
      title: "Programming",
      description: "Python",
      icon: Code,
      color: "from-blue-500 to-blue-600",
    },
    {
      title: "Web Designing",
      description: "Modern & Responsive Websites",
      icon: Monitor,
      color: "from-green-500 to-green-600",
    },
    {
      title: "Full Stack Development",
      description: "End-to-end Solutions",
      icon: Layers,
      color: "from-purple-500 to-purple-600",
    },
    {
      title: "UI/UX Design",
      description: "User-centered Design",
      icon: Palette,
      color: "from-pink-500 to-pink-600",
    },
  ];

  return (
    <section id="skills" className="section-padding bg-muted/50 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <Code className="absolute top-20 left-20 w-8 h-8 text-primary animate-float" />
        <Brain className="absolute top-40 right-10 w-6 h-6 text-accent animate-float" style={{ animationDelay: '1s' }} />
        <Zap className="absolute bottom-40 left-10 w-5 h-5 text-primary animate-float" style={{ animationDelay: '2s' }} />
        <Monitor className="absolute bottom-20 right-20 w-7 h-7 text-accent animate-float" style={{ animationDelay: '3s' }} />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 relative">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 relative">
            My <span className="gradient-text">Skills</span>
            <Sparkles className="absolute -top-3 -right-6 w-6 h-6 text-accent/60 animate-pulse" />
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Technologies and expertise I bring to every project
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <Card 
              key={index} 
              className="card-hover border-none shadow-lg bg-white group cursor-pointer relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-8 text-center relative z-10">
                <div className={`bg-gradient-to-br ${skill.color} w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 relative`}>
                  <skill.icon className="w-8 h-8 text-white" />
                  <div className={`absolute -inset-1 bg-gradient-to-br ${skill.color} rounded-xl blur opacity-30 group-hover:opacity-60 transition-opacity duration-300`}></div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                  {skill.title}
                </h3>
                <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                  {skill.description}
                </p>
                
                {/* Skill Level Indicator */}
                <div className="mt-4 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className={`h-full bg-gradient-to-r ${skill.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 origin-left`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  ></div>
                </div>
                <div className="mt-2 text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {skill.title === "Programming" ? "Intermediate" : 
                   skill.title === "Web Designing" ? "Advanced" :
                   skill.title === "Full Stack Development" ? "Learning" : "Intermediate"}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;