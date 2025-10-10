import Navigation from "@/components/Navigation";
import PageHeader from "@/components/PageHeader";
import { Award, BookOpen, Trophy, FileCheck } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Achievements = () => {
  const certifications = [
    {
      title: "Microsoft Power Platform App Maker Associate",
      issuer: "Microsoft",
      icon: FileCheck,
    },
    {
      title: "Google Developers AI and Machine Learning",
      issuer: "Google",
      icon: FileCheck,
    },
  ];

  const workshops = [
    "Workshop on Essential Skills for Professional Development at MBITS",
    "Presented at 5th International Conference on Advances in Artificial Intelligence and Cyber Security (AICS 2025)",
  ];

  const contributions = [
    {
      platform: "Kaggle",
      description: "Active participant in data science competitions and collaborative projects",
      icon: Trophy,
    },
    {
      platform: "GeeksforGeeks",
      description: "Technical articles on AI/ML topics and algorithm implementations",
      icon: BookOpen,
    },
  ];

  const researchWorks = [
    {
      title: "Enhanced Brain Tumor Prediction using Quantum: A Hybrid Deep Learning Approach",
      role: "Contributor",
      year: "2025",
    },
    {
      title: "Quantum-Driven Feature Extraction for Pancreatic Cancer Detection",
      role: "Second Author",
      year: "2025",
    },
    {
      title: "AE-EBM MetaStack for Multi-Class Obesity Risk Classification",
      role: "Second Author",
      year: "2025",
    },
    {
      title: "Hybrid SARIMA-LSTM for Energy Forecasting in Telecom Networks",
      role: "Second Author",
      year: "2025",
    },
  ];

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-background pt-24 pb-16">
        <div className="container mx-auto px-6">
          <PageHeader
            title="Achievements"
            subtitle="Recognition, certifications, and contributions"
          />

          {/* Research Publications */}
          <section className="mb-16 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <BookOpen className="h-8 w-8 text-primary" />
              Research Publications
            </h2>
            <div className="space-y-4">
              {researchWorks.map((work, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-foreground mb-2">{work.title}</h3>
                      <div className="flex gap-3 items-center">
                        <Badge className="bg-primary/10 text-primary border-primary/20">
                          {work.role}
                        </Badge>
                        <span className="text-sm text-muted-foreground">{work.year}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Certifications */}
          <section className="mb-16 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <FileCheck className="h-8 w-8 text-accent" />
              Certifications
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => {
                const Icon = cert.icon;
                return (
                  <div
                    key={index}
                    className="bg-card border border-border rounded-xl p-6 hover:border-accent/50 transition-all duration-300 animate-fade-in"
                    style={{ animationDelay: `${(researchWorks.length + index) * 100}ms` }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-gradient-accent">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">{cert.title}</h3>
                        <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Workshops & Presentations */}
          <section className="mb-16 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <Award className="h-8 w-8 text-primary" />
              Workshops & Presentations
            </h2>
            <div className="space-y-4">
              {workshops.map((workshop, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${(researchWorks.length + certifications.length + index) * 100}ms` }}
                >
                  <p className="text-foreground">{workshop}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Contributions */}
          <section className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <Trophy className="h-8 w-8 text-accent" />
              Platform Contributions
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {contributions.map((contribution, index) => {
                const Icon = contribution.icon;
                return (
                  <div
                    key={index}
                    className="bg-card border border-border rounded-xl p-6 hover:border-accent/50 transition-all duration-300 animate-fade-in"
                    style={{ animationDelay: `${(researchWorks.length + certifications.length + workshops.length + index) * 100}ms` }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-gradient-primary">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">{contribution.platform}</h3>
                        <p className="text-sm text-muted-foreground">{contribution.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Achievements;
