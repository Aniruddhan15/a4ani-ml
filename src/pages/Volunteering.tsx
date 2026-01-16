import Navigation from "@/components/Navigation";
import PageHeader from "@/components/PageHeader";
import { Users, Calendar, MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";

const Volunteering = () => {
  const volunteeringRoles = [
    {
      title: "Challenge Course Facilitator",
      organization: "University of Maryland, College Park",
      location: "College Park, MD, USA",
      period: "December 2024 – Present",
      responsibilities: [
        "Design and run Challenge Course workshops, based on group goals, at the RecWell Challenge Course, with support from challenge course supervisors.",
        "Introduce and lead team-building activities for Challenge Course participants.",
        "Introduce and lead climbing activities for Challenge Course participants.",
        "Facilitate and debrief group events and processing of activities.",
        "Assist participants in the correct use of Challenge Course-related equipment.",
        "Inspect Challenge Course-related equipment and report damage or wear to the Coordinator for Challenge Course and Climbing Wall programs.",
        "Assess and properly respond to emergencies.",
        "Actively observe groups on the challenge course.",
        "Cooperate with fellow facilitators to lead smooth and effective programs.",
        "Lead groups through the experiential learning cycle with intentional reflections and debriefs.",
      ],
    },
    {
      title: "Event Assistant",
      organization: "CodeChef VIT Society",
      location: "Chennai, India",
      period: "Feb 2023 – Jan 2024",
      responsibilities: [
        "Assisted in organizing campus events and technical festivals with 1,000+ participants.",
        "Directed delegates, managed crowd flow, and coordinated logistics to ensure smooth execution.",
        "Developed strong communication and problem-solving skills while supporting diverse groups.",
      ],
    },
    {
      title: "Content Production Member",
      organization: "Film Society VITC",
      location: "Chennai, India",
      period: "May'2022 – Aug'2022",
      responsibilities: [
        "Created and curated engaging content for cultural events and media outreach.",
        "Collaborated with creative teams to design promotional material and event coverage.",
      ],
    },
    {
      title: "Content Team Member",
      organization: "ViTrendz Chennai",
      location: "Chennai, India",
      period: "Jul'2022 - Apr'23",
      responsibilities: [
        "Supported digital content creation and publication to improve engagement and outreach.",
        "Coordinated with peers to deliver timely and relevant content for student audiences.",
      ],
    },
  ];

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-background pt-24 pb-16">
        <div className="container mx-auto px-6">
          <PageHeader
            title="Volunteering Experience"
            subtitle="Community involvement and leadership contributions"
          />

          <section className="max-w-4xl mx-auto space-y-6">
            {volunteeringRoles.map((role, index) => (
              <Card
                key={index}
                className="p-8 hover:border-primary/50 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="space-y-4">
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 pb-4 border-b border-border">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-foreground mb-2">
                        {role.title}
                      </h3>
                      <div className="flex items-center gap-2 text-primary font-semibold mb-3">
                        <Users className="h-5 w-5" />
                        <span>{role.organization}</span>
                      </div>
                    </div>
                    <div className="flex flex-col items-start md:items-end gap-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        <span>{role.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>{role.period}</span>
                      </div>
                    </div>
                  </div>

                  {/* Responsibilities */}
                  <div className="space-y-3">
                    {role.responsibilities.map((responsibility, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="mt-2 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                        <p className="text-foreground leading-relaxed">
                          {responsibility}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </section>
        </div>
      </div>
    </>
  );
};

export default Volunteering;
