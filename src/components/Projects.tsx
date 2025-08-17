import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Trophy, Users, TrendingUp } from "lucide-react";
import ProjectDialog from "./ProjectDialog";

const projects = [
  {
    title: "WhatsApp Bot Automation Platform",
    client: "Tata Play",
    description: "Led the design and implementation of enterprise-grade WhatsApp bots that revolutionized customer support operations.",
    impact: [
      "90% increase in automation coverage",
      "40% reduction in operational support costs",
      "Official appreciation certificate from client"
    ],
    technologies: ["Java 8", "Spring Boot", "WhatsApp Business API", "Kafka", "MySQL"],
    type: "Enterprise Solution",
    status: "Live & Scaling"
  },
  {
    title: "Multi-Platform Chatbot Ecosystem",
    client: "Multiple Enterprise Clients",
    description: "Built comprehensive chatbot solutions across WhatsApp, Facebook, Instagram, and WebChat serving millions of users.",
    impact: [
      "Millions of users served daily",
      "Multi-platform integration",
      "Real-time response management"
    ],
    technologies: ["Java", "Spring Boot", "REST APIs", "MongoDB", "Third-party APIs"],
    type: "Platform Development",
    status: "Production"
  },
  {
    title: "Event-Driven Microservices Architecture",
    client: "Simplify360 Platform",
    description: "Designed scalable microservices with Kafka-based event streaming for ticket creation, assignment, and response management.",
    impact: [
      "Scalable message processing",
      "Sequential webhook handling",
      "High-performance architecture"
    ],
    technologies: ["Spring Boot", "Apache Kafka", "Docker", "Microservices", "Multithreading"],
    type: "System Architecture",
    status: "Production"
  },
  {
    title: "AI-Enhanced Customer Support Platform",
    client: "Unibox CRM",
    description: "Integrated AI/ML capabilities including sentiment analysis and summarization to enhance agent efficiency and customer insights.",
    impact: [
      "Enhanced agent productivity",
      "Automated sentiment analysis",
      "Intelligent summarization"
    ],
    technologies: ["Java", "AI/ML APIs", "Spring Boot", "CI/CD", "Docker"],
    type: "AI Integration",
    status: "Active Development"
  }
];

type ProjectWithDetails = typeof projects[0] & {
  problem: string;
  solution: string;
  metrics: string[];
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectWithDetails | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleProjectClick = (project: typeof projects[0]) => {
    setSelectedProject({
      ...project,
      problem: getProjectProblem(project.title),
      solution: getProjectSolution(project.title),
      metrics: getProjectMetrics(project.title)
    });
    setIsDialogOpen(true);
  };

  const getProjectProblem = (title: string) => {
    switch (title) {
      case "WhatsApp Bot Automation - Tata Play":
        return "Tata Play was facing overwhelming customer support volume with manual processes leading to long response times, high operational costs, and inconsistent customer experience across multiple channels.";
      case "Multi-Platform CRM Integration":
        return "Enterprise clients needed unified customer support across WhatsApp, Facebook, Instagram, and WebChat but were managing separate systems, leading to fragmented customer data and inefficient agent workflows.";
      case "Real-time Messaging Infrastructure":
        return "Existing messaging systems couldn't handle high-volume, concurrent message processing while maintaining message order and reliability, causing delays and message loss during peak hours.";
      default:
        return "Complex business challenges requiring scalable technical solutions.";
    }
  };

  const getProjectSolution = (title: string) => {
    switch (title) {
      case "WhatsApp Bot Automation - Tata Play":
        return "Designed and implemented an intelligent WhatsApp bot using Java 8, Spring Boot, and Kafka for event-driven processing. Integrated AI/ML capabilities for intent recognition and automated response generation, with fallback to human agents for complex queries.";
      case "Multi-Platform CRM Integration":
        return "Built a unified microservices architecture that consolidated all messaging platforms into a single CRM interface. Implemented real-time webhooks, message routing, and agent assignment algorithms with comprehensive analytics dashboard.";
      case "Real-time Messaging Infrastructure":
        return "Developed a scalable message processing system using multithreading and Kafka streams, implementing message queuing, deduplication, and sequential processing guarantees with MongoDB for persistence and Redis for caching.";
      default:
        return "Innovative technical solutions leveraging modern backend technologies and best practices.";
    }
  };

  const getProjectMetrics = (title: string) => {
    switch (title) {
      case "WhatsApp Bot Automation - Tata Play":
        return [
          "90% automation coverage achieved",
          "40% reduction in operational costs",
          "Response time reduced from hours to seconds",
          "Handles 10,000+ queries daily"
        ];
      case "Multi-Platform CRM Integration":
        return [
          "4 platforms unified into single interface",
          "60% improvement in agent productivity",
          "Real-time sync across all channels",
          "Serves millions of users daily"
        ];
      case "Real-time Messaging Infrastructure":
        return [
          "Processes 50,000+ messages per minute",
          "99.9% message delivery reliability",
          "Sub-second message processing",
          "Zero message loss during peak loads"
        ];
      default:
        return [];
    }
  };

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-section-mobile md:text-section font-bold text-foreground mb-4">
            Key Projects & Achievements
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Enterprise-scale solutions that delivered measurable business impact and technical excellence
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="p-4 md:p-6 bg-card-gradient border-border hover:border-primary/30 transition-all duration-500 hover:shadow-subtle-glow group h-full"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Header */}
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                  <h3 className="text-card-title-mobile md:text-card-title font-bold text-card-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-primary font-medium">{project.client}</p>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="border-primary/30 text-primary">
                    {project.status}
                  </Badge>
                </div>
              </div>

              {/* Description */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* Impact Metrics */}
              <div className="mb-6">
                <h4 className="font-semibold text-card-foreground mb-3 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-primary" />
                  Business Impact
                </h4>
                <div className="space-y-2">
                  {project.impact.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <Trophy className="w-3 h-3 text-primary flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div className="mb-6">
                <h4 className="font-semibold text-card-foreground mb-3">
                  Tech Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs bg-secondary/60 text-secondary-foreground rounded border border-border group-hover:border-primary/20 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Type */}
              <div className="flex justify-between items-center">
                <Badge
                  variant="secondary"
                  className="bg-primary/10 text-primary border-primary/20"
                >
                  {project.type}
                </Badge>
                <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
              </div>
            </Card>
          ))}
        </div>
      </div>

      <ProjectDialog
        project={selectedProject}
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
      />
    </section>
  );
};

export default Projects;