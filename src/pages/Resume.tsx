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
                SOFTWARE ENGINEER II
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
                Software Engineer II with 3.5+ years of experience building scalable Java microservices and owning backend
                delivery for enterprise customer support platforms. Proven strength in system design, event-driven architecture,
                CI/CD, production support, and cross-functional execution. Experienced in mentoring engineers, shaping
                technical direction, and delivering reliable client-facing features in agile environments.
              </p>
            </section>

            <Separator className="mb-6" />

            {/* Technical Skills */}
            <section className="mb-6">
              <h2 className="text-xl font-bold text-foreground mb-3">TECHNICAL SKILLS</h2>
              <div className="space-y-2 text-muted-foreground">
                <div><strong>Languages & Frameworks:</strong> Java 8+, Spring Boot, REST APIs, Python, Flask</div>
                <div><strong>Architecture & Backend:</strong> Microservices, Event-driven Systems, Multithreading, Design Patterns, System Design</div>
                <div><strong>Data & Messaging:</strong> MySQL, MongoDB (NoSQL), Apache Kafka, Webhooks, Query Optimization</div>
                <div><strong>Delivery & Operations:</strong> Git, Docker, CI/CD (GitHub Actions, Jenkins), Linux, Bash, Production Support</div>
                <div><strong>Engineering Practices:</strong> Code Reviews, Technical Mentoring, Service Ownership, Stakeholder Collaboration, Agile Execution</div>
              </div>
            </section>

            <Separator className="mb-6" />

            {/* Experience */}
            <section className="mb-6">
              <h2 className="text-xl font-bold text-foreground mb-3">EXPERIENCE</h2>

              {/* Current Role */}
              <div className="mb-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-semibold text-foreground">Software Engineer II | Simplify360 (A Nextiva Company)</h3>
                  <span className="text-sm text-muted-foreground">Apr 2026 - Present</span>
                </div>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                  <li>Own backend delivery for enterprise workflows in Unibox CRM, turning business requirements into scalable service implementations and production releases.</li>
                  <li>Drive architecture decisions for microservices and event-driven integrations across WhatsApp, Facebook, and Live Chat channels.</li>
                  <li>Serve as the de facto technical lead for a team of 10 engineers, mentoring implementation, guiding technical decisions, and unblocking delivery.</li>
                  <li>Integrated AI/ML capabilities such as sentiment analysis and summarization to improve agent productivity and customer insight.</li>
                  <li>Partner with PM, QA, Design, and client-facing teams to scope releases, manage tradeoffs, and deliver reliable features for enterprise customers.</li>
                  <li>Improved release reliability through Dockerized services, CI/CD pipelines, and hands-on production support for large enterprise accounts.</li>
                </ul>
              </div>

              <div className="mb-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-semibold text-foreground">Software Engineer I | Simplify360 (A Nextiva Company)</h3>
                  <span className="text-sm text-muted-foreground">Oct 2024 - Mar 2026</span>
                </div>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                  <li>Designed and developed scalable microservices in Java 8 and Spring Boot for customer support platforms like WhatsApp, Facebook, and Live Chat.</li>
                  <li>Built asynchronous event-driven systems using Kafka to streamline ticket creation, assignment, and response management.</li>
                  <li>Designed and implemented a locking system using multithreading to ensure sequential processing of user-specific message webhooks at scale.</li>
                  <li>Provided production support and client-level customization for real-time bot systems used by large enterprise clients.</li>
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
                <li>Progressed into a broader ownership role spanning architecture guidance, mentoring, and release execution across enterprise support workflows.</li>
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
