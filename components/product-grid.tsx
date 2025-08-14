"use client";

import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Eye, Star } from 'lucide-react';
import { ProductModal } from '@/components/product-modal';

interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviews: number;
  isNew?: boolean;
  isSale?: boolean;
  colors: string[];
  sizes: string[];
  description: string;
  features: string[];
}

const products: Product[] = [
  {
    id: '1',
    name: 'Air Max Classic',
    brand: 'Nike',
    price: 129.99,
    originalPrice: 159.99,
    image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=500',
    rating: 4.8,
    reviews: 234,
    isSale: true,
    colors: ['White', 'Black', 'Red'],
    sizes: ['7', '8', '9', '10', '11', '12'],
    description: 'The classic Air Max with modern comfort technology.',
    features: ['Air Max cushioning', 'Breathable mesh', 'Rubber outsole', 'Iconic design']
  },
  {
    id: '2',
    name: 'Ultra Boost 22',
    brand: 'Adidas',
    price: 189.99,
    image: 'https://images.pexels.com/photos/1456737/pexels-photo-1456737.jpeg?auto=compress&cs=tinysrgb&w=500',
    rating: 4.9,
    reviews: 456,
    isNew: true,
    colors: ['Black', 'White', 'Blue'],
    sizes: ['7', '8', '9', '10', '11', '12'],
    description: 'Revolutionary running shoe with Boost technology.',
    features: ['Boost midsole', 'Primeknit upper', 'Continental rubber', 'Energy return']
  },
  {
    id: '3',
    name: 'Chuck Taylor All Star',
    brand: 'Converse',
    price: 65.99,
    image: 'https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&w=500',
    rating: 4.6,
    reviews: 789,
    colors: ['Black', 'White', 'Red', 'Navy'],
    sizes: ['6', '7', '8', '9', '10', '11', '12'],
    description: 'The iconic canvas sneaker that started it all.',
    features: ['Canvas upper', 'Rubber toe cap', 'Classic styling', 'Timeless design']
  },
  {
    id: '4',
    name: 'Old Skool',
    brand: 'Vans',
    price: 89.99,
    image: 'https://images.pexels.com/photos/1240892/pexels-photo-1240892.jpeg?auto=compress&cs=tinysrgb&w=500',
    rating: 4.7,
    reviews: 345,
    colors: ['Black/White', 'Navy/White', 'Gray/White'],
    sizes: ['7', '8', '9', '10', '11', '12'],
    description: 'The classic side-stripe skate shoe.',
    features: ['Suede and canvas upper', 'Padded collar', 'Signature waffle outsole', 'Iconic side stripe']
  },
  {
    id: '5',
    name: 'Gel-Kayano 29',
    brand: 'ASICS',
    price: 159.99,
    image: 'https://images.pexels.com/photos/2529146/pexels-photo-2529146.jpeg?auto=compress&cs=tinysrgb&w=500',
    rating: 4.8,
    reviews: 567,
    colors: ['Blue', 'Black', 'Gray'],
    sizes: ['7', '8', '9', '10', '11', '12'],
    description: 'Premium stability running shoe with GEL technology.',
    features: ['GEL cushioning', 'Dynamic DuoMax', 'FlyteFoam midsole', 'Engineered mesh']
  },
  {
    id: '6',
    name: 'Stan Smith',
    brand: 'Adidas',
    price: 89.99,
    image: 'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=500',
    rating: 4.5,
    reviews: 678,
    colors: ['White/Green', 'White/Navy', 'All White'],
    sizes: ['7', '8', '9', '10', '11', '12'],
    description: 'The world\'s most popular tennis shoe.',
    features: ['Leather upper', 'Perforated 3-Stripes', 'Rubber cupsole', 'Minimalist design']
  },
];

interface ProductGridProps {
  searchQuery: string;
}

export function ProductGrid({ searchQuery }: ProductGridProps) {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [favoriteIds, setFavoriteIds] = useState<Set<string>>(new Set());

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.brand.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleFavorite = (productId: string) => {
    setFavoriteIds(prev => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(productId)) {
        newFavorites.delete(productId);
      } else {
        newFavorites.add(productId);
      }
      return newFavorites;
    });
  };

  return (
    <section id="products" className="py-20">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Collection</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our carefully curated selection of premium footwear from world-renowned brands
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="product-card group">
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-xl">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 flex flex-col gap-2">
                    {product.isNew && (
                      <Badge variant="default" className="bg-green-500">New</Badge>
                    )}
                    {product.isSale && (
                      <Badge variant="destructive">Sale</Badge>
                    )}
                  </div>
                  <div className="absolute top-4 right-4 flex flex-col gap-2">
                    <Button
                      size="icon"
                      variant="secondary"
                      className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity"
                      onClick={() => toggleFavorite(product.id)}
                    >
                      <Heart
                        className={`h-4 w-4 ${
                          favoriteIds.has(product.id) ? 'fill-red-500 text-red-500' : ''
                        }`}
                      />
                    </Button>
                    <Button
                      size="icon"
                      variant="secondary"
                      className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity"
                      onClick={() => setSelectedProduct(product)}
                    >
                      <Eye className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-muted-foreground">
                      {product.brand}
                    </span>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{product.rating}</span>
                      <span className="text-sm text-muted-foreground">({product.reviews})</span>
                    </div>
                  </div>
                  
                  <h3 className="font-semibold mb-2 line-clamp-2">{product.name}</h3>
                  
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-lg font-bold">${product.price}</span>
                    {product.originalPrice && (
                      <span className="text-sm text-muted-foreground line-through">
                        ${product.originalPrice}
                      </span>
                    )}
                  </div>
                  
                  <div className="flex gap-2 mb-4">
                    {product.colors.slice(0, 3).map((color) => (
                      <div
                        key={color}
                        className="w-6 h-6 rounded-full border-2 border-gray-300 flex-shrink-0"
                        style={{
                          backgroundColor: color.toLowerCase() === 'white' ? '#ffffff' : 
                                         color.toLowerCase() === 'black' ? '#000000' :
                                         color.toLowerCase() === 'red' ? '#ef4444' :
                                         color.toLowerCase() === 'blue' ? '#3b82f6' :
                                         color.toLowerCase() === 'navy' ? '#1e40af' :
                                         color.toLowerCase() === 'gray' ? '#6b7280' :
                                         color.toLowerCase() === 'green' ? '#22c55e' : '#9ca3af'
                        }}
                      />
                    ))}
                    {product.colors.length > 3 && (
                      <span className="text-sm text-muted-foreground">+{product.colors.length - 3}</span>
                    )}
                  </div>
                  
                  <Button 
                    className="w-full" 
                    onClick={() => setSelectedProduct(product)}
                  >
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground">No products found matching "{searchQuery}"</p>
          </div>
        )}
      </div>

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </section>
  );
}