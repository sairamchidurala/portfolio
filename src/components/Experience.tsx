import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Users, TrendingUp, Award } from "lucide-react";

const experiences = [
  {
    title: "Software Engineer I",
    company: "Simplify360 (A Nextiva Company)",
    period: "Oct 2024 - Present",
    type: "Current Role",
    highlights: [
      "Leading a team of 10 engineers as de facto technical lead",
      "Designed scalable microservices for WhatsApp, Facebook, and Live Chat platforms",
      "Built event-driven systems using Kafka for ticket management",
      "Implemented multithreading locking system for sequential message processing",
      "Integrated AI/ML capabilities for sentiment analysis and summarization",
      "Deployed containerized applications through CI/CD pipelines"
    ],
    technologies: ["Java 8", "Spring Boot", "Kafka", "Docker", "AI/ML", "Microservices"],
    achievements: [
      "Team Leadership: Managing 10 engineers",
      "Enterprise Clients: Tata Play, Kotak, Bank of Baroda"
    ]
  },
  {
    title: "Junior Software Engineer",
    company: "Simplify360 (A Nextiva Company)",
    period: "Oct 2022 - Oct 2024",
    type: "2 Years",
    highlights: [
      "Created chatbots across WhatsApp, WebChat, Facebook, and Instagram",
      "Increased automation coverage by 90% for Tata Play's support system",
      "Reduced operational support costs by 40%",
      "Developed robust backend APIs with secure third-party integrations",
      "Collaborated directly with client stakeholders for requirements gathering"
    ],
    technologies: ["Java", "REST APIs", "WhatsApp API", "Facebook API", "CRM Integration"],
    achievements: [
      "90% automation coverage increase",
      "40% cost reduction for Tata Play",
      "Official appreciation certificate from Tata Play"
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-section-mobile md:text-section font-bold text-foreground mb-4">
            Professional Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            3+ years of backend development excellence with proven leadership and enterprise impact
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <Card
              key={exp.title}
              className="p-4 md:p-8 bg-card-gradient border-border hover:border-primary/30 transition-all duration-500 hover:shadow-subtle-glow"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                <div>
                  <h3 className="text-card-title-mobile md:text-card-title font-bold text-card-foreground mb-2">
                    {exp.title}
                  </h3>
                  <p className="text-primary font-medium text-lg mb-2">
                    {exp.company}
                  </p>
                  <div className="flex items-center gap-4 text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                </div>
                <div className="mt-4 md:mt-0">
                  <Badge
                    variant="outline"
                    className={`${exp.type === 'Current Role' ? 'border-primary text-primary' : 'border-muted-foreground text-muted-foreground'}`}
                  >
                    {exp.type}
                  </Badge>
                </div>
              </div>

              {/* Key Highlights */}
              <div className="mb-6">
                <h4 className="font-semibold text-card-foreground mb-3 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-primary" />
                  Key Contributions
                </h4>
                <ul className="space-y-2">
                  {exp.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2.5 flex-shrink-0" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Achievements */}
              {exp.achievements && (
                <div className="mb-6">
                  <h4 className="font-semibold text-card-foreground mb-3 flex items-center gap-2">
                    <Award className="w-4 h-4 text-primary" />
                    Key Achievements
                  </h4>
                  <div className="grid grid-cols-1 gap-3">
                    {exp.achievements.map((achievement, idx) => (
                      <div key={idx} className="bg-secondary/30 p-3 rounded-lg border border-border">
                        <span className="text-sm text-card-foreground">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Technologies */}
              <div>
                <h4 className="font-semibold text-card-foreground mb-3">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;