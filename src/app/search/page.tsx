import { fetchFilteredProducts } from "@/lib/data";
import { Metadata } from "next";
import { Card } from "../ui/components/cards/Card";
import NotFound from "./not-found";

interface SearchPageProps {
  searchParams: Promise<{ page?: string; query?: string }>;
}

export async function generateMetadata({
  searchParams,
}: SearchPageProps): Promise<Metadata> {
  const resolveParams = await searchParams;
  const query = resolveParams.query || "";
  return {
    title: `Recherche : "${query}" | Flowmazon`,
  };
}

export default async function Page({ searchParams }: SearchPageProps) {
  const resolveParams = await searchParams;
  const query = resolveParams.query || "";
  const products = await fetchFilteredProducts(query);

  return products.length !== 0 ? (
    <main className="m-auto grow p-4 text-base lg:max-w-[90vw]">
      <section className="grid grid-cols-1 gap-5 md:grid md:grid-cols-2 xl:grid-cols-3">
        {products.map((el) => (
          <Card value={el} key={el.id} />
        ))}
      </section>
    </main>
  ) : (
    <NotFound />
  );
}
