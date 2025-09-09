import { Card, CardContent } from "@/components/ui/card";
import { Quote, Users, Building2, Factory, Truck, Pickaxe } from "lucide-react";

const ReferencesSection = () => {
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
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Users className="h-16 w-16 text-primary mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Trusted by Industry Leaders</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            These references reflect the trust placed in Nthambeleni Logistics by leading players in the industry.
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div className="flex gap-6 animate-scroll">
            {[...references, ...references].map((ref, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-primary/20 flex-shrink-0 w-72">
                <CardContent className="p-8 text-center">
                  <div className={`${ref.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <ref.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{ref.company}</h3>
                  <p className="text-muted-foreground mb-2">{ref.contact}</p>
                  <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                    {ref.industry}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 md:p-12">
            <Quote className="h-12 w-12 text-primary mx-auto mb-6" />
            <blockquote className="text-2xl md:text-3xl font-medium text-foreground mb-6 italic">
              "Nthambeleni Logistics consistently delivers beyond expectations. 
              Their reliability and professionalism make them our trusted logistics partner."
            </blockquote>
            <div className="text-lg text-muted-foreground">
              Industry Leader Testimonial
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReferencesSection;