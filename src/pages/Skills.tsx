import Navigation from "@/components/Navigation";
import PageHeader from "@/components/PageHeader";
import { Badge } from "@/components/ui/badge";
import { Code2, Database, Cloud, Brain, Wrench, Users } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code2,
      skills: ["Python", "R", "C++", "SQL", "PostgreSQL"],
      color: "text-primary",
    },
    {
      title: "Machine Learning & AI",
      icon: Brain,
      skills: [
        "NumPy",
        "Pandas",
        "Matplotlib",
        "Seaborn",
        "Scikit-Learn",
        "TensorFlow",
        "NLP",
        "Generative AI",
        "Time Series Analysis",
        "Data Analysis",
      ],
      color: "text-accent",
    },
    {
      title: "Deployment & MLOps",
      icon: Cloud,
      skills: ["Flask", "Streamlit", "Gradio", "Docker", "MLFlow", "CI/CD", "GitHub Workflows"],
      color: "text-primary",
    },
    {
      title: "Tools & Platforms",
      icon: Wrench,
      skills: ["MySQL", "DVC", "Argo CD", "Vertex AI", "LangChain", "LlamaIndex", "AWS", "Spark"],
      color: "text-accent",
    },
    {
      title: "Databases",
      icon: Database,
      skills: ["PostgreSQL", "MySQL", "SQL"],
      color: "text-primary",
    },
    {
      title: "Soft Skills",
      icon: Users,
      skills: [
        "Team Collaboration",
        "Communication",
        "Leadership",
        "Problem Solving",
        "Agile Methodologies",
        "Technical Writing",
      ],
      color: "text-accent",
    },
  ];

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-background pt-24 pb-16">
        <div className="container mx-auto px-6">
          <PageHeader
            title="Technical Skills"
            subtitle="Core competencies and tools I work with"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <div
                  key={index}
                  className="bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-glow-primary animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`p-3 rounded-xl bg-gradient-primary`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold">{category.title}</h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, idx) => (
                      <Badge
                        key={idx}
                        variant="outline"
                        className="border-border hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Expertise Areas */}
          <section className="mt-20 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Domain Expertise</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Healthcare AI",
                  description: "Brain tumor detection, fetal health monitoring, cancer detection using quantum ML",
                },
                {
                  title: "Time Series Analysis",
                  description: "Energy forecasting, predictive modeling, SARIMA-LSTM hybrid approaches",
                },
                {
                  title: "Computer Vision",
                  description: "Image recognition, medical imaging analysis, AI-powered visual systems",
                },
              ].map((area, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-xl p-6 text-center hover:border-primary/50 transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${(skillCategories.length + index) * 100}ms` }}
                >
                  <h3 className="text-lg font-bold mb-3 text-primary">{area.title}</h3>
                  <p className="text-sm text-muted-foreground">{area.description}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Skills;
