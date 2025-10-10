import Navigation from "@/components/Navigation";
import PageHeader from "@/components/PageHeader";
import { Award, BookOpen, Trophy, FileCheck, Presentation } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

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
    "Part of Core Event Management Committee that presented Decode with DSA conducted by the CodeChef, held at VIT Chennai, July'23",
    "Intra Department Academic Year Project Expo 2023, 2024",
  ];

  const presentations = [
    "PowerPoint presentation on Natural Language Processing as part of Open Classroom Discussion, Apr'2023",
    "Participated in FIL-Bengaluru: Web 3 Conference at Sheraton-Grand, White Field, Bengaluru, Dec'23",
    "Presented a poster on \"Stress Level Detection using Sleep Position\" as part of the Project held at VIT Chennai, Aug'24",
  ];

  const contributions = [
    {
      platform: "Kaggle",
      description: "Active participant in data science competitions and collaborative projects",
      icon: Trophy,
      link: "https://www.kaggle.com/naniruddhan",
    },
    {
      platform: "GeeksforGeeks",
      description: "Technical articles on AI/ML topics and algorithm implementations",
      icon: BookOpen,
      link: "https://www.geeksforgeeks.org/user/aniruddhan26/contributions/?type=articles",
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

          {/* Research Contributions */}
          <section className="mb-16 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <BookOpen className="h-8 w-8 text-primary" />
              Research Contributions
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

          {/* Presentations, Seminars & Conference */}
          <section className="mb-16 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <Presentation className="h-8 w-8 text-accent" />
              Presentations, Seminars & Conference
            </h2>
            <div className="space-y-4">
              {presentations.map((presentation, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-xl p-6 hover:border-accent/50 transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${(researchWorks.length + certifications.length + workshops.length + index) * 100}ms` }}
                >
                  <p className="text-foreground">{presentation}</p>
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
                  <a
                    key={index}
                    href={contribution.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-card border border-border rounded-xl p-6 hover:border-accent/50 transition-all duration-300 animate-fade-in group"
                    style={{ animationDelay: `${(researchWorks.length + certifications.length + workshops.length + presentations.length + index) * 100}ms` }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-gradient-primary">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="text-lg font-semibold text-foreground">{contribution.platform}</h3>
                          <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-accent transition-colors" />
                        </div>
                        <p className="text-sm text-muted-foreground">{contribution.description}</p>
                      </div>
                    </div>
                  </a>
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
