"use client";

import { Button } from '@/components/ui/button';
import { ArrowRight, Star } from 'lucide-react';

export function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      />
      <div className="absolute inset-0 bg-black/40 dark:bg-black/60" />
      
      <div className="container relative z-10">
        <div className="flex flex-col items-center text-center py-20 md:py-32">
          <div className="flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
            <Star className="h-4 w-4 text-white fill-white" />
            <span className="text-sm font-medium text-white">World's Premium Footwear</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 max-w-4xl text-white">
            Step Into
            <span className="text-yellow-400"> Excellence</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl leading-relaxed">
            Discover the world's finest footwear collection. From handcrafted Italian leather to innovative athletic designs, find your perfect stride.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Button size="lg" className="group">
              Explore Collection
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline">
              Watch Our Story
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-2xl">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-yellow-400 mb-2">50K+</div>
              <div className="text-sm text-white/80">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-yellow-400 mb-2">200+</div>
              <div className="text-sm text-white/80">Premium Brands</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-yellow-400 mb-2">150+</div>
              <div className="text-sm text-white/80">Countries</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-yellow-400 mb-2">4.9★</div>
              <div className="text-sm text-white/80">Average Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}