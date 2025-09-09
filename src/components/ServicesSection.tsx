import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import tippersImage from "@/assets/tippers-service.jpg";
import projectCargoImage from "@/assets/project-cargo-service.jpg";
import abnormalLoadsImage from "@/assets/abnormal-loads-service.jpg";
import roadFreightImage from "@/assets/road-freight-service.jpg";
import bulkTransportImage from "@/assets/bulk-transport-service.jpg";
const miningImage = "/lovable-uploads/4554c16f-639b-4a3e-b9b3-c4a42c917259.png";

const ServicesSection = () => {
  const services = [
    {
      image: tippersImage,
      title: "Tippers",
      description: "Transport of minerals, mining commodities, grains, and other bulk materials.",
      gradient: "from-primary/20 to-primary/5"
    },
    {
      image: projectCargoImage,
      title: "Project Cargo",
      description: "Specialised logistics for large, complex, or high-value shipments.",
      gradient: "from-secondary/20 to-secondary/5"
    },
    {
      image: abnormalLoadsImage,
      title: "Abnormal Loads",
      description: "Expert handling of oversized cargo, including route planning, permits, and escorts.",
      gradient: "from-accent/20 to-accent/5"
    },
    {
      image: roadFreightImage,
      title: "Road Freight",
      description: "Reliable, efficient local and cross-border transport with skilled drivers.",
      gradient: "from-primary/20 to-accent/5"
    },
    {
      image: bulkTransportImage,
      title: "Bulk Transport",
      description: "Cost-effective movement of high-volume goods with optimised scheduling.",
      gradient: "from-secondary/20 to-primary/5"
    }
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive logistics solutions tailored to meet your specific transport needs across South Africa and the SADC region.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${service.gradient}`} />
              </div>
              <CardHeader className="pb-4">
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-6 pt-0">
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-r from-secondary to-primary rounded-3xl p-8 md:p-12 text-white">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">Specialized Cargo Handling</h3>
              <p className="text-lg mb-6 opacity-90">
                From mining operations to construction sites, we handle your most demanding cargo requirements 
                with precision and care.
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>• Mining Equipment</div>
                <div>• Construction Materials</div>
                <div>• Agricultural Products</div>
                <div>• Industrial Machinery</div>
              </div>
            </div>
            <div className="relative">
              <img 
                src={miningImage} 
                alt="Mining cargo operations" 
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;