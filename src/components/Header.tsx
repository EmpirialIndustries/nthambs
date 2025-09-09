import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Phone } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Fleet", href: "#fleet" },
    { label: "Contact", href: "#contact" },
  ];

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img
              src="/Gallary/Logo.png"
              alt="Nthambeleni Logistics"
              className="h-10 w-10 lg:h-12 lg:w-12"
            />
            <div>
              <h1 className={`font-heading font-bold text-lg lg:text-xl transition-colors duration-300 ${
                isScrolled ? "text-industrial" : "text-white"
              }`}>
                Nthambeleni Logistics
              </h1>
              <p className={`text-xs transition-colors duration-300 ${
                isScrolled ? "text-muted-foreground" : "text-gray-300"
              }`}>
                EST. 2020
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className={`font-medium transition-colors duration-300 hover:scale-105 transform ${
                  isScrolled
                    ? "text-industrial hover:text-primary"
                    : "text-white hover:text-primary"
                }`}
              >
                {item.label}
              </button>
            ))}
            
            {/* Phone number display */}
            <div className={`hidden md:flex items-center text-sm transition-colors duration-300 ${
              isScrolled ? "text-muted-foreground hover:text-primary" : "text-gray-300 hover:text-white"
            }`}>
              <Phone className="h-4 w-4 mr-1" />
              072 219 5751
            </div>
            
            <Button
              onClick={() => handleNavClick("#contact")}
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:shadow-glow transition-all duration-300 text-white font-semibold px-6 py-2 transform hover:scale-105"
            >
              Request Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className={`transition-colors duration-300 ${
                    isScrolled ? "text-industrial hover:text-primary" : "text-white hover:text-primary"
                  }`}
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 bg-white">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center space-x-3">
                    <img
                      src="/lovable-uploads/ca84ba09-4dc8-455b-b849-dcd68d8e5a23.png"
                      alt="Nthambeleni Logistics"
                      className="h-10 w-10"
                    />
                    <div>
                      <h2 className="font-heading font-bold text-lg text-industrial">
                        Nthambeleni Logistics
                      </h2>
                      <p className="text-xs text-muted-foreground">EST. 2020</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  {navItems.map((item) => (
                    <button
                      key={item.label}
                      onClick={() => handleNavClick(item.href)}
                      className="block w-full text-left font-medium text-industrial hover:text-primary transition-colors duration-300 py-2 border-b border-gray-100 last:border-b-0"
                    >
                      {item.label}
                    </button>
                  ))}
                  
                  <div className="flex items-center text-sm text-muted-foreground py-2">
                    <Phone className="h-4 w-4 mr-1" />
                    072 219 5751
                  </div>
                  
                  <Button
                    onClick={() => handleNavClick("#contact")}
                    className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:shadow-glow transition-all duration-300 text-white font-semibold py-3 mt-6"
                  >
                    Request Quote
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
