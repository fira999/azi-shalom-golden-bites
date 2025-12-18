interface ProductCardProps {
  image: string;
  name: string;
  description: string;
  weight: string;
}

const ProductCard = ({ image, name, description, weight }: ProductCardProps) => {
  return (
    <div className="card-premium group">
      <div className="aspect-square overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="p-6">
        <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
          {name}
        </h3>
        <p className="text-muted-foreground font-body text-sm mb-4 line-clamp-2">
          {description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-gold font-body text-sm font-medium">
            {weight}
          </span>
          <span className="text-gold/60 font-body text-xs uppercase tracking-wider">
            Premium Quality
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
