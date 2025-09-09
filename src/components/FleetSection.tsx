import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Wrench, Shield, Clock } from "lucide-react";
const fleetImage = "/lovable-uploads/ab7d0d06-1439-4025-a701-fd09a0464625.png";

const FleetSection = () => {
  return (
    <section id="fleet" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Fleet</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our modern fleet of trucks is maintained to the highest standards, ensuring efficiency, safety, and reliability.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src={fleetImage} 
              alt="Nthambeleni Logistics Fleet" 
              className="rounded-2xl shadow-2xl"
            />
          </div>
          
          <div>
            <h3 className="text-3xl font-bold mb-8">Fleet Excellence Standards</h3>
            
            <div className="grid gap-6">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Wrench className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Regular Maintenance</h4>
                  <p className="text-muted-foreground">
                    Comprehensive maintenance schedules ensure peak performance and minimize downtime.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-secondary/10 p-3 rounded-full">
                  <Shield className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Safety First</h4>
                  <p className="text-muted-foreground">
                    Every vehicle equipped with advanced safety systems and operated by certified drivers.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-accent/10 p-3 rounded-full">
                  <Clock className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Real-time Tracking</h4>
                  <p className="text-muted-foreground">
                    GPS-enabled fleet management for optimal routing and delivery transparency.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Quality Assurance</h4>
                  <p className="text-muted-foreground">
                    Regular inspections and certifications maintain our high operational standards.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-4 gap-8">
          <Card className="text-center border-primary/20">
            <CardContent className="p-8">
              <div className="text-4xl font-bold text-primary mb-2">20+</div>
              <div className="text-muted-foreground">Modern Trucks</div>
            </CardContent>
          </Card>
          
          <Card className="text-center border-secondary/20">
            <CardContent className="p-8">
              <div className="text-4xl font-bold text-secondary mb-2">98%</div>
              <div className="text-muted-foreground">Fleet Availability</div>
            </CardContent>
          </Card>
          
          <Card className="text-center border-accent/20">
            <CardContent className="p-8">
              <div className="text-4xl font-bold text-accent mb-2">24/7</div>
              <div className="text-muted-foreground">Operations</div>
            </CardContent>
          </Card>
          
          <Card className="text-center border-primary/20">
            <CardContent className="p-8">
              <div className="text-4xl font-bold text-primary mb-2">SADC</div>
              <div className="text-muted-foreground">Coverage</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FleetSection;