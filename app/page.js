"use client";

import Hero from "./_components/Hero";
import FeaturedProducts from "./_components/FeaturedProducts";
import Promotion from "./_components/Promotion";
import { Suspense } from "react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Hero />
      <Promotion />
      <Suspense
        fallback={
          <div>
            <spa>Loading products...</spa>
          </div>
        }>
        <FeaturedProducts />
      </Suspense>
    </main>
  );
}
