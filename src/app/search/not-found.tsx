"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function NotFound() {
  const searchParams = useSearchParams();
  const query = searchParams.get("query");

  return (
    <main className="m-auto flex grow flex-col items-center p-4 lg:max-w-[90vw]">
      <h1 className="p-5 text-center italic">
        Aucun produit nommé &ldquo;
        <span className="font-semibold">{query}</span>
        &ldquo; n&apos;a été trouvé.
      </h1>

      <Link
        href="/"
        className="btn btn-ghost m-4 size-fit bg-base-300 text-base"
      >
        Revenir à l&apos;accueil
      </Link>
    </main>
  );
}
