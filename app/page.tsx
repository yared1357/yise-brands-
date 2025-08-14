"use client";

import { useState } from 'react';
import { Header } from '@/components/header';
import { About } from '@/components/about';
import { Contact } from '@/components/contact';
import { HeroSection } from '@/components/hero-section';
import { ProductGrid } from '@/components/product-grid';
import { BrandsSection } from '@/components/brands-section';
import { Footer } from '@/components/footer';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen bg-background">
      <Header onSearch={setSearchQuery} searchQuery={searchQuery} />
      <main>
        <HeroSection />
        <ProductGrid searchQuery={searchQuery} />
        <BrandsSection />
      </main>
      <Footer />
    </div>
  );
}