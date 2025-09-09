import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Heart } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">About Nthambeleni Logistics</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Nthambeleni Logistics is a trusted, proudly South African transport and logistics partner, 
            operating a modern fleet of approximately 20 trucks that service clients nationwide and across the SADC region.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <p className="text-lg leading-relaxed mb-6">
              We were founded to meet a growing need for reliable, safe, and customer-focused freight solutions 
              in a fast-changing economy.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              For us, logistics is not simply about moving cargo — it's about building trust, strengthening 
              supply chains, and delivering value at every stage of the journey.
            </p>
            <p className="text-lg leading-relaxed text-primary font-semibold">
              From small-scale suppliers to large corporations, our clients choose us because we consistently 
              Deliver Beyond Expectations.
            </p>
          </div>
          <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-6">Industries We Serve</h3>
            <div className="grid grid-cols-2 gap-4">
              {["Mining", "Retail", "Agriculture", "Construction", "Manufacturing"].map((industry) => (
                <div key={industry} className="bg-white p-4 rounded-lg shadow-sm text-center font-medium">
                  {industry}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="border-primary/20 hover:shadow-lg transition-all duration-300">
            <CardContent className="p-8 text-center">
              <Target className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">Our Mission</h3>
              <p className="text-muted-foreground">
                To provide efficient, safe, and customer-focused transport solutions that help our clients 
                succeed while upholding the highest industry standards.
              </p>
            </CardContent>
          </Card>

          <Card className="border-secondary/20 hover:shadow-lg transition-all duration-300">
            <CardContent className="p-8 text-center">
              <Eye className="h-12 w-12 text-secondary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">Our Vision</h3>
              <p className="text-muted-foreground">
                To be a leading logistics partner in South Africa and the SADC region, known for 
                reliability, innovation, and client satisfaction.
              </p>
            </CardContent>
          </Card>

          <Card className="border-accent/20 hover:shadow-lg transition-all duration-300">
            <CardContent className="p-8 text-center">
              <Heart className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">Our Values</h3>
              <div className="text-left space-y-2 text-sm">
                <div><strong>Reliability</strong> – On time, every time</div>
                <div><strong>Integrity</strong> – Honest and transparent</div>
                <div><strong>Safety</strong> – Highest standards</div>
                <div><strong>Excellence</strong> – Exceeding expectations</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;