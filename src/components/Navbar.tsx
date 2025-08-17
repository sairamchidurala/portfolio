import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const navItems = [
    { href: "#hero", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "https://iamsairam.in/blog", label: "Blogs", external: true },
    { href: "#contact", label: "Contact" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.href.substring(1));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (item: typeof navItems[0]) => {
    if (item.external) {
      window.open(item.href, "_blank");
    } else {
      const element = document.getElementById(item.href.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="text-lg font-bold text-primary">
            Sai Ram Chidurala
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item)}
                className={`text-sm font-medium transition-colors hover:text-primary ${!item.external && activeSection === item.href.substring(1)
                    ? "text-primary"
                    : "text-muted-foreground"
                  }`}
              >
                {item.label}
              </button>
            ))}
            <Button
              variant="outline"
              size="sm"
              onClick={() => window.open("/resume", "_blank")}
              className="border-primary/30 text-primary hover:bg-primary/10"
            >
              Resume
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item)}
                  className={`block px-3 py-2 text-base font-medium transition-colors hover:text-primary w-full text-left ${!item.external && activeSection === item.href.substring(1)
                      ? "text-primary"
                      : "text-muted-foreground"
                    }`}
                >
                  {item.label}
                </button>
              ))}
              <Button
                variant="outline"
                size="sm"
                onClick={() => window.open("/resume", "_blank")}
                className="border-primary/30 text-primary hover:bg-primary/10 ml-3 mt-2"
              >
                Resume
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;