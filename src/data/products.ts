import cookieChocolate from "@/assets/cookie-chocolate.jpg";
import cookieOatmeal from "@/assets/cookie-oatmeal.jpg";
import cookieButter from "@/assets/cookie-butter.jpg";
import cookieDoubleChocolate from "@/assets/cookie-double-chocolate.jpg";
import cookieCoconut from "@/assets/cookie-coconut.jpg";
import cookiePeanut from "@/assets/cookie-peanut.jpg";

// Barcode images
import barcodeOsp850 from "@/assets/barcodes/barcode-osp-850.png";
import barcodeOsp400 from "@/assets/barcodes/barcode-osp-400.png";
import barcodeOsps850 from "@/assets/barcodes/barcode-osps-850.png";
import barcodeOsps400 from "@/assets/barcodes/barcode-osps-400.png";
import barcodeMix850 from "@/assets/barcodes/barcode-mix-850.png";
import barcodeMix400 from "@/assets/barcodes/barcode-mix-400.png";
import barcodeMixBox500 from "@/assets/barcodes/barcode-mix-box-500.png";
import barcodeBarley1kg from "@/assets/barcodes/barcode-barley-1kg.png";
import barcodeBarley500 from "@/assets/barcodes/barcode-barley-500.png";
import barcodePorridge1kg from "@/assets/barcodes/barcode-porridge-1kg.png";
import barcodePorridge500 from "@/assets/barcodes/barcode-porridge-500.png";

export interface Product {
  id: string;
  image: string;
  name: string;
  description: string;
  weight: string;
  price: number;
  category: "cookies" | "porridge";
  barcodeImage: string;
}

export const products: Product[] = [
  {
    id: "osp-850",
    image: cookieChocolate,
    name: "Orange Sweet Potato Cookies",
    description: "Nutritious orange sweet potato cookies packed with natural vitamins and wholesome goodness.",
    weight: "850g",
    price: 600,
    category: "cookies",
    barcodeImage: barcodeOsp850,
  },
  {
    id: "osp-400",
    image: cookieChocolate,
    name: "Orange Sweet Potato Cookies",
    description: "Nutritious orange sweet potato cookies packed with natural vitamins and wholesome goodness.",
    weight: "400g",
    price: 275,
    category: "cookies",
    barcodeImage: barcodeOsp400,
  },
  {
    id: "osps-850",
    image: cookieOatmeal,
    name: "Orange Sweet Potato & Soya Bean Cookies",
    description: "Premium blend of orange sweet potato and protein-rich soya beans for enhanced nutrition.",
    weight: "850g",
    price: 650,
    category: "cookies",
    barcodeImage: barcodeOsps850,
  },
  {
    id: "osps-400",
    image: cookieOatmeal,
    name: "Orange Sweet Potato & Soya Bean Cookies",
    description: "Premium blend of orange sweet potato and protein-rich soya beans for enhanced nutrition.",
    weight: "400g",
    price: 300,
    category: "cookies",
    barcodeImage: barcodeOsps400,
  },
  {
    id: "mix-850",
    image: cookieButter,
    name: "Mixed Cookies",
    description: "A delightful assortment of our finest cookie varieties in one premium package.",
    weight: "850g",
    price: 650,
    category: "cookies",
    barcodeImage: barcodeMix850,
  },
  {
    id: "mix-400",
    image: cookieButter,
    name: "Mixed Cookies",
    description: "A delightful assortment of our finest cookie varieties in one premium package.",
    weight: "400g",
    price: 300,
    category: "cookies",
    barcodeImage: barcodeMix400,
  },
  {
    id: "mix-box-500",
    image: cookieDoubleChocolate,
    name: "Mixed Cookies (Box)",
    description: "Elegantly boxed mixed cookies, perfect for gifting or special occasions.",
    weight: "500g",
    price: 400,
    category: "cookies",
    barcodeImage: barcodeMixBox500,
  },
  {
    id: "barley-1kg",
    image: cookieCoconut,
    name: "Barley Cookies",
    description: "Wholesome barley cookies with a rich, nutty flavor and satisfying crunch.",
    weight: "1kg",
    price: 450,
    category: "cookies",
    barcodeImage: barcodeBarley1kg,
  },
  {
    id: "barley-500",
    image: cookieCoconut,
    name: "Barley Cookies",
    description: "Wholesome barley cookies with a rich, nutty flavor and satisfying crunch.",
    weight: "500g",
    price: 260,
    category: "cookies",
    barcodeImage: barcodeBarley500,
  },
  {
    id: "porridge-1kg",
    image: cookiePeanut,
    name: "Mixed Porridge Flour",
    description: "Nutritious mixed porridge flour blend for a healthy and energizing breakfast.",
    weight: "1kg",
    price: 450,
    category: "porridge",
    barcodeImage: barcodePorridge1kg,
  },
  {
    id: "porridge-500",
    image: cookiePeanut,
    name: "Mixed Porridge Flour",
    description: "Nutritious mixed porridge flour blend for a healthy and energizing breakfast.",
    weight: "500g",
    price: 200,
    category: "porridge",
    barcodeImage: barcodePorridge500,
  },
];

// Featured products for home page (first 3 unique products)
export const featuredProducts = products.filter(
  (p) => p.id === "osp-850" || p.id === "osps-850" || p.id === "mix-850"
);
