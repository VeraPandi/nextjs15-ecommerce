import { Product } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

interface HeroProps {
  value: Product;
}

export default function Hero({ value }: HeroProps) {
  return (
    <section>
      <div className="flex flex-col p-8 md:flex-row">
        <Image
          src={value.imageUrl}
          width={384}
          height={575}
          className="rounded-lg shadow-2xl"
          alt={value.name}
        />
        <div className="flex flex-col justify-center py-5 md:p-5 md:pr-0">
          <h1 className="text-5xl font-bold">{value.name}</h1>
          <p className="py-6">{value.description}</p>
          <Link
            href={"/product/" + value.id}
            className="btn btn-primary size-fit text-base"
          >
            Voir le produit
          </Link>
        </div>
      </div>
    </section>
  );
}
