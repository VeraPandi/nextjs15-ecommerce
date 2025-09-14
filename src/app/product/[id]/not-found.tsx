"use client";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="m-auto flex min-h-[500px] grow flex-col items-center justify-center p-4 lg:max-w-[90vw]">
      <h1 className="text-5xl font-bold">404</h1>
      <h2 className="p-5 text-center italic">
        Oups ! Cette page est introuvable
      </h2>

      <Link
        href="/"
        className="btn btn-ghost m-4 size-fit bg-base-300 text-base"
      >
        Revenir à l&apos;accueil
      </Link>
    </main>
  );
}
