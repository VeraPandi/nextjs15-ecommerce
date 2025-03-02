import { prisma } from "@/lib/prisma";
import "server-only";

export async function fetchProducts() {
  try {
    const products = await prisma.product.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return products;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error('Failed to fetch "product" data');
  }
}
