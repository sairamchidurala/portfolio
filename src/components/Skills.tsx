import { Card } from "@/components/ui/card";
import { Code, Database, Server, GitBranch, MessageSquare, Settings } from "lucide-react";

const skillCategories = [
  {
    title: "Languages & Frameworks",
    icon: Code,
    skills: ["Java 8+", "Spring Boot", "REST APIs", "Python", "Flask"],
    color: "text-blue-400"
  },
  {
    title: "Architecture & Design",
    icon: Server,
    skills: ["Microservices", "Multithreading", "Design Patterns", "Event-driven Systems"],
    color: "text-green-400"
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["MySQL", "MongoDB (NoSQL)", "Query Optimization"],
    color: "text-purple-400"
  },
  {
    title: "DevOps & Tools",
    icon: Settings,
    skills: ["Git", "CI/CD (GitHub Actions, Jenkins)", "Docker", "Bash", "Linux"],
    color: "text-orange-400"
  },
  {
    title: "Messaging & Integration",
    icon: MessageSquare,
    skills: ["Apache Kafka", "Webhooks", "Third-party APIs"],
    color: "text-cyan-400"
  },
  {
    title: "Development Practices",
    icon: GitBranch,
    skills: ["Agile", "Data Structures & Algorithms", "System Design"],
    color: "text-pink-400"
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-section font-bold text-foreground mb-4">
            Technical Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive skill set focused on building scalable backend systems and leading development teams
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title}
              className="p-6 bg-card-gradient border-border hover:border-primary/30 transition-all duration-300 hover:shadow-subtle-glow group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-secondary">
                  <category.icon className={`w-5 h-5 ${category.color}`} />
                </div>
                <h3 className="text-card-title font-semibold text-card-foreground">
                  {category.title}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-sm bg-secondary/60 text-secondary-foreground rounded-full border border-border group-hover:border-primary/20 transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;