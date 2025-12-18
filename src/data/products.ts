import cookieChocolate from "@/assets/cookie-chocolate.jpg";
import cookieOatmeal from "@/assets/cookie-oatmeal.jpg";
import cookieButter from "@/assets/cookie-butter.jpg";
import cookieDoubleChocolate from "@/assets/cookie-double-chocolate.jpg";
import cookieCoconut from "@/assets/cookie-coconut.jpg";
import cookiePeanut from "@/assets/cookie-peanut.jpg";

export interface Product {
  id: string;
  image: string;
  name: string;
  description: string;
  weight: string;
  price: number;
  category: "cookies" | "porridge";
}

// Generate a unique barcode value from product data
export const generateBarcodeValue = (product: Product): string => {
  // Create a code from product name initials + weight + price
  const nameCode = product.name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase()
    .substring(0, 4);
  const weightNum = product.weight.replace(/[^0-9]/g, "");
  const priceStr = product.price.toString().padStart(4, "0");
  return `AZI${nameCode}${weightNum}${priceStr}`;
};

export const products: Product[] = [
  {
    id: "osp-850",
    image: cookieChocolate,
    name: "Orange Sweet Potato Cookies",
    description: "Nutritious orange sweet potato cookies packed with natural vitamins and wholesome goodness.",
    weight: "850g",
    price: 600,
    category: "cookies",
  },
  {
    id: "osp-400",
    image: cookieChocolate,
    name: "Orange Sweet Potato Cookies",
    description: "Nutritious orange sweet potato cookies packed with natural vitamins and wholesome goodness.",
    weight: "400g",
    price: 275,
    category: "cookies",
  },
  {
    id: "osps-850",
    image: cookieOatmeal,
    name: "Orange Sweet Potato & Soya Bean Cookies",
    description: "Premium blend of orange sweet potato and protein-rich soya beans for enhanced nutrition.",
    weight: "850g",
    price: 650,
    category: "cookies",
  },
  {
    id: "osps-400",
    image: cookieOatmeal,
    name: "Orange Sweet Potato & Soya Bean Cookies",
    description: "Premium blend of orange sweet potato and protein-rich soya beans for enhanced nutrition.",
    weight: "400g",
    price: 300,
    category: "cookies",
  },
  {
    id: "mix-850",
    image: cookieButter,
    name: "Mixed Cookies",
    description: "A delightful assortment of our finest cookie varieties in one premium package.",
    weight: "850g",
    price: 650,
    category: "cookies",
  },
  {
    id: "mix-400",
    image: cookieButter,
    name: "Mixed Cookies",
    description: "A delightful assortment of our finest cookie varieties in one premium package.",
    weight: "400g",
    price: 300,
    category: "cookies",
  },
  {
    id: "mix-box-500",
    image: cookieDoubleChocolate,
    name: "Mixed Cookies (Box)",
    description: "Elegantly boxed mixed cookies, perfect for gifting or special occasions.",
    weight: "500g",
    price: 400,
    category: "cookies",
  },
  {
    id: "barley-1kg",
    image: cookieCoconut,
    name: "Barley Cookies",
    description: "Wholesome barley cookies with a rich, nutty flavor and satisfying crunch.",
    weight: "1kg",
    price: 450,
    category: "cookies",
  },
  {
    id: "barley-500",
    image: cookieCoconut,
    name: "Barley Cookies",
    description: "Wholesome barley cookies with a rich, nutty flavor and satisfying crunch.",
    weight: "500g",
    price: 260,
    category: "cookies",
  },
  {
    id: "porridge-1kg",
    image: cookiePeanut,
    name: "Mixed Porridge Flour",
    description: "Nutritious mixed porridge flour blend for a healthy and energizing breakfast.",
    weight: "1kg",
    price: 450,
    category: "porridge",
  },
  {
    id: "porridge-500",
    image: cookiePeanut,
    name: "Mixed Porridge Flour",
    description: "Nutritious mixed porridge flour blend for a healthy and energizing breakfast.",
    weight: "500g",
    price: 200,
    category: "porridge",
  },
];

// Featured products for home page (first 3 unique products)
export const featuredProducts = products.filter(
  (p) => p.id === "osp-850" || p.id === "osps-850" || p.id === "mix-850"
);
