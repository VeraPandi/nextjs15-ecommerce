import Hero from "@/app/ui/components/cards/Hero";
import { fetchProducts } from "@/lib/data";
import { Suspense } from "react";
import { Card } from "./ui/components/cards/Card";
import { CardsSkeleton, HeroSkeleton } from "./ui/skeletons";

export default async function Home() {
  const products = await fetchProducts();

  return (
    <main className="m-auto p-4 lg:max-w-[90vw]">
      <Suspense fallback={<HeroSkeleton />}>
        <Hero value={products[0]} />
      </Suspense>

      <section className="grid grid-cols-1 gap-5 md:grid md:grid-cols-2 xl:grid-cols-3">
        <Suspense fallback={<CardsSkeleton />}>
          {products.map((el) => <Card value={el} key={el.id} />).slice(1)}
        </Suspense>
      </section>
    </main>
  );
}
