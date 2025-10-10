import Navigation from "@/components/Navigation";
import PageHeader from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Linkedin, Github, FileText, Send } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "aniruddhan26@gmail.com",
      link: "mailto:aniruddhan26@gmail.com",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "College Park, Maryland, 20740",
      link: null,
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      url: "https://linkedin.com/in/aniruddhan-narasimhan",
      color: "hover:text-[#0077B5]",
    },
    {
      icon: Github,
      label: "GitHub",
      url: "https://github.com/aniruddhan26",
      color: "hover:text-primary",
    },
    {
      icon: FileText,
      label: "Resume",
      url: "#",
      color: "hover:text-accent",
    },
  ];

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-background pt-24 pb-16">
        <div className="container mx-auto px-6">
          <PageHeader
            title="Get In Touch"
            subtitle="I'm actively seeking internship opportunities in Data Science and Machine Learning"
          />

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div className="space-y-8 animate-fade-in">
                <div>
                  <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                  <div className="space-y-4">
                    {contactInfo.map((info, index) => {
                      const Icon = info.icon;
                      return (
                        <div
                          key={index}
                          className="flex items-start gap-4 p-4 bg-card border border-border rounded-xl hover:border-primary/50 transition-all duration-300"
                        >
                          <div className="p-3 rounded-lg bg-gradient-primary">
                            <Icon className="h-5 w-5 text-white" />
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground mb-1">{info.label}</p>
                            {info.link ? (
                              <a
                                href={info.link}
                                className="text-foreground hover:text-primary transition-colors"
                              >
                                {info.value}
                              </a>
                            ) : (
                              <p className="text-foreground">{info.value}</p>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Social Links */}
                <div>
                  <h2 className="text-2xl font-bold mb-6">Connect With Me</h2>
                  <div className="flex gap-4">
                    {socialLinks.map((social, index) => {
                      const Icon = social.icon;
                      return (
                        <a
                          key={index}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`p-4 bg-card border border-border rounded-xl ${social.color} transition-all duration-300 hover:border-primary/50 hover:shadow-glow-primary`}
                          title={social.label}
                        >
                          <Icon className="h-6 w-6" />
                        </a>
                      );
                    })}
                  </div>
                </div>

                {/* Availability */}
                <div className="bg-gradient-primary p-6 rounded-2xl text-white">
                  <h3 className="text-xl font-bold mb-2">Availability</h3>
                  <p className="text-white/90">
                    Currently seeking Summer 2025 internship opportunities in Data Science, 
                    Machine Learning, and AI. Available for full-time roles starting May 2027.
                  </p>
                </div>
              </div>

              {/* Contact Form / CTA */}
              <div className="animate-fade-in" style={{ animationDelay: '200ms' }}>
                <div className="bg-card border border-border rounded-2xl p-8">
                  <h2 className="text-2xl font-bold mb-6">Let's Work Together</h2>
                  <p className="text-muted-foreground mb-8">
                    I'm passionate about applying AI/ML to solve real-world problems. Whether you have 
                    an internship opportunity, a project collaboration, or just want to discuss AI 
                    innovations, I'd love to hear from you.
                  </p>

                  <div className="space-y-6">
                    <div>
                      <h3 className="font-semibold mb-3 text-foreground">What I'm Looking For:</h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <span className="text-accent mt-1">•</span>
                          <span>Summer 2025 Data Science Internships</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-accent mt-1">•</span>
                          <span>Machine Learning Research Opportunities</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-accent mt-1">•</span>
                          <span>AI/ML Project Collaborations</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-accent mt-1">•</span>
                          <span>Healthcare AI & Computer Vision Roles</span>
                        </li>
                      </ul>
                    </div>

                    <Button 
                      size="lg" 
                      className="w-full bg-gradient-primary hover:shadow-glow-primary transition-all duration-300 group"
                      onClick={() => window.location.href = 'mailto:aniruddhan26@gmail.com'}
                    >
                      <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      Send Me an Email
                    </Button>

                    <div className="pt-6 border-t border-border">
                      <p className="text-sm text-muted-foreground text-center">
                        Response time: Usually within 24 hours
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
