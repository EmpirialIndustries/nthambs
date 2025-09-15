import { Card, CardContent } from "@/components/ui/card";
import { Quote, Users, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const ReferencesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

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
      image: "/Trusted_By/NewClydesdale.jpg",
      color: "bg-amber-500"
    },
    {
      company: "Masemanzi Mining Holding",
      contact: "Curotha Martin",
      industry: "Mining",
      image: "/Trusted_By/Masemanzi.jpg",
      color: "bg-orange-500"
    },
    {
      company: "GNF1",
      contact: "Fortune Naledi",
      industry: "Industrial",
      image: "/Trusted_By/GNF1.jpg",
      color: "bg-blue-500"
    },
    {
      company: "Bulktip Logistics",
      contact: "Nikita VanderSandt",
      industry: "Logistics",
      image: "/Trusted_By/Bulktip.jpg",
      color: "bg-green-500"
    },
    {
      company: "Premier Construction",
      contact: "John Smith",
      industry: "Construction",
      image: "/Trusted_By/Premier.jpg",
      color: "bg-purple-500"
    },
    {
      company: "African Mining Corp",
      contact: "Sarah Johnson",
      industry: "Mining",
      image: "/Trusted_By/AfricanMining.jpg",
      color: "bg-red-500"
    }
  ];

  const scrollToIndex = (index: number) => {
    if (scrollContainerRef.current) {
      const cardWidth = 288; // 72 * 4 = 288px (w-72)
      const gap = 24; // 6 * 4 = 24px (gap-6)
      const scrollPosition = index * (cardWidth + gap);
      
      scrollContainerRef.current.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
      setCurrentIndex(index);
    }
  };

  const handlePrevious = () => {
    const newIndex = currentIndex > 0 ? currentIndex - 1 : references.length - 1;
    scrollToIndex(newIndex);
  };

  const handleNext = () => {
    const newIndex = currentIndex < references.length - 1 ? currentIndex + 1 : 0;
    scrollToIndex(newIndex);
  };

  return (
    <section ref={sectionRef} className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-accent/5 to-transparent rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'animate-in fade-in-0 slide-in-from-bottom-8' : 'opacity-0'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Trusted by Industry Leaders</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            These references reflect the trust placed in Nthambeleni Logistics by leading players in the industry.
          </p>
        </div>

        <div className={`relative transition-all duration-1000 delay-300 ${
          isVisible ? 'animate-in fade-in-0 slide-in-from-left-8' : 'opacity-0'
        }`}>
          {/* Navigation Arrows */}
          <button
            onClick={handlePrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 transition-all duration-300 hover:scale-110 border border-primary/20 group"
            aria-label="Previous reference"
          >
            <ChevronLeft className="h-6 w-6 text-primary group-hover:text-primary/80" />
          </button>
          
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 transition-all duration-300 hover:scale-110 border border-primary/20 group"
            aria-label="Next reference"
          >
            <ChevronRight className="h-6 w-6 text-primary group-hover:text-primary/80" />
          </button>

          {/* Scrollable container */}
          <div 
            ref={scrollContainerRef}
            className="overflow-x-auto scrollbar-hide px-12"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <div className="flex gap-6 pb-4">
              {references.map((ref, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all duration-500 border-primary/20 flex-shrink-0 w-72 transform hover:scale-105 hover:-translate-y-2">
                  <CardContent className="p-8 text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Image container with background color fallback */}
                    <div className={`${ref.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-300 relative z-10 overflow-hidden`}>
                      <img 
                        src={ref.image} 
                        alt={`${ref.company} logo`}
                        className="w-full h-full object-cover group-hover:scale-110 transition-all duration-300"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />
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

          {/* Pagination dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {references.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentIndex === index 
                    ? 'bg-primary scale-110' 
                    : 'bg-primary/30 hover:bg-primary/50'
                }`}
                aria-label={`Go to reference ${index + 1}`}
              />
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

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default ReferencesSection;
