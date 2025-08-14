import { ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function Footer() {
  // Get the current year
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1240892/pexels-photo-1240892.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      />
      <div className="absolute inset-0 bg-black/70 dark:bg-black/80" />
      
      <div className="container relative z-10 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <ShoppingBag className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-yellow-400">YISE Brand</span>
            </div>
            <p className="text-sm text-white/80">
              Your trusted partner for premium footwear worldwide. Step into excellence with every purchase.
            </p>
            <div className="flex space-x-4">
              <Button size="sm" variant="outline">Facebook</Button>
              <Button size="sm" variant="outline">Twitter</Button>
              <Button size="sm" variant="outline">Instagram</Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="text-white/70 hover:text-yellow-400">Home</a></li>
              <li><a href="#products" className="text-white/70 hover:text-yellow-400">Products</a></li>
              <li><a href="#brands" className="text-white/70 hover:text-yellow-400">Brands</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Customer Service</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-white/70 hover:text-yellow-400">Size Guide</a></li>
              <li><a href="#" className="text-white/70 hover:text-yellow-400">Returns</a></li>
              <li><a href="#" className="text-white/70 hover:text-yellow-400">Shipping</a></li>
              <li><a href="#" className="text-white/70 hover:text-yellow-400">FAQ</a></li>
              <li><a href="#" className="text-white/70 hover:text-yellow-400">Support</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Stay Updated</h3>
            <p className="text-sm text-white/80 mb-4">
              Subscribe to our newsletter for the latest releases and exclusive offers.
            </p>
            <div className="flex gap-2">
              <Input placeholder="Your email" className="flex-1" />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>

        {/* Centered Copyright Section */}
        <div className="border-t mt-12 pt-8 flex justify-center">
          <p className="text-sm text-white/70 hover:text-white cursor-pointer">
            <a href="https://yared.infinityfreeapp.com/" target="_blank" rel="noopener noreferrer">
              Copyrights © {currentYear} YISE Brand. All rights reserved || Developed By Y-Global System Solution
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}