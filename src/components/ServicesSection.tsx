import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const miningImage = "/lovable-uploads/4554c16f-639b-4a3e-b9b3-c4a42c917259.png";

const ServicesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState<{[key: number]: number}>({});
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

  const services = [
    {
      images: [
        "/Gallary/Tippers.jpg",
        "/Gallary/Tippers2.jpg",
        "/Gallary/Tippers3.jpg"
      ],
      title: "Tippers",
      description: "Transport of minerals, mining commodities, grains, and other bulk materials.",
      gradient: "from-primary/20 to-primary/5"
    },
    {
      images: [
        "/Gallary/ProjectCargo.jpg",
        "/Gallary/ProjectCargo2.jpg",
        "/Gallary/ProjectCargo3.jpg"
      ],
      title: "Project Cargo",
      description: "Specialised logistics for large, complex, or high-value shipments.",
      gradient: "from-secondary/20 to-secondary/5"
    },
    {
      images: [
        "/Gallary/Abnormalloads.jpg",
        "/Gallary/Abnormalloads2.jpg",
        "/Gallary/Abnormalloads3.jpg"
      ],
      title: "Abnormal Loads",
      description: "Expert handling of oversized cargo, including route planning, permits, and escorts.",
      gradient: "from-accent/20 to-accent/5"
    },
    {
      images: [
        "/Gallary/RoadFreight.jpg",
        "/Gallary/RoadFreight2.jpg",
        "/Gallary/RoadFreight3.jpg"
      ],
      title: "Road Freight",
      description: "Reliable, efficient local and cross-border transport with skilled drivers.",
      gradient: "from-primary/20 to-accent/5"
    },
    {
      images: [
        "/Gallary/BulkTransport.jpg",
        "/Gallary/BulkTransport2.jpg",
        "/Gallary/BulkTransport3.jpg"
      ],
      title: "Bulk Transport",
      description: "Cost-effective movement of high-volume goods with optimised scheduling.",
      gradient: "from-secondary/20 to-primary/5"
    }
  ];

  const handlePrevImage = (serviceIndex: number) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [serviceIndex]: prev[serviceIndex] === 0 ? services[serviceIndex].images.length - 1 : (prev[serviceIndex] || 0) - 1
    }));
  };

  const handleNextImage = (serviceIndex: number) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [serviceIndex]: ((prev[serviceIndex] || 0) + 1) % services[serviceIndex].images.length
    }));
  };

  return (
    <section id="services" ref={sectionRef} className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'animate-in fade-in-0 slide-in-from-bottom-8' : 'opacity-0'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive logistics solutions tailored to meet your specific transport needs across South Africa and the SADC region.
          </p>
        </div>

        <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 transition-all duration-1000 delay-300 ${
          isVisible ? 'animate-in fade-in-0 slide-in-from-bottom-8' : 'opacity-0'
        }`}>
          {services.map((service, index) => (
            <Card key={index} className={`group hover:shadow-xl transition-all duration-500 border-0 overflow-hidden transform hover:scale-105 hover:-translate-y-2 ${
              isVisible ? `animate-in fade-in-0 slide-in-from-bottom-4 delay-${(index + 1) * 100}` : 'opacity-0'
            }`}>
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.images[currentImageIndex[index] || 0]} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${service.gradient} group-hover:opacity-80 transition-opacity duration-300`} />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />
                
                {/* Navigation Arrows */}
                <button 
                  onClick={() => handlePrevImage(index)}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform hover:scale-110 backdrop-blur-sm"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                
                <button 
                  onClick={() => handleNextImage(index)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform hover:scale-110 backdrop-blur-sm"
                  aria-label="Next image"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>

                {/* Image indicators */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-1 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  {service.images.map((_, imgIndex) => (
                    <button
                      key={imgIndex}
                      onClick={() => setCurrentImageIndex(prev => ({ ...prev, [index]: imgIndex }))}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        (currentImageIndex[index] || 0) === imgIndex 
                          ? 'bg-white' 
                          : 'bg-white/50 hover:bg-white/75'
                      }`}
                      aria-label={`Go to image ${imgIndex + 1}`}
                    />
                  ))}
                </div>
              </div>
              <CardHeader className="pb-4">
                <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-6 pt-0">
                <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className={`bg-gradient-to-r from-secondary to-primary rounded-3xl p-8 md:p-12 text-white transform hover:scale-[1.02] transition-all duration-500 shadow-2xl hover:shadow-3xl relative overflow-hidden ${
          isVisible ? 'animate-in fade-in-0 slide-in-from-bottom-8 delay-700' : 'opacity-0'
        }`}>
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/20 rounded-full blur-2xl" />
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-6 animate-in fade-in-0 slide-in-from-left-4 duration-1000">Specialized Cargo Handling</h3>
              <p className="text-lg mb-6 opacity-90 animate-in fade-in-0 slide-in-from-left-4 duration-1000 delay-200">
                From mining operations to construction sites, we handle your most demanding cargo requirements 
                with precision and care.
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm animate-in fade-in-0 slide-in-from-left-4 duration-1000 delay-400">
                <div className="hover:text-accent transition-colors duration-300 cursor-pointer">• Mining Equipment</div>
                <div className="hover:text-accent transition-colors duration-300 cursor-pointer">• Construction Materials</div>
                <div className="hover:text-accent transition-colors duration-300 cursor-pointer">• Agricultural Products</div>
                <div className="hover:text-accent transition-colors duration-300 cursor-pointer">• Industrial Machinery</div>
              </div>
            </div>
            <div className="relative z-10 animate-in fade-in-0 slide-in-from-right-4 duration-1000 delay-300">
              <img 
                src={miningImage} 
                alt="Mining cargo operations" 
                className="rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
