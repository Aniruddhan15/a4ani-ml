import Navigation from "@/components/Navigation";
import PageHeader from "@/components/PageHeader";
import { GraduationCap, Briefcase, BookOpen } from "lucide-react";

const About = () => {
  const education = [
    {
      degree: "Master of Science in Applied Machine Learning",
      institution: "University of Maryland, College Park",
      period: "Expected May 2027",
      location: "Maryland, USA",
      gpa: "3.9/4.0",
      coursework: {
        semester: "Fall 2025",
        courses: [
          "MSML 601 Probability and Statistics",
          "MSML 602 Principles of Data Science",
          "MSML 603 Principles of Machine Learning",
        ],
      },
    },
    {
      degree: "Bachelor of Technology in Computer Science and Engineering (AI & Robotics)",
      institution: "Vellore Institute of Technology (VIT), Chennai",
      period: "May 2025",
      location: "Chennai, India",
      gpa: "3.6/4.0",
    },
  ];

  const experience = [
    {
      role: "Research Contributor",
      company: "VIT Chennai with Prof. K. Valarmathi",
      period: "Dec 2024 - Jun 2025",
      location: "Chennai, India",
      highlights: [
        "Contributed to four research works in AI/ML",
        "Second Author on Quantum-Driven Feature Extraction for Pancreatic Cancer Detection",
        "Research on Enhanced Brain Tumor Prediction using Quantum Hybrid Deep Learning",
        "Developed AE-EBM MetaStack for Multi-Class Obesity Risk Classification",
      ],
    },
    {
      role: "Trainee & Project Contributor",
      company: "Fincrux Technologies LLP",
      period: "May 2024 - Aug 2024",
      location: "Chennai, India",
      highlights: [
        "Analyzed digital advertising data using Python and Pandas",
        "Generated actionable insights through Time Series analysis",
        "Developed data-driven strategies with team collaboration",
      ],
    },
    {
      role: "ASO Intern",
      company: "MUFG Global Services Pvt Ltd",
      period: "Nov 2023 - Dec 2023",
      location: "Bengaluru, India",
      highlights: [
        "Developed leave application portal using Microsoft Viva and SharePoint",
        "Automated workflows with Power Automate",
        "Implemented Agile methodologies in project delivery",
      ],
    },
  ];

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-background pt-24 pb-16">
        <div className="container mx-auto px-6">
          <PageHeader
            title="About Me"
            subtitle="My journey in AI and Machine Learning"
          />

          {/* Personal Story */}
          <section className="mb-20 max-w-4xl mx-auto">
            <div className="bg-card border border-border rounded-2xl p-8 animate-fade-in">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <BookOpen className="h-8 w-8 text-primary" />
                My Story
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I'm an enthusiastic Data Science professional with a strong background in Applied Machine Learning 
                  and AI & Robotics. Currently pursuing my Master's at the University of Maryland, College Park, 
                  I'm passionate about building data-driven models that solve real-world problems.
                </p>
                <p>
                  My journey in AI/ML has been marked by hands-on research experience, contributing to four research 
                  papers in cutting-edge areas like quantum computing for medical diagnosis and energy forecasting. 
                  I believe in the power of AI to transform healthcare, optimize operations, and create meaningful impact.
                </p>
                <p>
                  With a proven track record in internships and research, I bring technical expertise in Python, 
                  machine learning frameworks, and deployment tools, combined with strong collaborative problem-solving 
                  skills. I'm committed to leveraging my knowledge to drive innovation in machine health and 
                  operational efficiency.
                </p>
              </div>
            </div>
          </section>

          {/* Education */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <GraduationCap className="h-8 w-8 text-primary" />
              Education
            </h2>
            <div className="grid gap-6 max-w-4xl mx-auto">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <h3 className="text-xl font-bold text-foreground mb-2">{edu.degree}</h3>
                  <p className="text-primary font-semibold mb-2">{edu.institution}</p>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <span>{edu.period}</span>
                    <span>•</span>
                    <span>{edu.location}</span>
                    {edu.gpa && (
                      <>
                        <span>•</span>
                        <span className="text-accent font-medium">GPA: {edu.gpa}</span>
                      </>
                    )}
                  </div>
                  {edu.coursework && (
                    <div className="mt-4 pt-4 border-t border-border/50">
                      <p className="text-sm font-semibold text-primary mb-2">
                        Coursework ({edu.coursework.semester}):
                      </p>
                      <ul className="space-y-1">
                        {edu.coursework.courses.map((course, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span className="text-accent mt-0.5">•</span>
                            <span>{course}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Experience */}
          <section>
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <Briefcase className="h-8 w-8 text-primary" />
              Work & Research Experience
            </h2>
            <div className="space-y-8 max-w-4xl mx-auto">
              {experience.map((exp, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-1">{exp.role}</h3>
                      <p className="text-primary font-semibold">{exp.company}</p>
                    </div>
                    <div className="text-sm text-muted-foreground mt-2 md:mt-0 md:text-right">
                      <p>{exp.period}</p>
                      <p>{exp.location}</p>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, idx) => (
                      <li key={idx} className="text-muted-foreground flex items-start gap-2">
                        <span className="text-accent mt-1.5">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default About;
