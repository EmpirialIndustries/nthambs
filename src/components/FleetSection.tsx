import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Wrench, Shield, Clock } from "lucide-react";
import { useEffect, useRef, useState } from "react";
const fleetImage = "/lovable-uploads/ab7d0d06-1439-4025-a701-fd09a0464625.png";

const FleetSection = () => {
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
    <section id="fleet" ref={sectionRef} className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-secondary/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-primary/10 to-transparent rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'animate-in fade-in-0 slide-in-from-bottom-8' : 'opacity-0'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Our Fleet</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our modern fleet of trucks is maintained to the highest standards, ensuring efficiency, safety, and reliability.
          </p>
        </div>

        <div className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-1000 delay-300 ${
          isVisible ? 'animate-in fade-in-0 slide-in-from-left-8' : 'opacity-0'
        }`}>
          <div className="transform hover:scale-105 transition-all duration-500">
            <img 
              src={fleetImage} 
              alt="Nthambeleni Logistics Fleet" 
              className="rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-300" />
          </div>
          
          <div>
            <h3 className="text-3xl font-bold mb-8 animate-in fade-in-0 slide-in-from-right-4 duration-1000">Fleet Excellence Standards</h3>
            
            <div className="grid gap-6">
              <div className="flex items-start space-x-4 group hover:bg-white/50 p-4 rounded-lg transition-all duration-300 animate-in fade-in-0 slide-in-from-right-4 duration-1000 delay-200">
                <div className="bg-primary/10 p-3 rounded-full group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <Wrench className="h-6 w-6 text-primary group-hover:animate-spin" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">Regular Maintenance</h4>
                  <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                    Comprehensive maintenance schedules ensure peak performance and minimize downtime.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group hover:bg-white/50 p-4 rounded-lg transition-all duration-300 animate-in fade-in-0 slide-in-from-right-4 duration-1000 delay-300">
                <div className="bg-secondary/10 p-3 rounded-full group-hover:bg-secondary/20 group-hover:scale-110 transition-all duration-300">
                  <Shield className="h-6 w-6 text-secondary group-hover:animate-pulse" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2 group-hover:text-secondary transition-colors duration-300">Safety First</h4>
                  <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                    Every vehicle equipped with advanced safety systems and operated by certified drivers.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group hover:bg-white/50 p-4 rounded-lg transition-all duration-300 animate-in fade-in-0 slide-in-from-right-4 duration-1000 delay-400">
                <div className="bg-accent/10 p-3 rounded-full group-hover:bg-accent/20 group-hover:scale-110 transition-all duration-300">
                  <Clock className="h-6 w-6 text-accent group-hover:animate-spin" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2 group-hover:text-accent transition-colors duration-300">Real-time Tracking</h4>
                  <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                    GPS-enabled fleet management for optimal routing and delivery transparency.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group hover:bg-white/50 p-4 rounded-lg transition-all duration-300 animate-in fade-in-0 slide-in-from-right-4 duration-1000 delay-500">
                <div className="bg-primary/10 p-3 rounded-full group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <CheckCircle className="h-6 w-6 text-primary group-hover:animate-bounce" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">Quality Assurance</h4>
                  <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                    Regular inspections and certifications maintain our high operational standards.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`mt-16 grid md:grid-cols-4 gap-8 transition-all duration-1000 delay-700 ${
          isVisible ? 'animate-in fade-in-0 slide-in-from-bottom-8' : 'opacity-0'
        }`}>
          <Card className="text-center border-primary/20 hover:shadow-xl hover:border-primary/40 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 group">
            <CardContent className="p-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="text-4xl font-bold text-primary mb-2 group-hover:animate-pulse relative z-10">20+</div>
              <div className="text-muted-foreground group-hover:text-primary transition-colors duration-300 relative z-10">Modern Trucks</div>
            </CardContent>
          </Card>
          
          <Card className="text-center border-secondary/20 hover:shadow-xl hover:border-secondary/40 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 group">
            <CardContent className="p-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="text-4xl font-bold text-secondary mb-2 group-hover:animate-pulse relative z-10">98%</div>
              <div className="text-muted-foreground group-hover:text-secondary transition-colors duration-300 relative z-10">Fleet Availability</div>
            </CardContent>
          </Card>
          
          <Card className="text-center border-accent/20 hover:shadow-xl hover:border-accent/40 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 group">
            <CardContent className="p-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="text-4xl font-bold text-accent mb-2 group-hover:animate-pulse relative z-10">24/7</div>
              <div className="text-muted-foreground group-hover:text-accent transition-colors duration-300 relative z-10">Operations</div>
            </CardContent>
          </Card>
          
          <Card className="text-center border-primary/20 hover:shadow-xl hover:border-primary/40 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 group">
            <CardContent className="p-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="text-4xl font-bold text-primary mb-2 group-hover:animate-pulse relative z-10">SADC</div>
              <div className="text-muted-foreground group-hover:text-primary transition-colors duration-300 relative z-10">Coverage</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FleetSection;