import { Card, CardContent } from "@/components/ui/card";
import { Quote, Users } from "lucide-react";

const ReferencesSection = () => {
  const references = [
    {
      company: "New Clydesdale Colliery",
      contact: "Thembi Lubisi",
      industry: "Mining"
    },
    {
      company: "Masemanzi Mining Holding",
      contact: "Curotha Martin",
      industry: "Mining"
    },
    {
      company: "GNF1",
      contact: "Fortune Naledi",
      industry: "Industrial"
    },
    {
      company: "Bulktip Logistics",
      contact: "Nikita VanderSandt",
      industry: "Logistics"
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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {references.map((ref, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-primary/20">
              <CardContent className="p-8 text-center">
                <Quote className="h-8 w-8 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">{ref.company}</h3>
                <p className="text-muted-foreground mb-2">{ref.contact}</p>
                <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                  {ref.industry}
                </div>
              </CardContent>
            </Card>
          ))}
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