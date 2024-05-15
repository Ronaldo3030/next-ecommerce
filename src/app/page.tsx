import { ProductType } from "@/types/ProductType";
import Image from "next/image";
import Product from "./components/Product";

async function getProducts() {
  const res = await fetch("https://fakestoreapi.com/products");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const products = await getProducts();

  return (
    <main className="bg-slate-700 h-screen p-16">
      <div className="max-w-7xl mx-auto pt-8 px-8 xl:px-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 xl:gap-6">
          {products.map((product: ProductType) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </div>
    </main>
  );
}
