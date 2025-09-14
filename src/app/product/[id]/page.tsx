import { fetchProductById } from "@/lib/data";
import { Metadata } from "next";
import Image from "next/image";
import NotFound from "./not-found";

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { id } = await params;
  const product = await fetchProductById(id);

  return {
    title: product?.name,
    description: product?.description,
    openGraph: {
      images: product?.imageUrl,
    },
  };
}

export default async function Page({ params }: ProductPageProps) {
  const { id } = await params;
  const product = await fetchProductById(id);

  return product ? (
    <main className="flex grow flex-col justify-center p-4 min-[1025px]:flex-row min-[1025px]:items-center">      
      <div>
        <Image
          src={product.imageUrl}
          width={1000}
          height={760}          
          className="rounded-lg shadow-2xl sm:w-1/2 min-[1025px]:w-auto"
          alt={product.name}
        />
      </div>
      <div className="pt-8 min-[1025px]:p-8">
        <h1 className="text-5xl font-bold">{product.name}</h1>
        <div className="card-actions pt-2">
          <div className="badge mt-3 border-gray-200">
            {product.price.toLocaleString("fr", {
              style: "currency",
              currency: "EUR",
            })}
          </div>
        </div>
        <p className="py-6">{product.description}</p>

        <button className="btn btn-primary size-fit text-base">
          Ajouter au panier
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
        </button>
      </div>
    </main>
  ) : (
    <NotFound />
  );
}