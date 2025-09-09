import { Button } from "@/components/ui/button";
import { Truck, Award, Globe, Shield, ChevronDown } from "lucide-react";

const HeroSection = () => {
  const heroImage = "/lovable-uploads/1b92cb1b-94e0-41f4-baee-c79472c98359.png";

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleQuoteRequest = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const statsData = [
    {
      icon: Truck,
      number: "20+",
      label: "Modern Trucks",
      animation: "group-hover:animate-bounce"
    },
    {
      icon: Globe,
      number: "SADC",
      label: "Regional Coverage",
      animation: "group-hover:animate-spin"
    },
    {
      icon: Award,
      number: "15+",
      label: "Years Experience",
      animation: "group-hover:animate-pulse"
    },
    {
      icon: Shield,
      number: "24/7",
      label: "Operations",
      animation: "group-hover:animate-pulse"
    }
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105"
        style={{ backgroundImage: `url(${heroImage})` }}
        aria-hidden="true"
      />
      
      {/* Overlay Gradients */}
      <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 to-primary/80">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20" />
      </div>
      
      {/* Main Content */}
      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          
          {/* Main Heading */}
          <div className="animate-in fade-in-0 slide-in-from-bottom-8 duration-1000">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Delivering Beyond{" "}
              <span className="bg-gradient-to-r from-accent to-white bg-clip-text text-transparent inline-block animate-pulse">
                Expectations
              </span>
            </h1>
          </div>
          
          {/* Subtitle */}
          <div className="animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-300">
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto">
              Trusted South African logistics partner, delivering safe and reliable transport solutions 
              nationwide and across the SADC region.
            </p>
          </div>
          
          {/* CTA Buttons */}
          <div className="animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-500">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                variant="hero" 
                size="lg" 
                onClick={handleQuoteRequest}
                className="text-lg px-8 py-6 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl min-w-fit"
              >
                Request a Quote
              </Button>
              <Button 
                variant="outline-white" 
                size="lg" 
                onClick={scrollToContact}
                className="text-lg px-8 py-6 transform hover:scale-105 transition-all duration-300 backdrop-blur-sm border-2 border-white/30 hover:border-white/60 min-w-fit"
              >
                Contact Us
              </Button>
            </div>
          </div>

          {/* Statistics Grid */}
          <div className="animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-700">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-white pt-8">
              {statsData.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div 
                    key={index}
                    className="text-center group hover:scale-110 transition-all duration-300 cursor-pointer p-4 rounded-lg hover:bg-white/10 backdrop-blur-sm"
                  >
                    <IconComponent className={`h-8 w-8 mx-auto mb-3 text-accent transition-all duration-300 ${stat.animation}`} />
                    <div className="text-2xl md:text-3xl font-bold mb-1 text-white">
                      {stat.number}
                    </div>
                    <div className="text-sm md:text-base opacity-90 text-white/80 font-medium">
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-in fade-in-0 duration-1000 delay-1000">
          <button 
            onClick={scrollToAbout}
            className="text-white/70 hover:text-white transition-all duration-300 flex flex-col items-center gap-2 group p-2"
            aria-label="Scroll to about section"
          >
            <span className="text-sm font-medium group-hover:scale-105 transition-transform duration-300">
              Scroll to explore
            </span>
            <ChevronDown className="h-6 w-6 animate-bounce group-hover:animate-pulse transition-all duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
