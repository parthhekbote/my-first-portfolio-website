import { Mail, Phone, Linkedin, Github, Send, MapPin, Sparkles, MessageCircle, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";

const contactFormSchema = z.object({
  firstName: z.string().trim().min(1, "First name is required").max(50, "First name must be less than 50 characters"),
  lastName: z.string().trim().min(1, "Last name is required").max(50, "Last name must be less than 50 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  message: z.string().trim().min(1, "Message is required").max(1000, "Message must be less than 1000 characters"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const Contact = () => {
  const { toast } = useToast();
  
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      console.log("Form submitted:", data);
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      form.reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "parthh.ekbote@gmail.com",
      href: "mailto:parthh.ekbote@gmail.com",
      color: "from-red-500 to-red-600",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 63638 53821",
      href: "tel:+916363853821",
      color: "from-green-500 to-green-600",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "punith-a-r-681999371",
      href: "https://linkedin.com/in/punith-a-r-681999371",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "parthhekbote",
      href: "https://github.com/parthhekbote",
      color: "from-gray-700 to-gray-800",
    },
  ];

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Communication Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <MessageCircle className="absolute top-20 left-20 w-8 h-8 text-primary animate-float" />
        <Send className="absolute top-40 right-10 w-6 h-6 text-accent animate-float" style={{ animationDelay: '1s' }} />
        <Zap className="absolute bottom-40 left-10 w-5 h-5 text-primary animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 relative">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 relative">
            Get In <span className="gradient-text">Touch</span>
            <Sparkles className="absolute -top-3 -right-8 w-6 h-6 text-accent/60 animate-pulse" />
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Let's connect and discuss how we can work together on your next project
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Info */}
          <div className="space-y-6 sm:space-y-8 px-4 sm:px-0">
            <div className="space-y-4 sm:space-y-6">
              <h3 className="text-xl sm:text-2xl font-semibold text-foreground">Let's Start a Conversation</h3>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                I'm always excited to discuss new opportunities, collaborate on interesting projects, 
                or simply connect with fellow developers. Feel free to reach out through any of the channels below.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {contactInfo.map((contact, index) => (
                <Card 
                  key={index} 
                  className="card-hover border-none shadow-lg bg-white group cursor-pointer relative overflow-hidden"
                  onClick={() => window.open(contact.href, '_blank')}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <CardContent className="p-4 sm:p-6 relative z-10">
                    <div className="flex items-center space-x-3 sm:space-x-4">
                      <div className={`bg-gradient-to-br ${contact.color} w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 relative flex-shrink-0`}>
                        <contact.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                        <div className={`absolute -inset-1 bg-gradient-to-br ${contact.color} rounded-lg blur opacity-30 group-hover:opacity-60 transition-opacity duration-300`}></div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs sm:text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-300">{contact.label}</p>
                        <p className="text-xs sm:text-sm text-foreground font-medium truncate">{contact.value}</p>
                      </div>
                      <Zap className="w-3 h-3 sm:w-4 sm:h-4 text-accent/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-shrink-0" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Location */}
            <Card className="border-none shadow-lg bg-white group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-6 relative z-10">
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-br from-primary to-accent w-12 h-12 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 relative">
                    <MapPin className="w-6 h-6 text-white" />
                    <div className="absolute -inset-1 bg-gradient-to-br from-primary to-accent rounded-lg blur opacity-30 group-hover:opacity-60 transition-opacity duration-300"></div>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-300">Location</p>
                    <p className="text-foreground font-medium">Bengaluru, Karnataka, India</p>
                  </div>
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:pl-8 px-4 sm:px-0">
            <Card className="border-none shadow-2xl bg-white group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-4 sm:p-6 lg:p-8 relative z-10">
                <div className="flex items-center space-x-2 mb-4 sm:mb-6">
                  <h3 className="text-xl sm:text-2xl font-semibold text-foreground">Send me a Message</h3>
                  <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-accent animate-pulse" />
                </div>
                
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 sm:space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                      <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm sm:text-base text-foreground font-medium">First Name</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="John" 
                                className="bg-background border-border focus:border-primary transition-colors h-10 sm:h-11"
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="lastName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm sm:text-base text-foreground font-medium">Last Name</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="Doe" 
                                className="bg-background border-border focus:border-primary transition-colors h-10 sm:h-11"
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm sm:text-base text-foreground font-medium">Email</FormLabel>
                          <FormControl>
                            <Input 
                              type="email"
                              placeholder="john.doe@example.com" 
                              className="bg-background border-border focus:border-primary transition-colors h-10 sm:h-11"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm sm:text-base text-foreground font-medium">Message</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Tell me about your project..."
                              className="bg-background border-border focus:border-primary transition-colors min-h-[100px] sm:min-h-[120px] resize-none"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <Button 
                      type="submit" 
                      size="lg"
                      className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white shadow-lg group-button py-3 sm:py-2 h-12 sm:h-11 text-sm sm:text-base"
                      disabled={form.formState.isSubmitting}
                    >
                      <Send className="mr-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      {form.formState.isSubmitting ? "Sending..." : "Send Message"}
                      <Zap className="ml-2 w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                    </Button>
                  </form>
                </Form>
                
                <div className="mt-4 sm:mt-6 text-center">
                  <p className="text-muted-foreground text-xs sm:text-sm flex items-center justify-center space-x-1">
                    <MessageCircle className="w-3 h-3" />
                    <span>Or reach out via email or social media above</span>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;