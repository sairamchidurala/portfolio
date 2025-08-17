import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Download, ArrowLeft, MapPin, Phone, Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Resume = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header with actions - hidden in print */}
      <div className="no-print sticky top-0 bg-background/95 backdrop-blur-sm border-b border-border z-10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Portfolio
            </Button>
          </Link>
          <Button onClick={handlePrint} size="sm">
            <Download className="w-4 h-4 mr-2" />
            Download PDF
          </Button>
        </div>
      </div>

      {/* Resume Content */}
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Card className="bg-card border-border print:border-0 print:shadow-none">
          <CardContent className="p-8 print:p-6">
            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-foreground mb-2">
                SAI RAM CHIDURALA
              </h1>
              <p className="text-lg text-primary font-semibold mb-4">
                SOFTWARE ENGINEER I
              </p>

              {/* Contact Info */}
              <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  Bangalore, Karnataka
                </div>
                <div className="flex items-center gap-1">
                  <Phone className="w-4 h-4" />
                  +91 9966365940
                </div>
                <div className="flex items-center gap-1">
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </div>
                <div className="flex items-center gap-1">
                  <Github className="w-4 h-4" />
                  GitHub
                </div>
                <div className="flex items-center gap-1">
                  <Mail className="w-4 h-4" />
                  Sairam Chidurala
                </div>
              </div>
            </div>

            <Separator className="mb-6" />

            {/* Objective */}
            <section className="mb-6">
              <h2 className="text-xl font-bold text-foreground mb-3">OBJECTIVE</h2>
              <p className="text-muted-foreground leading-relaxed">
                Results-driven Software Engineer with 3+ years of experience in developing scalable Java applications and
                microservices using Spring Boot. Proven expertise in REST API development, Kafka, SQL/NoSQL, and CI/CD
                workflows. Strong analytical and problem-solving skills with a keen ability to deliver end-to-end solutions in agile,
                client-facing environments. Eager to contribute to impactful financial and regulatory technology initiatives.
              </p>
            </section>

            <Separator className="mb-6" />

            {/* Technical Skills */}
            <section className="mb-6">
              <h2 className="text-xl font-bold text-foreground mb-3">TECHNICAL SKILLS</h2>
              <div className="space-y-2 text-muted-foreground">
                <div><strong>Languages & Frameworks:</strong> Java 8+, Spring Boot, REST APIs, Python, Flask</div>
                <div><strong>Architecture:</strong> Microservices, Multithreading, Design Patterns</div>
                <div><strong>Databases:</strong> MySQL, MongoDB (NoSQL)</div>
                <div><strong>DevOps & Tools:</strong> Git, CI/CD (GitHub Actions, Jenkins), Docker, Bash</div>
                <div><strong>Messaging & Integration:</strong> Apache Kafka, Webhooks</div>
                <div><strong>Others:</strong> Linux, Agile, Data Structures & Algorithms (DSA)</div>
              </div>
            </section>

            <Separator className="mb-6" />

            {/* Experience */}
            <section className="mb-6">
              <h2 className="text-xl font-bold text-foreground mb-3">EXPERIENCE</h2>

              {/* Current Role */}
              <div className="mb-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-semibold text-foreground">Software Engineer I | Simplify360 (A Nextiva Company)</h3>
                  <span className="text-sm text-muted-foreground">Oct 2024 - Present</span>
                </div>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                  <li>Designed and developed scalable microservices in Java 8 and Spring Boot for customer support platforms like WhatsApp, Facebook, and Live Chat.</li>
                  <li>Built asynchronous event-driven systems using Kafka to streamline ticket creation, assignment, and response management.</li>
                  <li>Designed and implemented a locking system using multithreading to ensure sequential processing of user-specific message webhooks at scale.</li>
                  <li>Integrated AI/ML capabilities such as sentiment analysis and summarization to enhance user insights and agent efficiency.</li>
                  <li>Developed containerized applications using Docker, deployed through CI/CD pipelines to ensure fast and reliable delivery.</li>
                  <li>Collaborated with cross-functional teams (PMs, QA, Design) to build and release features for Unibox CRM platform in agile sprints.</li>
                  <li>Currently serving as the de facto technical lead for a team of 10 engineers, guiding development, architecture decisions, and mentoring, due to deep system-level understanding and lack of senior technical leadership in the organization.</li>
                  <li>Provided production support and client-level customization for real-time bot systems used by clients like Tata Play, Kotak, and Bank of Baroda.</li>
                </ul>
              </div>

              {/* Previous Role */}
              <div className="mb-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-semibold text-foreground">Junior Software Engineer | Simplify360 (A Nextiva Company)</h3>
                  <span className="text-sm text-muted-foreground">Oct 2022 - Oct 2024</span>
                </div>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                  <li>Created and maintained chatbots across WhatsApp, WebChat, Facebook, and Instagram, serving millions of users.</li>
                  <li>Increased automation coverage by 90% for Tata Play's support system, reducing operational support costs by 40%.</li>
                  <li>Developed robust backend APIs and workflows in Java, ensuring secure integration with third-party messaging APIs and CRM systems.</li>
                  <li>Worked closely with client stakeholders, gathering requirements, providing demos, and supporting rollout of new features and bots.</li>
                </ul>
              </div>
            </section>

            <Separator className="mb-6" />

            {/* Achievements */}
            <section>
              <h2 className="text-xl font-bold text-foreground mb-3">ACHIEVEMENTS</h2>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                <li>Recognized by Tata Play with an official appreciation certificate for leading the design and implementation of WhatsApp Bots that significantly improved their CRM operations.</li>
                <li>Contributed to client success stories by delivering enterprise-grade AI chatbots, leading to measurable improvements in agent productivity and cost savings.</li>
              </ul>
            </section>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Resume;