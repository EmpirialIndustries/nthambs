import { Button } from "@/components/ui/button";
import { Menu, Phone, Mail, X } from "lucide-react";
import { useState, useEffect } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg' 
        : 'bg-white shadow-sm'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4 transform hover:scale-105 transition-transform duration-300">
            <img 
              src="/lovable-uploads/ca84ba09-4dc8-455b-b849-dcd68d8e5a23.png" 
              alt="Nthambeleni Logistics" 
              className="h-10 w-auto"
            />
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('about')} className="text-foreground hover:text-primary transition-all duration-300 hover:scale-105 relative group">
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button onClick={() => scrollToSection('services')} className="text-foreground hover:text-primary transition-all duration-300 hover:scale-105 relative group">
              Services
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button onClick={() => scrollToSection('fleet')} className="text-foreground hover:text-primary transition-all duration-300 hover:scale-105 relative group">
              Fleet
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-foreground hover:text-primary transition-all duration-300 hover:scale-105 relative group">
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </button>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors duration-300">
              <Phone className="h-4 w-4 mr-1" />
              072 219 5751
            </div>
            <Button variant="hero" size="sm" className="transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg">
              Request Quote
            </Button>
          </div>

          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden transform hover:scale-110 transition-all duration-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg border-t animate-in slide-in-from-top-2 duration-300">
            <nav className="flex flex-col p-4 space-y-4">
              <button onClick={() => scrollToSection('about')} className="text-left text-foreground hover:text-primary transition-colors py-2">About</button>
              <button onClick={() => scrollToSection('services')} className="text-left text-foreground hover:text-primary transition-colors py-2">Services</button>
              <button onClick={() => scrollToSection('fleet')} className="text-left text-foreground hover:text-primary transition-colors py-2">Fleet</button>
              <button onClick={() => scrollToSection('contact')} className="text-left text-foreground hover:text-primary transition-colors py-2">Contact</button>
              <div className="flex items-center text-sm text-muted-foreground py-2">
                <Phone className="h-4 w-4 mr-1" />
                072 219 5751
              </div>
              <Button variant="hero" size="sm" className="w-fit">
                Request Quote
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;