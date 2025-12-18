import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import ProductCard from "@/components/ProductCard";
import { Award, Leaf, Heart } from "lucide-react";
import heroCookies from "@/assets/hero-cookies.jpg";
import { featuredProducts } from "@/data/products";

const highlights = [
  {
    icon: Award,
    title: "Premium Quality",
    description: "Only the finest natural ingredients make it into our products.",
  },
  {
    icon: Leaf,
    title: "Natural Ingredients",
    description: "No artificial preservatives or additives.",
  },
  {
    icon: Heart,
    title: "Made with Love",
    description: "Every batch is crafted with care in Hawassa, Ethiopia.",
  },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroCookies}
            alt="Premium cookies"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/40" />
        </div>

        {/* Content */}
        <div className="relative container mx-auto px-4">
          <div className="max-w-2xl">
            <span
              className="inline-block text-gold font-body text-sm tracking-[0.3em] uppercase mb-6 animate-fade-in-up opacity-0"
              style={{ animationDelay: "100ms", animationFillMode: "forwards" }}
            >
              Premium Ethiopian Products
            </span>
            <h1
              className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-6 animate-fade-in-up opacity-0"
              style={{ animationDelay: "200ms", animationFillMode: "forwards" }}
            >
              Taste the <span className="text-gold">Golden</span> Perfection
            </h1>
            <p
              className="font-body text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed animate-fade-in-up opacity-0"
              style={{ animationDelay: "300ms", animationFillMode: "forwards" }}
            >
              Artisan cookies and nutritious products crafted with premium natural
              ingredients in the heart of Hawassa, Ethiopia.
            </p>
            <div
              className="flex flex-wrap gap-4 animate-fade-in-up opacity-0"
              style={{ animationDelay: "400ms", animationFillMode: "forwards" }}
            >
              <Button variant="hero" asChild>
                <Link to="/products">Explore Our Collection</Link>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <Link to="/about">Our Story</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-gold font-body text-sm tracking-[0.3em] uppercase">
              Our Selection
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mt-4">
              Featured Products
            </h2>
            <div className="w-24 h-0.5 bg-gold mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <div
                key={product.id}
                className="animate-fade-in-up opacity-0"
                style={{
                  animationDelay: `${index * 150}ms`,
                  animationFillMode: "forwards",
                }}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <Link to="/products">View All Products</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Brand Highlights */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-gold font-body text-sm tracking-[0.3em] uppercase">
              Why Choose Us
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mt-4">
              The Azi Shalom Difference
            </h2>
            <div className="w-24 h-0.5 bg-gold mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="text-center p-8 border border-gold/20 rounded-lg hover:border-gold/50 transition-colors duration-300"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gold/10 flex items-center justify-center">
                  <item.icon className="w-8 h-8 text-gold" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="font-body text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-gold/10 via-gold/5 to-gold/10 border-y border-gold/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Experience Premium Taste?
          </h2>
          <p className="font-body text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Discover our full range of artisan cookies and nutritious products,
            each one crafted to deliver an exceptional experience.
          </p>
          <Button variant="hero" asChild>
            <Link to="/products">Shop Now</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
