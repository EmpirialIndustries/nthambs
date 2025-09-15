import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, MapPin, User, Send, Facebook, Twitter, Instagram } from "lucide-react";
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
    console.log('Form submitted:', formData);
  };

  // WhatsApp icon component (since it's not in lucide-react by default)
  const WhatsAppIcon = () => (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.63"/>
    </svg>
  );

  const services = [
    "Tippers",
    "Project Cargo",
    "Abnormal Loads", 
    "Road Freight",
    "Bulk Transport",
    "General Logistics",
    "Mining Equipment",
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

  const socialLinks = [
    {
      name: "Facebook",
      icon: Facebook,
      url: "https://facebook.com/nthambelenilogistics",
      color: "hover:text-blue-600"
    },
    {
      name: "Twitter",
      icon: Twitter,
      url: "https://twitter.com/nthambeleni",
      color: "hover:text-sky-500"
    },
    {
      name: "WhatsApp",
      icon: WhatsAppIcon,
      url: "https://wa.me/27722195751",
      color: "hover:text-green-500"
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://instagram.com/nthambelenilogistics",
      color: "hover:text-pink-600"
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

        {/* Contact Information and Team - New Layout */}
        <div className={`grid lg:grid-cols-3 gap-12 transition-all duration-1000 delay-300 ${
          isVisible ? 'animate-in fade-in-0 slide-in-from-bottom-8' : 'opacity-0'
        }`}>
          
          {/* Get in Touch Section */}
          <div className="lg:col-span-1">
            <h3 className="text-3xl font-bold mb-8 text-center lg:text-left">Get in Touch</h3>
            
            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start space-x-4 group hover:bg-white/50 p-4 rounded-xl transition-all duration-300">
                <div className="bg-primary/10 p-3 rounded-full group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300 flex-shrink-0">
                  <MapPin className="h-6 w-6 text-primary group-hover:animate-bounce" />
                </div>
                <div>
                  <h4 className="font-semibold group-hover:text-primary transition-colors duration-300 mb-2">Address</h4>
                  <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300 text-sm leading-relaxed">
                    Letaba Building<br />
                    Riverside Office Park<br />
                    Lenchen South, Centurion
                  </p>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-gradient-to-br from-primary/5 to-secondary/5 p-6 rounded-xl">
                <h4 className="font-semibold mb-4 text-center">Follow Us</h4>
                <div className="flex justify-center space-x-4">
              {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`bg-white/80 hover:bg-white p-3 rounded-full shadow-md hover:shadow-lg transform hover:scale-110 transition-all duration-300 ${social.color} group`}
                      aria-label={`Follow us on ${social.name}`}
                    >
                      <social.icon className="h-5 w-5 group-hover:animate-pulse" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Our Team Section */}
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-bold mb-8 text-center lg:text-left">Our Team</h3>
            
            <div className="grid md:grid-cols-1 gap-6">
              {contacts.map((contact, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all duration-500 transform hover:scale-[1.02] border-primary/20">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      {/* Profile Icon */}
                      <div className={`bg-${contact.color}/10 p-4 rounded-full group-hover:scale-110 transition-all duration-300 flex-shrink-0`}>
                        <contact.icon className={`h-8 w-8 text-${contact.color} group-hover:animate-bounce`} />
                      </div>
                      
                      {/* Contact Info */}
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                          <div>
                            <h4 className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
                              {contact.name}
                            </h4>
                            <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300 mb-3">
                              {contact.role}
                            </p>
                          </div>
                        </div>
                        
                        {/* Contact Details */}
                        <div className="grid sm:grid-cols-2 gap-3">
                          <div className="flex items-center space-x-3 hover:text-primary transition-colors duration-300 cursor-pointer group/contact">
                            <Phone className="h-4 w-4 text-muted-foreground group-hover/contact:animate-pulse flex-shrink-0" />
                            <span className="text-sm font-medium">{contact.phone}</span>
                          </div>
                          <div className="flex items-center space-x-3 hover:text-primary transition-colors duration-300 cursor-pointer group/contact">
                            <Mail className="h-4 w-4 text-muted-foreground group-hover/contact:animate-pulse flex-shrink-0" />
                            <span className="text-sm font-medium truncate">{contact.email}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
