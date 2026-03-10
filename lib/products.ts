export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviews: number;
  inStock: boolean;
  description: string;
  specs: {
    material?: string;
    color?: string;
    size?: string;
    weight?: string;
    printArea?: string;
  };
  personalizationOptions?: string[];
  colors?: string[];
  sizes?: string[];
  discount?: number;
  stock?: number;
  salePrice?: number;
  sku?: string;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Classic T-Shirt",
    category: "Apparel",
    price: 12.99,
    originalPrice: 19.99,
    image: "/images/product-tshirt.jpg",
    rating: 4.8,
    reviews: 234,
    inStock: true,
    description: "Premium cotton t-shirt perfect for custom printing",
    specs: {
      material: "100% Organic Cotton",
      color: "White, Black, Navy",
      weight: "180 gsm",
      printArea: "12\" x 16\""
    },
    personalizationOptions: ["Front Print", "Back Print", "Sleeve Print"]
  },
  {
    id: "2",
    name: "Ceramic Coffee Mug",
    category: "Drinkware",
    price: 7.99,
    image: "/images/product-mug.jpg",
    rating: 4.9,
    reviews: 567,
    inStock: true,
    description: "11oz ceramic mug with heat-resistant coating",
    specs: {
      material: "Ceramic",
      color: "White",
      size: "11oz",
      printArea: "Full Wrap"
    },
    personalizationOptions: ["Design Print"]
  },
  {
    id: "3",
    name: "Phone Case",
    category: "Phone Accessories",
    price: 14.99,
    originalPrice: 22.99,
    image: "/images/product-phonecase.jpg",
    rating: 4.6,
    reviews: 189,
    inStock: true,
    description: "Protective phone case with custom design space",
    specs: {
      material: "TPU & Polycarbonate",
      color: "Clear",
      size: "iPhone 15 Pro",
      printArea: "Back & Sides"
    },
    personalizationOptions: ["Custom Design"]
  },
  {
    id: "4",
    name: "Canvas Tote Bag",
    category: "Bags",
    price: 9.99,
    image: "/images/product-totebag.jpg",
    rating: 4.7,
    reviews: 312,
    inStock: true,
    description: "Durable canvas tote bag for shopping and events",
    specs: {
      material: "100% Cotton Canvas",
      color: "Natural",
      size: "15\" x 16\"",
      printArea: "Front 12\" x 14\""
    },
    personalizationOptions: ["Front Print", "Back Print"]
  },
  {
    id: "5",
    name: "Vinyl Sticker Sheet",
    category: "Stickers",
    price: 3.99,
    image: "/images/product-stickers.jpg",
    rating: 4.9,
    reviews: 892,
    inStock: true,
    description: "Weather-resistant vinyl sticker sheets",
    specs: {
      material: "Vinyl",
      color: "Full Color",
      size: "Varies",
      printArea: "Custom"
    },
    personalizationOptions: ["Full Color Design"]
  },
  {
    id: "6",
    name: "Hoodie Sweatshirt",
    category: "Apparel",
    price: 24.99,
    originalPrice: 39.99,
    image: "/images/product-hoodie.jpg",
    rating: 4.8,
    reviews: 456,
    inStock: true,
    description: "Comfortable fleece-lined hoodie",
    specs: {
      material: "80% Cotton, 20% Polyester",
      color: "Black, Gray, Navy",
      weight: "280 gsm",
      printArea: "Front 10\" x 12\""
    },
    personalizationOptions: ["Front Print", "Back Print"]
  },
  {
    id: "7",
    name: "Business Card Set",
    category: "Stationery",
    price: 29.99,
    image: "/images/cat-stationery.jpg",
    rating: 4.9,
    reviews: 678,
    inStock: true,
    description: "Premium 500pc business card set",
    specs: {
      material: "16pt Cardstock",
      color: "Full Color",
      size: "3.5\" x 2\"",
      printArea: "Full Front & Back"
    },
    personalizationOptions: ["Custom Design", "Foil Stamping"]
  },
  {
    id: "8",
    name: "Shipping Box",
    category: "Packaging",
    price: 0.99,
    image: "/images/cat-packaging.jpg",
    rating: 4.7,
    reviews: 234,
    inStock: true,
    description: "Custom printed shipping box",
    specs: {
      material: "Corrugated Cardboard",
      color: "Kraft",
      size: "Customizable",
      printArea: "Full Print"
    },
    personalizationOptions: ["Custom Logo"]
  },
  {
    id: "9",
    name: "Baseball Cap",
    category: "Apparel",
    price: 14.99,
    image: "/images/product-tshirt.jpg",
    rating: 4.6,
    reviews: 145,
    inStock: true,
    description: "Adjustable cotton baseball cap",
    specs: {
      material: "100% Cotton Twill",
      color: "Black, Navy, White",
      size: "One Size",
      printArea: "Front Embroidery"
    },
    personalizationOptions: ["Embroidery", "Woven Label"]
  },
  {
    id: "10",
    name: "Drawstring Bag",
    category: "Bags",
    price: 5.99,
    image: "/images/product-totebag.jpg",
    rating: 4.8,
    reviews: 389,
    inStock: true,
    description: "Gym-style drawstring backpack",
    specs: {
      material: "Polyester",
      color: "Black, Navy",
      size: "15\" x 18\"",
      printArea: "Front 10\" x 12\""
    },
    personalizationOptions: ["Screen Print", "Embroidery"]
  },
  {
    id: "11",
    name: "Water Bottle",
    category: "Drinkware",
    price: 16.99,
    image: "/images/product-mug.jpg",
    rating: 4.7,
    reviews: 267,
    inStock: true,
    description: "Stainless steel insulated water bottle",
    specs: {
      material: "18/8 Stainless Steel",
      color: "Silver, Black",
      size: "16oz",
      printArea: "Wrap Around"
    },
    personalizationOptions: ["UV Print", "Laser Engraving"]
  },
  {
    id: "12",
    name: "Leather Keychain",
    category: "Accessories",
    price: 6.99,
    image: "/images/product-phonecase.jpg",
    rating: 4.9,
    reviews: 521,
    inStock: true,
    description: "Premium leather keychain with metal ring",
    specs: {
      material: "Genuine Leather",
      color: "Brown, Black",
      size: "3\" x 2\"",
      printArea: "Front Engraving"
    },
    personalizationOptions: ["Engraving", "Embossing"]
  },
  {
    id: "13",
    name: "Poster Print",
    category: "Stationery",
    price: 4.99,
    originalPrice: 7.99,
    image: "/images/printed-materials.jpg",
    rating: 4.6,
    reviews: 198,
    inStock: true,
    description: "High-quality poster paper prints",
    specs: {
      material: "Matte Art Paper",
      color: "Full Color",
      size: "11\" x 17\"",
      printArea: "Full Print"
    },
    personalizationOptions: ["Custom Design"]
  },
  {
    id: "14",
    name: "Pen Set",
    category: "Stationery",
    price: 12.99,
    image: "/images/printed-materials.jpg",
    rating: 4.8,
    reviews: 344,
    inStock: false,
    description: "Custom branded pen set (5 pack)",
    specs: {
      material: "Plastic & Metal",
      color: "Various",
      size: "Standard",
      printArea: "Barrel Imprint"
    },
    personalizationOptions: ["Logo Print"]
  },
  {
    id: "15",
    name: "Lunch Box",
    category: "Accessories",
    price: 18.99,
    image: "/images/product-tshirt.jpg",
    rating: 4.7,
    reviews: 276,
    inStock: true,
    description: "Insulated lunch box container",
    specs: {
      material: "Stainless Steel & Neoprene",
      color: "Black, Blue",
      size: "9\" x 6\" x 6\"",
      printArea: "Top Print"
    },
    personalizationOptions: ["Screen Print", "Vinyl"]
  }
];

export const categories = [
  "All",
  "Apparel",
  "Drinkware",
  "Phone Accessories",
  "Bags",
  "Stickers",
  "Stationery",
  "Packaging",
  "Accessories"
];

export const priceRanges = [
  { label: "Under $10", min: 0, max: 10 },
  { label: "$10 - $25", min: 10, max: 25 },
  { label: "$25 - $50", min: 25, max: 50 },
  { label: "$50+", min: 50, max: 10000 }
];

export const ratings = [
  { stars: 5, label: "5 Stars" },
  { stars: 4, label: "4 Stars & Up" },
  { stars: 3, label: "3 Stars & Up" }
];

export const sortOptions = [
  { value: "popularity", label: "Most Popular" },
  { value: "newest", label: "Newest First" },
  { value: "price-low", label: "Price: Low to High" },
  { value: "price-high", label: "Price: High to Low" },
  { value: "rating", label: "Highest Rated" },
  { value: "reviews", label: "Most Reviews" }
];
