import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Heart } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-primary/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-secondary/10 to-transparent rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4">
        <div className={`max-w-4xl mx-auto text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'animate-in fade-in-0 slide-in-from-bottom-8' : 'opacity-0'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            About Nthambeleni Logistics
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Nthambeleni Logistics is a trusted, proudly South African transport and logistics partner, 
            operating a modern fleet of approximately 20 trucks that service clients nationwide and across the SADC region.
          </p>
        </div>

        <div className={`grid md:grid-cols-2 gap-12 items-center mb-16 transition-all duration-1000 delay-300 ${
          isVisible ? 'animate-in fade-in-0 slide-in-from-left-8' : 'opacity-0'
        }`}>
          <div>
            <p className="text-lg leading-relaxed mb-6 hover:text-primary/80 transition-colors duration-300">
              We were founded to meet a growing need for reliable, safe, and customer-focused freight solutions 
              in a fast-changing economy.
            </p>
            <p className="text-lg leading-relaxed mb-6 hover:text-primary/80 transition-colors duration-300">
              For us, logistics is not simply about moving cargo — it's about building trust, strengthening 
              supply chains, and delivering value at every stage of the journey.
            </p>
            <p className="text-lg leading-relaxed text-primary font-semibold animate-pulse">
              From small-scale suppliers to large corporations, our clients choose us because we consistently 
              Deliver Beyond Expectations.
            </p>
          </div>
          <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-8 rounded-2xl transform hover:scale-105 transition-all duration-500 shadow-lg hover:shadow-xl">
            <h3 className="text-2xl font-bold mb-6">Industries We Serve</h3>
            <div className="grid grid-cols-2 gap-4">
              {["Mining", "Retail", "Agriculture", "Construction", "Manufacturing"].map((industry) => (
                <div key={industry} className="bg-white p-4 rounded-lg shadow-sm text-center font-medium transform hover:scale-105 hover:shadow-md transition-all duration-300 cursor-pointer">
                  {industry}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={`grid md:grid-cols-3 gap-8 transition-all duration-1000 delay-500 ${
          isVisible ? 'animate-in fade-in-0 slide-in-from-bottom-8' : 'opacity-0'
        }`}>
          <Card className="border-primary/20 hover:shadow-xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 group">
            <CardContent className="p-8 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <Target className="h-12 w-12 text-primary mx-auto mb-4 group-hover:animate-spin transition-all duration-500 relative z-10" />
              <h3 className="text-xl font-bold mb-4 relative z-10">Our Mission</h3>
              <p className="text-muted-foreground relative z-10">
                To provide efficient, safe, and customer-focused transport solutions that help our clients 
                succeed while upholding the highest industry standards.
              </p>
            </CardContent>
          </Card>

          <Card className="border-secondary/20 hover:shadow-xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 group">
            <CardContent className="p-8 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <Eye className="h-12 w-12 text-secondary mx-auto mb-4 group-hover:animate-pulse transition-all duration-500 relative z-10" />
              <h3 className="text-xl font-bold mb-4 relative z-10">Our Vision</h3>
              <p className="text-muted-foreground relative z-10">
                To be a leading logistics partner in South Africa and the SADC region, known for 
                reliability, innovation, and client satisfaction.
              </p>
            </CardContent>
          </Card>

          <Card className="border-accent/20 hover:shadow-xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 group">
            <CardContent className="p-8 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <Heart className="h-12 w-12 text-accent mx-auto mb-4 group-hover:animate-bounce transition-all duration-500 relative z-10" />
              <h3 className="text-xl font-bold mb-4 relative z-10">Our Values</h3>
              <div className="text-left space-y-2 text-sm relative z-10">
                <div className="hover:text-primary transition-colors duration-300"><strong>Reliability</strong> – On time, every time</div>
                <div className="hover:text-primary transition-colors duration-300"><strong>Integrity</strong> – Honest and transparent</div>
                <div className="hover:text-primary transition-colors duration-300"><strong>Safety</strong> – Highest standards</div>
                <div className="hover:text-primary transition-colors duration-300"><strong>Excellence</strong> – Exceeding expectations</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;