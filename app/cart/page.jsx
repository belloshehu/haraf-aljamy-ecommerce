"use client";

import { useSelector } from "react-redux";

export default function Cart() {
  const { carts } = useSelector((store) => store.cart);
  return (
    <section className="w-full p-5 md:p-20">
      {carts.map((product) => (
        <h1 key={product.id}>{product.name}</h1>
      ))}
    </section>
  );
}
