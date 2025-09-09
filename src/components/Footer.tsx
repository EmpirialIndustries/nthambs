import { Truck } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/lovable-uploads/ca84ba09-4dc8-455b-b849-dcd68d8e5a23.png" 
                alt="Nthambeleni Logistics" 
                className="h-8 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-white/80 mb-4 max-w-md">
              Trusted South African logistics partner, delivering safe and reliable transport solutions 
              nationwide and across the SADC region.
            </p>
            <div className="text-sm text-white/60">
              © 2024 Nthambeleni Logistics (Pty) Ltd. All rights reserved.
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li>Tippers</li>
              <li>Project Cargo</li>
              <li>Abnormal Loads</li>
              <li>Road Freight</li>
              <li>Bulk Transport</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-sm text-white/80">
              <div>072 219 5751</div>
              <div>mbm@nthambs.co.za</div>
              <div>www.nthambs.co.za</div>
              <div className="mt-4">
                Letaba Building<br />
                Riverside Office Park<br />
                Lenchen South, Centurion
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm text-white/60">
          <p>Delivering Beyond Expectations - Your Trusted SADC Logistics Partner</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;