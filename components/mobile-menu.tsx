"use client";

import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onSearch: (query: string) => void;
  searchQuery: string;
}

export function MobileMenu({ isOpen, onClose, onSearch, searchQuery }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="md:hidden border-t bg-background/95 backdrop-blur">
      <div className="container py-4 space-y-4">
        {/* Mobile Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search shoes..."
            value={searchQuery}
            onChange={(e) => onSearch(e.target.value)}
            className="pl-10"
          />
        </div>

        {/* Mobile Navigation */}
        <nav className="flex flex-col space-y-2">
          <a href="/">
            <Button variant="ghost" className="justify-start w-full" onClick={onClose}>
              Home
            </Button>
          </a>
          <Button variant="ghost" className="justify-start" onClick={() => {onClose(); document.getElementById('products')?.scrollIntoView();}}>
            Products
          </Button>
          <Button variant="ghost" className="justify-start" onClick={() => {onClose(); document.getElementById('brands')?.scrollIntoView();}}>
            Brands
          </Button>
        </nav>
      </div>
    </div>
  );
}