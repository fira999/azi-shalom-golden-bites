import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle, MapPin, Award, Leaf } from "lucide-react";
import factoryImage from "@/assets/factory.jpg";

const values = [
  "Premium quality ingredients sourced responsibly",
  "No artificial preservatives or additives",
  "State-of-the-art production facility",
  "Strict quality control standards",
  "Commitment to nutritional excellence",
  "Supporting local Ethiopian economy",
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <span className="text-gold font-body text-sm tracking-[0.3em] uppercase">
              Our Story
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mt-4">
              About Azi Shalom
            </h1>
            <div className="w-24 h-0.5 bg-gold mx-auto mt-6" />
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-gold font-body text-sm tracking-[0.3em] uppercase">
                Who We Are
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
                Crafting Excellence in Every Cookie
              </h2>
              <p className="font-body text-muted-foreground leading-relaxed mb-6">
                Azi Shalom Cookies PLC is a premium cookie manufacturer based in Hawassa, Ethiopia. 
                Our mission is to deliver exceptional taste experiences through artisan cookies 
                crafted with the finest ingredients.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed mb-8">
                Founded with a passion for quality baking, we combine traditional recipes with 
                modern production techniques to create cookies that stand out in taste, texture, 
                and quality.
              </p>
              <Button variant="outline" asChild>
                <Link to="/products">Explore Our Products</Link>
              </Button>
            </div>
            <div className="relative">
              <div className="absolute inset-0 border border-gold/30 rounded-lg transform translate-x-4 translate-y-4" />
              <img
                src={factoryImage}
                alt="Azi Shalom Cookies production facility"
                className="relative rounded-lg w-full h-auto object-cover shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Production Location */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center">
                <MapPin className="w-6 h-6 text-gold" />
              </div>
              <div>
                <span className="text-gold font-body text-sm tracking-[0.3em] uppercase">
                  Our Location
                </span>
                <h2 className="font-heading text-3xl font-bold text-foreground">
                  Made in Hawassa
                </h2>
              </div>
            </div>
            <p className="font-body text-muted-foreground leading-relaxed text-lg mb-6">
              Our production facility is located in the Addis Ketema Industry Zone in Hawassa, 
              one of Ethiopia's most vibrant cities. This strategic location allows us to 
              source fresh, local ingredients while maintaining the highest production standards.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed">
              The facility is equipped with modern baking equipment and follows strict hygiene 
              protocols to ensure every cookie that leaves our premises meets our exacting quality standards.
            </p>
          </div>
        </div>
      </section>

      {/* Ingredient Philosophy */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {values.map((value, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 border border-gold/20 rounded-lg hover:border-gold/50 transition-colors"
                  >
                    <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                    <span className="font-body text-sm text-foreground">{value}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center">
                  <Leaf className="w-6 h-6 text-gold" />
                </div>
                <span className="text-gold font-body text-sm tracking-[0.3em] uppercase">
                  Our Philosophy
                </span>
              </div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                Natural Ingredients, Exceptional Taste
              </h2>
              <p className="font-body text-muted-foreground leading-relaxed mb-6">
                At Azi Shalom, we believe that great cookies start with great ingredients. 
                We carefully select every component that goes into our products, prioritizing 
                quality, freshness, and natural goodness.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed">
                Our commitment to using no artificial preservatives or additives means you 
                can enjoy our cookies knowing they're made with wholesome, honest ingredients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quality & Nutrition */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-16 h-16 mx-auto mb-8 rounded-full bg-gold/10 flex items-center justify-center">
              <Award className="w-8 h-8 text-gold" />
            </div>
            <span className="text-gold font-body text-sm tracking-[0.3em] uppercase">
              Our Commitment
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
              Quality & Nutrition Focus
            </h2>
            <p className="font-body text-lg text-muted-foreground leading-relaxed mb-8">
              Every batch of cookies undergoes rigorous quality testing to ensure consistency 
              in taste and texture. We're committed to delivering products that not only taste 
              amazing but also meet nutritional standards that our customers can trust.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed">
              Our team of skilled bakers and quality control specialists work together to 
              maintain the highest standards in every aspect of production, from ingredient 
              selection to final packaging.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-gold/10 via-gold/5 to-gold/10 border-t border-gold/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
            Experience Our Cookies
          </h2>
          <p className="font-body text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Now that you know our story, discover the taste that makes Azi Shalom cookies special.
          </p>
          <Button variant="hero" asChild>
            <Link to="/products">View Our Products</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default About;
