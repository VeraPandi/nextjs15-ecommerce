import { prisma } from "@/lib/prisma";
import "server-only";

export async function fetchProducts(
  itemsPerPage: number,
  currentPage: number,
  heroItem: number
) {
  try {
    const products = await prisma.product.findMany({
      orderBy: {
        createdAt: "desc",
      },
      skip:
        currentPage === 1
          ? (itemsPerPage + heroItem) * (currentPage - 1)
          : itemsPerPage * (currentPage - 1),
      take: 7,
    });

    return products;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error('Failed to fetch "products" data');
  }
}

export async function fetchProductById(id: string) {
  try {
    const product = await prisma.product.findUnique({ where: { id } });

    return product;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error('Failed to fetch "product by ID" data');
  }
}

export async function fetchFilteredProducts(query: string) {
  try {
    const products = await prisma.product.findMany({
      where: {
        OR: [
          { name: { contains: query, mode: "insensitive" } },
          { description: { contains: query, mode: "insensitive" } },
        ],
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return products;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error('Failed to fetch "filtered products" data');
  }
}
