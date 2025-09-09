import { Truck } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-2xl" />
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 relative z-10">
          <div className="md:col-span-2 animate-in fade-in-0 slide-in-from-left-4 duration-1000">
            <div className="flex items-center space-x-3 mb-4 transform hover:scale-105 transition-all duration-300">
              <img 
                src="/lovable-uploads/ca84ba09-4dc8-455b-b849-dcd68d8e5a23.png" 
                alt="Nthambeleni Logistics" 
                className="h-8 w-auto brightness-0 invert hover:animate-pulse"
              />
            </div>
            <p className="text-white/80 mb-4 max-w-md hover:text-white transition-colors duration-300">
              Trusted South African logistics partner, delivering safe and reliable transport solutions 
              nationwide and across the SADC region.
            </p>
            <div className="text-sm text-white/60 hover:text-white/80 transition-colors duration-300">
              © 2024 Nthambeleni Logistics (Pty) Ltd. All rights reserved.
            </div>
          </div>

          <div className="animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-200">
            <h3 className="text-lg font-semibold mb-4 hover:text-accent transition-colors duration-300">Services</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li className="hover:text-white hover:translate-x-2 transition-all duration-300 cursor-pointer">Tippers</li>
              <li className="hover:text-white hover:translate-x-2 transition-all duration-300 cursor-pointer">Project Cargo</li>
              <li className="hover:text-white hover:translate-x-2 transition-all duration-300 cursor-pointer">Abnormal Loads</li>
              <li className="hover:text-white hover:translate-x-2 transition-all duration-300 cursor-pointer">Road Freight</li>
              <li className="hover:text-white hover:translate-x-2 transition-all duration-300 cursor-pointer">Bulk Transport</li>
            </ul>
          </div>

          <div className="animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-300">
            <h3 className="text-lg font-semibold mb-4 hover:text-accent transition-colors duration-300">Contact</h3>
            <div className="space-y-2 text-sm text-white/80">
              <div className="hover:text-white transition-colors duration-300 cursor-pointer">072 219 5751</div>
              <div className="hover:text-white transition-colors duration-300 cursor-pointer">mbm@nthambs.co.za</div>
              <div className="hover:text-white transition-colors duration-300 cursor-pointer">www.nthambs.co.za</div>
              <div className="mt-4 hover:text-white transition-colors duration-300">
                Letaba Building<br />
                Riverside Office Park<br />
                Lenchen South, Centurion
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm text-white/60 relative z-10 animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-500">
          <p className="hover:text-white transition-colors duration-300 cursor-pointer">Delivering Beyond Expectations - Your Trusted SADC Logistics Partner</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;