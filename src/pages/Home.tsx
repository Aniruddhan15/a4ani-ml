import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail, FileText } from "lucide-react";
import profileImage from "@/assets/profile.png";

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden">
      {/* Animated background elements - Neural network effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-accent/10 rounded-full blur-2xl animate-[pulse_4s_ease-in-out_infinite]" />
        {/* Floating particles */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-primary/40 rounded-full animate-float" />
        <div className="absolute top-40 right-32 w-3 h-3 bg-accent/30 rounded-full animate-float-delay-1" />
        <div className="absolute bottom-32 left-40 w-2 h-2 bg-primary/30 rounded-full animate-float-delay-2" />
        <div className="absolute bottom-20 right-20 w-3 h-3 bg-accent/40 rounded-full animate-float" />
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left side - Text content */}
            <div className="text-center md:text-left">
              <div className="mb-6 animate-fade-in">
                <span className="text-accent text-sm font-semibold tracking-wider uppercase">
                  Data Science & Machine Learning
                </span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in-up">
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Aniruddhan
                </span>
                <br />
                <span className="text-foreground">Narasimhan</span>
              </h1>

              {/* Brand Keywords */}
              <div className="mb-6 animate-fade-in-up delay-100">
                <p className="text-base md:text-lg text-primary/90 font-medium">
                  Machine Learning • Deep Learning • Computer Vision • Natural Language Processing
                </p>
              </div>

              {/* Storyline Hook with typewriter effect */}
              <p className="text-lg md:text-xl text-muted-foreground/90 mb-6 italic animate-fade-in-up delay-200">
                "Where data meets intuition — designing AI that learns from the world."
              </p>
              
              <p className="text-base md:text-lg text-muted-foreground mb-8 animate-fade-in-up delay-300">
                Masters Student in Applied Machine Learning at University of Maryland | 
                Building AI solutions that make a difference
              </p>

              <div className="flex flex-wrap gap-3 justify-center md:justify-start mb-8 animate-fade-in-up delay-400">
                <Link to="/about">
                  <Button size="sm" variant="outline" className="border-primary/50 hover:bg-primary/10 hover:scale-105 hover:border-primary transition-all duration-300">
                    About
                  </Button>
                </Link>
                <Link to="/projects">
                  <Button size="sm" className="bg-gradient-primary hover:shadow-glow-primary hover:scale-105 transition-all duration-300">
                    Projects
                  </Button>
                </Link>
                <Link to="/skills">
                  <Button size="sm" variant="outline" className="border-primary/50 hover:bg-primary/10 hover:scale-105 hover:border-primary transition-all duration-300">
                    Skills
                  </Button>
                </Link>
                <Link to="/achievements">
                  <Button size="sm" variant="outline" className="border-primary/50 hover:bg-primary/10 hover:scale-105 hover:border-primary transition-all duration-300">
                    Achievements
                  </Button>
                </Link>
                <Link to="/volunteering">
                  <Button size="sm" variant="outline" className="border-primary/50 hover:bg-primary/10 hover:scale-105 hover:border-primary transition-all duration-300">
                    Volunteering
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="sm" variant="outline" className="border-primary/50 hover:bg-primary/10 hover:scale-105 hover:border-primary transition-all duration-300">
                    Contact
                  </Button>
                </Link>
              </div>

              <div className="flex gap-6 justify-center md:justify-start animate-fade-in-up delay-500">
                <a
                  href="https://github.com/Aniruddhan15"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-accent hover:scale-125 transition-all duration-300"
                  aria-label="GitHub Profile"
                >
                  <Github className="h-6 w-6" />
                </a>
                <a
                  href="https://www.linkedin.com/in/aniruddhan-narasimhan-15688021b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-accent hover:scale-125 transition-all duration-300"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
                <a
                  href="mailto:aniruddhan26@gmail.com"
                  className="text-muted-foreground hover:text-accent hover:scale-125 transition-all duration-300"
                  aria-label="Email"
                >
                  <Mail className="h-6 w-6" />
                </a>
                <a
                  href="https://drive.google.com/file/d/13yIcEZKR-S9qfnPQ7uejDKPDMPhiQAUZ/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-accent hover:scale-125 transition-all duration-300"
                  aria-label="Resume"
                >
                  <FileText className="h-6 w-6" />
                </a>
              </div>
            </div>

            {/* Right side - Profile Image */}
            <div className="relative hidden md:flex justify-center items-center animate-fade-in-up delay-200">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-primary rounded-full blur-2xl opacity-20 animate-pulse"></div>
                <img 
                  src={profileImage} 
                  alt="Aniruddhan Narasimhan" 
                  className="relative w-80 h-80 object-cover rounded-full border-4 border-primary/30 shadow-2xl hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Quick stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto animate-fade-in-up delay-700">
          <div className="bg-card/50 backdrop-blur-sm p-6 rounded-xl border border-border hover:border-primary/50 hover:scale-105 hover:shadow-glow-primary transition-all duration-300">
            <div className="text-3xl font-bold text-primary mb-2">4+</div>
            <div className="text-sm text-muted-foreground">Research Papers</div>
          </div>
          <div className="bg-card/50 backdrop-blur-sm p-6 rounded-xl border border-border hover:border-primary/50 hover:scale-105 hover:shadow-glow-primary transition-all duration-300">
            <div className="text-3xl font-bold text-primary mb-2">3.6</div>
            <div className="text-sm text-muted-foreground">GPA</div>
          </div>
          <div className="bg-card/50 backdrop-blur-sm p-6 rounded-xl border border-border hover:border-primary/50 hover:scale-105 hover:shadow-glow-primary transition-all duration-300">
            <div className="text-3xl font-bold text-primary mb-2">10+</div>
            <div className="text-sm text-muted-foreground">Key Projects</div>
          </div>
          <div className="bg-card/50 backdrop-blur-sm p-6 rounded-xl border border-border hover:border-primary/50 hover:scale-105 hover:shadow-glow-primary transition-all duration-300">
            <div className="text-3xl font-bold text-primary mb-2">2+</div>
            <div className="text-sm text-muted-foreground">Internships</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
