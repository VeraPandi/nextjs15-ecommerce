import { Product } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

interface CardProps {
  value: Product;
  key: string;
}

export function Card({ value }: CardProps) {
  const newRelease =
    Date.now() - new Date(value.createdAt).getTime() < 1000 * 60 * 60 * 24 * 7;

  return (
    <Link
      href={"/product/" + value.id}
      key={value.id}
      className="card bg-base-100 shadow-md transition-shadow hover:shadow-xl"
    >
      <figure>
        <Image
          src={value.imageUrl}
          width={1000}
          height={760}
          className="h-48 object-cover shadow-2xl"
          alt={value.name}
        />
      </figure>

      <div className="card-body">
        <h2 className="card-title">{value.name}</h2>
        {newRelease ? (
          <div className="badge badge-info h-auto">Nouveau</div>
        ) : null}
        <p>{value.description}</p>
        <div className="card-actions pt-1">
          <div className="badge border-gray-200">
            {value.price.toLocaleString("fr", {
              style: "currency",
              currency: "EUR",
            })}
          </div>
        </div>
      </div>
    </Link>
  );
}
