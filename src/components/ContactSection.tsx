import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, MapPin, User, Send } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
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

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You can add email functionality or API calls here
  };

  const services = [
    "Tippers",
    "Project Cargo",
    "Abnormal Loads", 
    "Road Freight",
    "Bulk Transport",
    "General Logistics",
    "Other"
  ];

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
    <section id="contact" ref={sectionRef} className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-primary/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-secondary/10 to-transparent rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'animate-in fade-in-0 slide-in-from-bottom-8' : 'opacity-0'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Contact Us</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Partner with us today for reliable, innovative logistics solutions. Our team is ready to discuss your transport needs.
          </p>
        </div>

        {/* Quote Form Section */}
        <div className={`mb-16 transition-all duration-1000 delay-200 ${
          isVisible ? 'animate-in fade-in-0 slide-in-from-bottom-8' : 'opacity-0'
        }`}>
          <Card className="max-w-4xl mx-auto hover:shadow-xl transition-all duration-500 border-primary/20">
            <CardHeader className="text-center pb-6">
              <CardTitle className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Request a Quote
              </CardTitle>
              <p className="text-muted-foreground">Fill out the form below and we'll get back to you within 24 hours</p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm font-medium">Full Name *</Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      required
                      className="transition-all duration-300 focus:scale-105"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email address"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      required
                      className="transition-all duration-300 focus:scale-105"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-sm font-medium">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="Enter your phone number"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="transition-all duration-300 focus:scale-105"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="service" className="text-sm font-medium">Service Required *</Label>
                    <Select value={formData.service} onValueChange={(value) => handleInputChange('service', value)}>
                      <SelectTrigger className="transition-all duration-300 focus:scale-105">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map((service) => (
                          <SelectItem key={service} value={service.toLowerCase().replace(/\s+/g, '-')}>
                            {service}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-sm font-medium">Message *</Label>
                  <Textarea
                    id="message"
                    placeholder="Please provide details about your logistics requirements..."
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    required
                    rows={5}
                    className="transition-all duration-300 focus:scale-105 resize-none"
                  />
                </div>

                <div className="flex justify-center pt-4">
                  <Button 
                    type="submit" 
                    variant="hero" 
                    size="lg" 
                    className="px-12 py-3 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    <Send className="h-4 w-4 mr-2" />
                    Send Quote Request
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>

        <div className={`grid lg:grid-cols-2 gap-16 items-start transition-all duration-1000 delay-300 ${
          isVisible ? 'animate-in fade-in-0 slide-in-from-left-8' : 'opacity-0'
        }`}>
          <div>
            <h3 className="text-3xl font-bold mb-8 animate-in fade-in-0 slide-in-from-left-4 duration-1000">Get in Touch</h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-center space-x-4 group hover:bg-white/50 p-4 rounded-lg transition-all duration-300 animate-in fade-in-0 slide-in-from-left-4 duration-1000 delay-200">
                <div className="bg-primary/10 p-3 rounded-full group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <MapPin className="h-6 w-6 text-primary group-hover:animate-bounce" />
                </div>
                <div>
                  <h4 className="font-semibold group-hover:text-primary transition-colors duration-300">Address</h4>
                  <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                    Letaba Building, Riverside Office Park<br />
                    Lenchen South, Centurion
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4 group hover:bg-white/50 p-4 rounded-lg transition-all duration-300 animate-in fade-in-0 slide-in-from-left-4 duration-1000 delay-300">
                <div className="bg-secondary/10 p-3 rounded-full group-hover:bg-secondary/20 group-hover:scale-110 transition-all duration-300">
                  <Mail className="h-6 w-6 text-secondary group-hover:animate-pulse" />
                </div>
                <div>
                  <h4 className="font-semibold group-hover:text-secondary transition-colors duration-300">Website</h4>
                  <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">www.nthambs.co.za</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in-0 slide-in-from-left-4 duration-1000 delay-500">
              <Button variant="hero" size="lg" className="flex-1 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                Request a Quote
              </Button>
              <Button variant="outline" size="lg" className="flex-1 transform hover:scale-105 transition-all duration-300 hover:shadow-lg">
                Get in Touch
              </Button>
            </div>
          </div>

          <div className={`space-y-6 transition-all duration-1000 delay-500 ${
            isVisible ? 'animate-in fade-in-0 slide-in-from-right-8' : 'opacity-0'
          }`}>
            <h3 className="text-2xl font-bold mb-6 animate-in fade-in-0 slide-in-from-right-4 duration-1000">Our Team</h3>
            {contacts.map((contact, index) => (
              <Card key={index} className={`hover:shadow-xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 animate-in fade-in-0 slide-in-from-right-4 duration-1000 delay-${(index + 1) * 200}`}>
                <CardHeader className="pb-4 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <CardTitle className="flex items-center space-x-3 relative z-10">
                    <div className={`bg-${contact.color}/10 p-2 rounded-full hover:scale-110 transition-all duration-300`}>
                      <contact.icon className={`h-5 w-5 text-${contact.color} hover:animate-bounce`} />
                    </div>
                    <div>
                      <div className="text-lg hover:text-primary transition-colors duration-300">{contact.name}</div>
                      <div className="text-sm text-muted-foreground font-normal hover:text-foreground transition-colors duration-300">{contact.role}</div>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0 relative z-10">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3 hover:text-primary transition-colors duration-300 cursor-pointer">
                      <Phone className="h-4 w-4 text-muted-foreground hover:animate-pulse" />
                      <span className="text-sm">{contact.phone}</span>
                    </div>
                    <div className="flex items-center space-x-3 hover:text-primary transition-colors duration-300 cursor-pointer">
                      <Mail className="h-4 w-4 text-muted-foreground hover:animate-pulse" />
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
