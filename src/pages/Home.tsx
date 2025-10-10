import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail, FileText } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6 animate-fade-in">
            <span className="text-accent text-sm font-semibold tracking-wider uppercase">
              Data Science & Machine Learning
            </span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-fade-in-up">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Aniruddhan
            </span>
            <br />
            <span className="text-foreground">Narasimhan</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-in-up delay-200">
            Masters Student in Applied Machine Learning at University of Maryland | 
            Building AI solutions that make a difference
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-12 animate-fade-in-up delay-300">
            <Link to="/projects">
              <Button size="lg" className="group bg-gradient-primary hover:shadow-glow-primary transition-all duration-300">
                View Projects
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-primary/50 hover:bg-primary/10 transition-all duration-300">
                Get In Touch
              </Button>
            </Link>
          </div>

          <div className="flex gap-6 justify-center animate-fade-in-up delay-500">
            <a
              href="https://github.com/aniruddhan26"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors duration-300"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://linkedin.com/in/aniruddhan-narasimhan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors duration-300"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="mailto:aniruddhan26@gmail.com"
              className="text-muted-foreground hover:text-accent transition-colors duration-300"
            >
              <Mail className="h-6 w-6" />
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-accent transition-colors duration-300"
            >
              <FileText className="h-6 w-6" />
            </a>
          </div>
        </div>

        {/* Quick stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto animate-fade-in-up delay-700">
          <div className="bg-card/50 backdrop-blur-sm p-6 rounded-xl border border-border hover:border-primary/50 transition-all duration-300">
            <div className="text-3xl font-bold text-primary mb-2">4+</div>
            <div className="text-sm text-muted-foreground">Research Papers</div>
          </div>
          <div className="bg-card/50 backdrop-blur-sm p-6 rounded-xl border border-border hover:border-primary/50 transition-all duration-300">
            <div className="text-3xl font-bold text-primary mb-2">3.6</div>
            <div className="text-sm text-muted-foreground">GPA</div>
          </div>
          <div className="bg-card/50 backdrop-blur-sm p-6 rounded-xl border border-border hover:border-primary/50 transition-all duration-300">
            <div className="text-3xl font-bold text-primary mb-2">10+</div>
            <div className="text-sm text-muted-foreground">Key Projects</div>
          </div>
          <div className="bg-card/50 backdrop-blur-sm p-6 rounded-xl border border-border hover:border-primary/50 transition-all duration-300">
            <div className="text-3xl font-bold text-primary mb-2">2+</div>
            <div className="text-sm text-muted-foreground">Internships</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
