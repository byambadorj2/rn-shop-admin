export type Product = {
  category: number;
  created_at: string;
  hero_image: string;
  id: number;
  image_url: string | null;
  max_quantity: number;
  price: number | null;
  slug: string;
  title: string;
};

export type CategoryWithProducts = {
  created_at: string;
  id: number;
  imageUrl: string;
  name: string;
  products: Product[];
  slug: string;
};

export type CategoriesWithProductsResponse = CategoryWithProducts[];
