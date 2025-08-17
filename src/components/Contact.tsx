import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Download, Calendar } from "lucide-react";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-section-mobile md:text-section font-bold text-foreground mb-4">
            Let's Connect
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to discuss opportunities in backend engineering, microservices, or technical leadership
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12">
            {/* Contact Information */}
            <Card className="p-4 md:p-8 bg-card-gradient border-border">
              <h3 className="text-card-title-mobile md:text-card-title font-bold text-card-foreground mb-6">
                Contact Information
              </h3>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-card-foreground">Email</p>
                    <p className="text-muted-foreground">sairamchidurala93@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-card-foreground">Phone</p>
                    <p className="text-muted-foreground">+91 9966365940</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-card-foreground">Location</p>
                    <p className="text-muted-foreground">Bangalore, Karnataka</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-6 border-t border-border">
                <p className="font-medium text-card-foreground mb-4">Connect with me</p>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/sairamchidurala"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg bg-secondary hover:bg-primary/20 text-muted-foreground hover:text-primary transition-all duration-300"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href="https://linkedin.com/in/sairam-chidurala"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg bg-secondary hover:bg-primary/20 text-muted-foreground hover:text-primary transition-all duration-300"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </Card>

            {/* Quick Actions */}
            <Card className="p-4 md:p-8 bg-card-gradient border-border">
              <h3 className="text-card-title-mobile md:text-card-title font-bold text-card-foreground mb-6">
                Quick Actions
              </h3>

              <div className="space-y-4">
                <Button
                  className="w-full justify-start bg-primary hover:bg-primary/90 text-primary-foreground shadow-accent-glow hover:shadow-accent-glow transition-all duration-300"
                  size="lg"
                  onClick={() => window.open("mailto:sairamchidurala93@email.com", "_self")}
                >
                  <Mail className="w-4 h-4 mr-3" />
                  Send Email
                </Button>

                <Button
                  variant="outline"
                  className="w-full justify-start border-primary/30 text-primary hover:bg-primary/10 hover:border-primary transition-all duration-300"
                  size="lg"
                  onClick={() => window.open("/resume", "_blank")}
                >
                  <Download className="w-4 h-4 mr-3" />
                  Download Resume
                </Button>

                <Button
                  variant="outline"
                  className="w-full justify-start border-border hover:border-primary/30 hover:bg-secondary transition-all duration-300"
                  size="lg"
                  onClick={() => window.open("tel:+919966365940", "_self")}
                >
                  <Phone className="w-4 h-4 mr-3" />
                  Call Now
                </Button>
              </div>

              {/* Availability Status */}
              <div className="mt-8 p-4 bg-secondary/50 rounded-lg border border-border">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span className="font-medium text-card-foreground">Available for Opportunities</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Open to discussing backend engineering roles, technical leadership positions,
                  and challenging projects in fintech or enterprise software.
                </p>
              </div>
            </Card>
          </div>

          {/* Professional Summary */}
          <Card className="p-4 md:p-8 bg-card-gradient border-border text-center">
            <h3 className="text-card-title-mobile md:text-card-title font-bold text-card-foreground mb-4">
              Professional Summary
            </h3>
            <p className="text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Experienced Software Engineer specializing in Java-based backend systems, microservices architecture,
              and team leadership. Proven track record of delivering enterprise solutions for major clients including
              Tata Play, Kotak, and Bank of Baroda. Currently serving as technical lead for a team of 10 engineers
              while driving innovation in AI-enhanced customer support platforms.
            </p>
          </Card>

          <div className="mt-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;