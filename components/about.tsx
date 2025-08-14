import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, Award, Globe, Heart, Target, Zap } from 'lucide-react';

export default function AboutPage() {
  const stats = [
    { label: 'Years of Excellence', value: '15+', icon: Award },
    { label: 'Countries Served', value: '150+', icon: Globe },
    { label: 'Happy Customers', value: '50K+', icon: Users },
    { label: 'Premium Brands', value: '200+', icon: Heart },
  ];

  const values = [
    {
      icon: Target,
      title: 'Quality First',
      description: 'We partner only with the finest footwear manufacturers worldwide to ensure every shoe meets our exacting standards.'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'From Milan to Tokyo, we bring the world\'s best footwear directly to your doorstep with seamless international shipping.'
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'We constantly evolve our platform and partnerships to offer the latest in footwear technology and fashion trends.'
    },
    {
      icon: Heart,
      title: 'Customer Care',
      description: 'Your satisfaction is our priority. We provide exceptional service and support throughout your shopping journey.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          }}
        />
        <div className="absolute inset-0 bg-black/50 dark:bg-black/70" />
        
        <div className="container relative z-10 py-20 md:py-32">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-6 bg-yellow-400 text-black hover:bg-yellow-500">
              About YISE Brand
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Stepping Into Excellence
              <span className="text-yellow-400"> Since 2009</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              YISE Brand has been at the forefront of premium footwear retail, connecting shoe enthusiasts 
              worldwide with the finest collections from renowned international brands.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/50">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <stat.icon className="h-8 w-8 mx-auto mb-4 text-primary" />
                  <div className="text-2xl md:text-3xl font-bold text-primary mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded in 2009 by a team of footwear enthusiasts, YISE Brand began as a small boutique 
                  with a simple mission: to make the world's finest shoes accessible to everyone, everywhere.
                </p>
                <p>
                  What started as a passion project has grown into a global platform, serving customers 
                  in over 150 countries. We've built lasting partnerships with premium brands like Nike, 
                  Adidas, Converse, and many others, ensuring our customers have access to both timeless 
                  classics and cutting-edge innovations.
                </p>
                <p>
                  Today, YISE Brand stands as a testament to quality, authenticity, and exceptional 
                  customer service. Every shoe in our collection is carefully curated, and every 
                  customer interaction is handled with the care and attention you deserve.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Premium shoes collection"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do at YISE Brand
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <value.icon className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                      <p className="text-muted-foreground">{value.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="relative py-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1240892/pexels-photo-1240892.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          }}
        />
        <div className="absolute inset-0 bg-black/60 dark:bg-black/70" />
        
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Our Mission
            </h2>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-8">
              To democratize access to premium footwear by connecting customers worldwide 
              with the finest shoe collections, while maintaining the highest standards of 
              quality, authenticity, and customer service.
            </p>
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-yellow-400 text-black rounded-full font-semibold">
              <Heart className="h-5 w-5" />
              Made with passion for shoe lovers worldwide
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}