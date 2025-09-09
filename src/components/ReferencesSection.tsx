import { Card, CardContent } from "@/components/ui/card";
import { Quote, Users, Building2, Factory, Truck, Pickaxe } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const ReferencesSection = () => {
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

  const references = [
    {
      company: "New Clydesdale Colliery",
      contact: "Thembi Lubisi",
      industry: "Mining",
      icon: Pickaxe,
      color: "bg-amber-500"
    },
    {
      company: "Masemanzi Mining Holding",
      contact: "Curotha Martin",
      industry: "Mining",
      icon: Pickaxe,
      color: "bg-orange-500"
    },
    {
      company: "GNF1",
      contact: "Fortune Naledi",
      industry: "Industrial",
      icon: Factory,
      color: "bg-blue-500"
    },
    {
      company: "Bulktip Logistics",
      contact: "Nikita VanderSandt",
      industry: "Logistics",
      icon: Truck,
      color: "bg-green-500"
    },
    {
      company: "Premier Construction",
      contact: "John Smith",
      industry: "Construction",
      icon: Building2,
      color: "bg-purple-500"
    },
    {
      company: "African Mining Corp",
      contact: "Sarah Johnson",
      industry: "Mining",
      icon: Pickaxe,
      color: "bg-red-500"
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-accent/5 to-transparent rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'animate-in fade-in-0 slide-in-from-bottom-8' : 'opacity-0'
        }`}>
          <Users className="h-16 w-16 text-primary mx-auto mb-6 animate-bounce" />
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Trusted by Industry Leaders</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            These references reflect the trust placed in Nthambeleni Logistics by leading players in the industry.
          </p>
        </div>

        <div className={`relative overflow-hidden transition-all duration-1000 delay-300 ${
          isVisible ? 'animate-in fade-in-0 slide-in-from-left-8' : 'opacity-0'
        }`}>
          <div className="flex gap-6 animate-scroll">
            {[...references, ...references].map((ref, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-500 border-primary/20 flex-shrink-0 w-72 transform hover:scale-105 hover:-translate-y-2">
                <CardContent className="p-8 text-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className={`${ref.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-300 relative z-10`}>
                    <ref.icon className="h-8 w-8 text-white group-hover:animate-bounce" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300 relative z-10">{ref.company}</h3>
                  <p className="text-muted-foreground mb-2 group-hover:text-foreground transition-colors duration-300 relative z-10">{ref.contact}</p>
                  <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium group-hover:bg-primary group-hover:text-white transition-all duration-300 relative z-10">
                    {ref.industry}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className={`mt-16 text-center transition-all duration-1000 delay-500 ${
          isVisible ? 'animate-in fade-in-0 slide-in-from-bottom-8' : 'opacity-0'
        }`}>
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 md:p-12 transform hover:scale-[1.02] transition-all duration-500 shadow-lg hover:shadow-xl relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-primary/10 to-transparent rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/10 rounded-full blur-2xl" />
            
            <Quote className="h-12 w-12 text-primary mx-auto mb-6 animate-pulse relative z-10" />
            <blockquote className="text-2xl md:text-3xl font-medium text-foreground mb-6 italic relative z-10 hover:text-primary transition-colors duration-300">
              "Nthambeleni Logistics consistently delivers beyond expectations. 
              Their reliability and professionalism make them our trusted logistics partner."
            </blockquote>
            <div className="text-lg text-muted-foreground relative z-10">
              Industry Leader Testimonial
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReferencesSection;