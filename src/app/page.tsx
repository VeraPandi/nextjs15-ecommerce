import { fetchProducts } from "@/lib/data";
import { Suspense } from "react";
import { Card } from "./ui/components/cards/Card";
import Hero from "./ui/components/cards/Hero";
import Pagination from "./ui/components/Pagination";
import { CardsSkeleton, HeroSkeleton } from "./ui/skeletons";

interface HomePageProps {
  searchParams: Promise<{ page?: string; query?: string }>;
}

export default async function Home({ searchParams }: HomePageProps) {
  const itemsPerPage = 6;
  const heroItem = 1;
  const resolveParams = await searchParams;
  const currentPage = parseInt(resolveParams.page || "1", 10);
  const products = await fetchProducts(itemsPerPage, currentPage, heroItem);

  return (
    <main className="m-auto grow p-4 text-base md:flex md:flex-col md:justify-between lg:max-w-[90vw]">
      {currentPage === 1 ? (
        <Suspense fallback={<HeroSkeleton />}>
          <Hero value={products[0]} />
        </Suspense>
      ) : null}

      <section className="grid grid-cols-1 gap-5 md:grid md:grid-cols-2 xl:grid-cols-3">
        <Suspense fallback={<CardsSkeleton />}>
          {products.map((el) => <Card value={el} key={el.id} />).slice(1)}
        </Suspense>
      </section>

      {products && (
        <Pagination currentPage={currentPage} itemsPerPage={itemsPerPage} />
      )}
    </main>
  );
}
