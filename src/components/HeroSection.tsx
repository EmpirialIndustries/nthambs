import { Button } from "@/components/ui/button";
import { Truck, Award, Globe, Shield } from "lucide-react";
import heroImage from "@/assets/hero-logistics.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 to-primary/80" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Delivering Beyond 
            <span className="bg-gradient-to-r from-accent to-white bg-clip-text text-transparent"> Expectations</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
            Trusted South African logistics partner, delivering safe and reliable transport solutions 
            nationwide and across the SADC region.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button variant="hero" size="lg" className="text-lg px-8 py-6">
              Request a Quote
            </Button>
            <Button variant="outline-white" size="lg" className="text-lg px-8 py-6">
              Contact Us
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-white">
            <div className="text-center">
              <Truck className="h-8 w-8 mx-auto mb-2 text-accent" />
              <div className="text-2xl font-bold">20+</div>
              <div className="text-sm opacity-90">Modern Trucks</div>
            </div>
            <div className="text-center">
              <Globe className="h-8 w-8 mx-auto mb-2 text-accent" />
              <div className="text-2xl font-bold">SADC</div>
              <div className="text-sm opacity-90">Regional Coverage</div>
            </div>
            <div className="text-center">
              <Award className="h-8 w-8 mx-auto mb-2 text-accent" />
              <div className="text-2xl font-bold">100%</div>
              <div className="text-sm opacity-90">Reliability</div>
            </div>
            <div className="text-center">
              <Shield className="h-8 w-8 mx-auto mb-2 text-accent" />
              <div className="text-2xl font-bold">24/7</div>
              <div className="text-sm opacity-90">Safe Transport</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;