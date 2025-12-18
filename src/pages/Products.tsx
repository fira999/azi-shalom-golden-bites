import Layout from "@/components/Layout";
import ProductCard from "@/components/ProductCard";
import cookieChocolate from "@/assets/cookie-chocolate.jpg";
import cookieOatmeal from "@/assets/cookie-oatmeal.jpg";
import cookieButter from "@/assets/cookie-butter.jpg";
import cookieDoubleChocolate from "@/assets/cookie-double-chocolate.jpg";
import cookieCoconut from "@/assets/cookie-coconut.jpg";
import cookiePeanut from "@/assets/cookie-peanut.jpg";

const products = [
  {
    image: cookieChocolate,
    name: "Classic Chocolate Chip",
    description: "Our signature cookie loaded with premium chocolate chips. A timeless favorite that never disappoints.",
    weight: "850g",
  },
  {
    image: cookieOatmeal,
    name: "Oatmeal Raisin",
    description: "Wholesome rolled oats combined with plump, juicy raisins for a healthier indulgence.",
    weight: "850g",
  },
  {
    image: cookieButter,
    name: "Butter Shortbread",
    description: "Delicate, crumbly shortbread made with premium butter. Elegantly designed for special occasions.",
    weight: "850g",
  },
  {
    image: cookieDoubleChocolate,
    name: "Double Chocolate",
    description: "For the chocolate lovers - rich cocoa cookie studded with extra chocolate chips.",
    weight: "850g",
  },
  {
    image: cookieCoconut,
    name: "Coconut Delight",
    description: "Tropical flavors meet buttery goodness with real coconut flakes in every bite.",
    weight: "850g",
  },
  {
    image: cookiePeanut,
    name: "Peanut Butter",
    description: "Creamy peanut butter blended into a soft, chewy cookie with classic crosshatch pattern.",
    weight: "850g",
  },
];

const Products = () => {
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
              Premium Cookies
            </h1>
            <div className="w-24 h-0.5 bg-gold mx-auto mt-6" />
            <p className="font-body text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
              Each cookie is carefully crafted using the finest ingredients, 
              ensuring exceptional taste and quality in every bite.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div
                key={product.name}
                className="animate-fade-in-up opacity-0"
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
              >
                <ProductCard {...product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Note */}
      <section className="py-16 bg-secondary border-t border-gold/20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="font-heading text-2xl font-semibold text-foreground mb-4">
              Quality You Can Trust
            </h3>
            <p className="font-body text-muted-foreground leading-relaxed">
              All our cookies are produced at our state-of-the-art facility in Hawassa, Ethiopia. 
              We use only natural ingredients with no artificial preservatives, ensuring you get 
              the freshest, most delicious cookies every time.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Products;
