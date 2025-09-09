import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, User } from "lucide-react";

const ContactSection = () => {
  const contacts = [
    {
      role: "Director",
      name: "Mukhethwa Nthambeleni",
      phone: "072 219 5751",
      email: "mbm@nthambs.co.za",
      icon: User,
      color: "primary"
    },
    {
      role: "General Manager",
      name: "SG Mnguni",
      phone: "061 520 3976",
      email: "gm@nthambs.co.za",
      icon: User,
      color: "secondary"
    },
    {
      role: "Operations Manager",
      name: "Mr H Mashele",
      phone: "061 530 2419",
      email: "ops@nthambs.co.za",
      icon: User,
      color: "accent"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Partner with us today for reliable, innovative logistics solutions. Our team is ready to discuss your transport needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <h3 className="text-3xl font-bold mb-8">Get in Touch</h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-center space-x-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold">Address</h4>
                  <p className="text-muted-foreground">
                    Letaba Building, Riverside Office Park<br />
                    Lenchen South, Centurion
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-secondary/10 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h4 className="font-semibold">Website</h4>
                  <p className="text-muted-foreground">www.nthambs.co.za</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="flex-1">
                Request a Quote
              </Button>
              <Button variant="outline" size="lg" className="flex-1">
                Get in Touch
              </Button>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6">Our Team</h3>
            {contacts.map((contact, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center space-x-3">
                    <div className={`bg-${contact.color}/10 p-2 rounded-full`}>
                      <contact.icon className={`h-5 w-5 text-${contact.color}`} />
                    </div>
                    <div>
                      <div className="text-lg">{contact.name}</div>
                      <div className="text-sm text-muted-foreground font-normal">{contact.role}</div>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3">
                      <Phone className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">{contact.phone}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">{contact.email}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;