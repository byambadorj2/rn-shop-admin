import { getCategoriesWithProducts } from "@/actions/categories";
import CategoriesPageComponent from "./page-component";

export default async function Categories() {
  const categories = await getCategoriesWithProducts();
  console.log(categories);
  return <CategoriesPageComponent categories={categories} />;
}
