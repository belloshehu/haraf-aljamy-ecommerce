"use client";
import { useSelector } from "react-redux";
// import { products } from "../data";
import Product from "./Product";

export default function FeaturedProducts() {
  const { products } = useSelector((store) => store.product);
  return (
    <section className="min-h-screen w-full p-5 lg:p-24">
      <h1 className="bg-gradient-to-r text-transparent from-green-800 via-black to-cyan-500 font-extrabold bg-clip-text text-3xl lg:text-7xl my-5 text-center md:text-center">
        Featured products
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <Product {...product} key={index} />
        ))}
      </div>
    </section>
  );
}
