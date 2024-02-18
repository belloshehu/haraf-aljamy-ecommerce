"use client";

import Hero from "./_components/Hero";
import FeaturedProducts from "./_components/FeaturedProducts";
import Promotion from "./_components/Promotion";
import { Suspense } from "react";
import { Values } from "./_components/Values";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Hero />
      <Suspense
        fallback={
          <div>
            <span>Loading products...</span>
          </div>
        }>
        <FeaturedProducts />
      </Suspense>
      <Values />
      <Promotion />
    </main>
  );
}
