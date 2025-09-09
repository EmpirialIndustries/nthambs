import { Button } from "@/components/ui/button";
import { Truck, Award, Globe, Shield, ChevronDown } from "lucide-react";
const heroImage = "/lovable-uploads/1b92cb1b-94e0-41f4-baee-c79472c98359.png";

const HeroSection = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 to-primary/80">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10 text-center animate-in fade-in-0 slide-in-from-bottom-8 duration-1000">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-300">
            Delivering Beyond 
            <span className="bg-gradient-to-r from-accent to-white bg-clip-text text-transparent animate-pulse"> Expectations</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-500">
            Trusted South African logistics partner, delivering safe and reliable transport solutions 
            nationwide and across the SADC region.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-700">
            <Button variant="hero" size="lg" className="text-lg px-8 py-6 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              Request a Quote
            </Button>
            <Button variant="outline-white" size="lg" className="text-lg px-8 py-6 transform hover:scale-105 transition-all duration-300 backdrop-blur-sm">
              Contact Us
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-white animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-1000">
            <div className="text-center group hover:scale-110 transition-all duration-300 cursor-pointer">
              <Truck className="h-8 w-8 mx-auto mb-2 text-accent group-hover:animate-bounce" />
              <div className="text-2xl font-bold">20+</div>
              <div className="text-sm opacity-90">Modern Trucks</div>
            </div>
            <div className="text-center group hover:scale-110 transition-all duration-300 cursor-pointer">
              <Globe className="h-8 w-8 mx-auto mb-2 text-accent group-hover:animate-spin" />
              <div className="text-2xl font-bold">SADC</div>
              <div className="text-sm opacity-90">Regional Coverage</div>
            </div>
            <div className="text-center group hover:scale-110 transition-all duration-300 cursor-pointer">
              <Award className="h-8 w-8 mx-auto mb-2 text-accent group-hover:animate-pulse" />
              <div className="text-2xl font-bold">15+</div>
              <div className="text-sm opacity-90">Years Experience</div>
            </div>
            <div className="text-center group hover:scale-110 transition-all duration-300 cursor-pointer">
              <Shield className="h-8 w-8 mx-auto mb-2 text-accent group-hover:animate-pulse" />
              <div className="text-2xl font-bold">24/7</div>
              <div className="text-sm opacity-90">Operations</div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button 
            onClick={scrollToAbout}
            className="text-white/80 hover:text-white transition-colors duration-300 flex flex-col items-center gap-2"
          >
            <span className="text-sm">Scroll to explore</span>
            <ChevronDown className="h-6 w-6 animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;