"use client";
import Link from "next/link";

export default function Error() {
  return (
    <main className="m-auto flex grow flex-col items-center p-4 lg:max-w-[90vw]">
      <h1 className="p-5 text-center italic">
        Quelque chose n&apos;a pas fonctionné. Veuillez réessayer.
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
