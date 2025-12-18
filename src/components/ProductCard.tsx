import { useEffect, useRef, useState } from "react";
import JsBarcode from "jsbarcode";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Product, generateBarcodeValue } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const barcodeRef = useRef<SVGSVGElement>(null);
  const [showBarcode, setShowBarcode] = useState(false);
  const barcodeValue = generateBarcodeValue(product);

  useEffect(() => {
    if (barcodeRef.current && showBarcode) {
      JsBarcode(barcodeRef.current, barcodeValue, {
        format: "CODE128",
        width: 1.5,
        height: 50,
        displayValue: true,
        fontSize: 12,
        background: "transparent",
        lineColor: "#D4AF37",
        margin: 10,
      });
    }
  }, [barcodeValue, showBarcode]);

  return (
    <div className="card-premium group">
      {/* Product Image */}
      <div className="aspect-square overflow-hidden relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {/* Weight Badge */}
        <span className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm text-gold font-body text-sm font-medium px-3 py-1 rounded-full border border-gold/30">
          {product.weight}
        </span>
      </div>

      {/* Product Info */}
      <div className="p-6">
        <h3 className="font-heading text-lg font-semibold text-foreground mb-2 line-clamp-1">
          {product.name}
        </h3>
        <p className="text-muted-foreground font-body text-sm mb-4 line-clamp-2">
          {product.description}
        </p>

        {/* Price */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-gold font-heading text-2xl font-bold">
            {product.price} <span className="text-sm font-body">ETB</span>
          </span>
          <span className="text-gold/60 font-body text-xs uppercase tracking-wider">
            Azi Shalom
          </span>
        </div>

        {/* Barcode Toggle */}
        <button
          onClick={() => setShowBarcode(!showBarcode)}
          className="w-full flex items-center justify-center gap-2 py-2 text-sm text-muted-foreground hover:text-gold transition-colors border-t border-gold/20"
        >
          {showBarcode ? (
            <>
              <ChevronUp className="w-4 h-4" />
              Hide Barcode
            </>
          ) : (
            <>
              <ChevronDown className="w-4 h-4" />
              Show Barcode
            </>
          )}
        </button>

        {/* Barcode Section */}
        {showBarcode && (
          <div className="mt-4 p-4 bg-secondary rounded-lg text-center print:bg-white">
            <svg ref={barcodeRef} className="mx-auto" />
            <p className="text-xs text-muted-foreground mt-2 font-mono">
              {barcodeValue}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
