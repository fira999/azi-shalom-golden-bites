import Layout from "@/components/Layout";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

const Products = () => {
  // Separate cookies and porridge products
  const cookieProducts = products.filter((p) => p.category === "cookies");
  const porridgeProducts = products.filter((p) => p.category === "porridge");

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-gold font-body text-sm tracking-[0.3em] uppercase">
              Our Collection
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mt-4">
              Premium Products
            </h1>
            <div className="w-24 h-0.5 bg-gold mx-auto mt-6" />
            <p className="font-body text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
              Each product is carefully crafted using the finest natural ingredients,
              ensuring exceptional taste and nutrition in every bite.
            </p>
          </div>
        </div>
      </section>

      {/* Cookies Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
              Cookies
            </h2>
            <div className="w-16 h-0.5 bg-gold mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {cookieProducts.map((product, index) => (
              <div
                key={product.id}
                className="animate-fade-in-up opacity-0"
                style={{
                  animationDelay: `${index * 100}ms`,
                  animationFillMode: "forwards",
                }}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Porridge Products */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
              Porridge Flour
            </h2>
            <div className="w-16 h-0.5 bg-gold mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-4xl mx-auto">
            {porridgeProducts.map((product, index) => (
              <div
                key={product.id}
                className="animate-fade-in-up opacity-0"
                style={{
                  animationDelay: `${index * 100}ms`,
                  animationFillMode: "forwards",
                }}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Note */}
      <section className="py-16 border-t border-gold/20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="font-heading text-2xl font-semibold text-foreground mb-4">
              Quality You Can Trust
            </h3>
            <p className="font-body text-muted-foreground leading-relaxed">
              All our products are produced at our state-of-the-art facility in Hawassa, Ethiopia.
              We use only natural ingredients with no artificial preservatives, ensuring you get
              the freshest, most nutritious products every time.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Products;
