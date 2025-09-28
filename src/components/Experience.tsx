import { Heart, Users, Calendar, Sparkles, HandHeart, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Experience = () => {
  return (
    <section id="experience" className="section-padding relative overflow-hidden">
      {/* Floating Elements */}
      <div className="absolute inset-0 opacity-20">
        <Heart className="absolute top-20 left-10 w-6 h-6 text-primary animate-float" />
        <Users className="absolute top-40 right-20 w-5 h-5 text-accent animate-float" style={{ animationDelay: '1s' }} />
        <HandHeart className="absolute bottom-40 left-1/4 w-4 h-4 text-primary animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 relative">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 relative">
            My <span className="gradient-text">Experience</span>
            <Sparkles className="absolute -top-3 -right-6 w-5 h-5 text-accent/60 animate-pulse" />
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Contributing to community and building meaningful connections
          </p>
        </div>

        {/* Experience Card */}
        <div className="max-w-4xl mx-auto">
          <Card className="card-hover border-none shadow-2xl bg-white overflow-hidden group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <CardContent className="p-0 relative z-10">
              <div className="bg-gradient-to-r from-primary via-accent to-primary p-1 animate-gradient-x">
                <div className="bg-white p-8">
                  <div className="flex items-start space-x-6">
                    <div className="bg-gradient-to-br from-primary to-accent p-4 rounded-xl group-hover:scale-110 transition-all duration-300 relative">
                      <Heart className="w-8 h-8 text-white" />
                      <div className="absolute -inset-1 bg-gradient-to-br from-primary to-accent rounded-xl blur opacity-30 group-hover:opacity-60 transition-opacity duration-300"></div>
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <h3 className="text-2xl font-semibold text-foreground">Volunteer</h3>
                          <Award className="w-5 h-5 text-accent animate-pulse" />
                        </div>
                        <div className="flex items-center space-x-2 bg-primary/10 px-3 py-1 rounded-full">
                          <Calendar className="w-4 h-4 text-primary" />
                          <span className="text-primary font-medium">Ongoing</span>
                        </div>
                      </div>
                      
                      <h4 className="text-xl font-medium text-primary mb-4 group-hover:text-accent transition-colors duration-300">
                        Vivekananda Yuvak Sangha
                      </h4>
                      
                      <p className="text-lg text-muted-foreground mb-6 leading-relaxed group-hover:text-foreground transition-colors duration-300">
                        Actively participating in <span className="text-primary font-medium">community service</span> and social outreach activities. 
                        Contributing to various initiatives focused on <span className="text-accent font-medium">youth development</span>, education support, 
                        and community welfare programs.
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2 text-accent">
                          <Users className="w-5 h-5" />
                          <span className="font-medium">Community Impact & Social Service</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <HandHeart className="w-4 h-4 text-primary/60" />
                          <span className="text-sm text-muted-foreground">Making a difference</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;