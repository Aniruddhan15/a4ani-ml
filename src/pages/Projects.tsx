import Navigation from "@/components/Navigation";
import PageHeader from "@/components/PageHeader";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "AI-Powered Nutrition Analyzer App",
      description: "Using Gemini Vision Pro LLM, developed an AI-powered app for individualized meal planning and nutritional analysis with image recognition capabilities.",
      tech: ["Python", "Gemini Vision Pro", "LLM", "Computer Vision", "Flask"],
      impact: "Improved dietary tracking with AI-powered image recognition and personalized suggestions",
      category: "AI/ML Application",
    },
    {
      title: "Fetal-AI: Health Status Prediction",
      description: "Developed a Flask-based ML application for accurate fetal health monitoring and risk identification for prenatal care.",
      tech: ["Flask", "Machine Learning", "Python", "Scikit-Learn", "Healthcare AI"],
      impact: "Early risk identification system for prenatal care support",
      category: "Healthcare",
    },
    {
      title: "Brain Tumor Detection using ResNet-50",
      description: "Designed a deep learning pipeline using ResNet-50 for MRI-based tumor classification with advanced data preprocessing and model optimization.",
      tech: ["Deep Learning", "ResNet-50", "TensorFlow", "Medical Imaging", "Python"],
      impact: "Improved diagnostic accuracy for brain tumor classification",
      category: "Medical AI",
    },
    {
      title: "Scalable ML Pipelines for Cloud-Based DDoS Detection",
      description: "Engineered adaptive ML pipelines for real-time DDoS detection in cloud environments with scalable deployment techniques.",
      tech: ["MLOps", "AWS", "Docker", "CI/CD", "Security", "Python"],
      impact: "Enhanced security and response efficiency in cloud logistics",
      category: "Cybersecurity",
    },
  ];

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-background pt-24 pb-16">
        <div className="container mx-auto px-6">
          <PageHeader
            title="Projects & Research"
            subtitle="Building AI solutions that solve real-world problems"
          />

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow-primary group animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-4">
                  <Badge className="mb-3 bg-primary/10 text-primary border-primary/20">
                    {project.category}
                  </Badge>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {project.description}
                  </p>
                </div>

                <div className="mb-4">
                  <p className="text-sm font-semibold text-accent mb-2">Impact:</p>
                  <p className="text-sm text-muted-foreground">{project.impact}</p>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, idx) => (
                    <Badge
                      key={idx}
                      variant="outline"
                      className="text-xs border-muted-foreground/30"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3 pt-4 border-t border-border">
                  <button className="text-sm text-muted-foreground hover:text-accent transition-colors flex items-center gap-2">
                    <Github className="h-4 w-4" />
                    Code
                  </button>
                  <button className="text-sm text-muted-foreground hover:text-accent transition-colors flex items-center gap-2">
                    <ExternalLink className="h-4 w-4" />
                    Demo
                  </button>
                </div>
              </Card>
            ))}
          </div>

          {/* Research Papers Section */}
          <section className="mt-20 max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Research Publications</h2>
            <div className="grid gap-6">
              {[
                {
                  title: "Enhanced Brain Tumor Prediction using Quantum: A Hybrid Deep Learning Approach",
                  role: "Contributor",
                },
                {
                  title: "Quantum-Driven Feature Extraction for Pancreatic Cancer Detection",
                  role: "Second Author",
                },
                {
                  title: "AE-EBM MetaStack for Multi-Class Obesity Risk Classification",
                  role: "Second Author",
                },
                {
                  title: "Hybrid SARIMA-LSTM for Energy Forecasting in Telecom Networks",
                  role: "Second Author",
                },
              ].map((paper, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${(index + 4) * 100}ms` }}
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">{paper.title}</h3>
                      <Badge className="bg-accent/10 text-accent border-accent/20">
                        {paper.role}
                      </Badge>
                    </div>
                    <button className="text-sm text-primary hover:text-accent transition-colors flex items-center gap-2">
                      <ExternalLink className="h-4 w-4" />
                      View Paper
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Projects;
