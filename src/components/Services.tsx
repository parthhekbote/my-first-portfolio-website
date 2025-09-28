import { Globe, Paintbrush, ArrowRight, Sparkles, Zap, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      title: "Web Designing",
      description: "Creating responsive and modern websites that deliver exceptional user experiences across all devices. From concept to deployment, I focus on clean code and beautiful design.",
      icon: Globe,
      features: ["Responsive Design", "Modern Frameworks", "Performance Optimization", "Cross-browser Compatibility"],
    },
    {
      title: "UI/UX Design",
      description: "Designing user-friendly and aesthetic interfaces that not only look great but also provide intuitive user experiences. Every pixel serves a purpose.",
      icon: Paintbrush,
      features: ["User Research", "Wireframing", "Prototyping", "Visual Design"],
    },
  ];

  return (
    <section id="services" className="section-padding relative overflow-hidden">
      {/* Service Icons Background */}
      <div className="absolute inset-0 opacity-10">
        <Globe className="absolute top-20 right-20 w-12 h-12 text-primary animate-spin-slow" />
        <Paintbrush className="absolute bottom-40 left-20 w-8 h-8 text-accent animate-float" />
        <Zap className="absolute top-1/2 left-10 w-6 h-6 text-primary animate-pulse" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 relative">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 relative">
            My <span className="gradient-text">Services</span>
            <Sparkles className="absolute -top-3 -right-8 w-6 h-6 text-accent/60 animate-pulse" />
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Bringing your digital ideas to life with precision and creativity
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 px-4 sm:px-0">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="card-hover border-none shadow-xl bg-white group overflow-hidden relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/10 to-accent/10 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <CardContent className="p-4 sm:p-6 lg:p-8 relative z-10">
                <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4 lg:space-x-6">
                  <div className="bg-gradient-to-br from-primary to-accent p-3 sm:p-4 rounded-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 relative mx-auto sm:mx-0">
                    <service.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                    <div className="absolute -inset-1 bg-gradient-to-br from-primary to-accent rounded-xl blur opacity-30 group-hover:opacity-60 transition-opacity duration-300"></div>
                  </div>
                  
                  <div className="flex-1 text-center sm:text-left">
                    <div className="flex flex-col sm:flex-row sm:items-center space-y-1 sm:space-y-0 sm:space-x-2 mb-3 sm:mb-4">
                      <h3 className="text-xl sm:text-2xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                        {service.title}
                      </h3>
                      <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-accent/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mx-auto sm:mx-0" />
                    </div>
                    
                    <p className="text-sm sm:text-base text-muted-foreground group-hover:text-foreground mb-4 sm:mb-6 leading-relaxed transition-colors duration-300">
                      {service.description}
                    </p>
                    
                    <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <div 
                          key={featureIndex} 
                          className="flex items-center space-x-3 transform translate-x-0 group-hover:translate-x-2 transition-transform duration-300 justify-center sm:justify-start"
                          style={{ transitionDelay: `${featureIndex * 100}ms` }}
                        >
                          <div className="w-2 h-2 bg-gradient-to-r from-primary to-accent rounded-full group-hover:scale-150 transition-transform duration-300 flex-shrink-0"></div>
                          <span className="text-xs sm:text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-3 sm:space-y-0">
                      <Button 
                        variant="outline" 
                        className="btn-outline group-button w-full sm:w-auto"
                        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                      >
                        Get Started
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </Button>
                      
                      <div className="hidden sm:flex items-center space-x-1 text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Users className="w-3 h-3" />
                        <span>Available for projects</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;