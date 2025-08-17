import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";
import mobileHeroBackground from "@/assets/mobile-hero-bg.jpg";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-0 pt-16">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat md:block hidden"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat md:hidden block"
        style={{ backgroundImage: `url(${mobileHeroBackground})` }}
      />
      <div className="absolute inset-0 bg-hero-gradient opacity-90" />

      {/* Content */}
      <div className="relative z-10 container mx-auto text-center">
        <div className="animate-fade-in">
          <h1 className="text-hero-mobile md:text-hero font-bold mb-6 leading-tight">
            <span className="text-foreground">Sai Ram</span>{" "}
            <span className="text-primary">Chidurala</span>
          </h1>

          <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/80 backdrop-blur-sm rounded-full mb-6">
            <div className="w-2 h-2 bg-primary rounded-full animate-glow-pulse" />
            <span className="text-secondary-foreground font-medium">Software Engineer I</span>
          </div>

          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed px-4">
            Results-driven Backend Engineer with 3+ years of experience building scalable
            Java applications and microservices. Currently leading a team of 10 engineers
            at Simplify360 (Nextiva Company).
          </p>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mb-8 text-muted-foreground px-4">
            <div className="flex items-center justify-center gap-2">
              <MapPin className="w-4 h-4 text-primary" />
              <span className="text-sm sm:text-base">Bangalore, Karnataka</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Phone className="w-4 h-4 text-primary" />
              <span className="text-sm sm:text-base">+91 9966365940</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 px-4">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-accent-glow hover:shadow-accent-glow transition-all duration-300 w-full sm:w-auto"
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              <Mail className="w-4 h-4 mr-2" />
              Get In Touch
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-primary/30 text-primary hover:bg-primary/10 hover:border-primary transition-all duration-300 w-full sm:w-auto"
              onClick={() => window.open('/resume', '_blank')}
            >
              View Resume
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mt-8">
            <a
              href="https://github.com/sairamchidurala"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary/50 hover:bg-primary/20 text-muted-foreground hover:text-primary transition-all duration-300 hover:shadow-subtle-glow"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/sairam-chidurala"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary/50 hover:bg-primary/20 text-muted-foreground hover:text-primary transition-all duration-300 hover:shadow-subtle-glow"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;