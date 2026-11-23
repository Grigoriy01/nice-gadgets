import { Product, ProductDetails } from '@/shared/types';

async function request<T>(url: string): Promise<T> {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Failed to fetch data from ${url}`);
  }

  return (await response.json()) as T;
}

const detailsCache = new Map<string, ProductDetails[]>();
let productsCache: Promise<Product[]> | null = null;

export async function getProducts(): Promise<Product[]> {
  if (productsCache) {
    return productsCache;
  }

  try {
    productsCache = request<Product[]>(
      `${import.meta.env.BASE_URL}api/products.json`,
    );

    return await productsCache;
  } catch (error) {
    productsCache = null;

    throw error;
  }
}

export async function getProductDetails(
  category: string,
): Promise<ProductDetails[]> {
  const cached = detailsCache.get(category);

  if (cached) {
    return cached;
  }

  const data = await request<ProductDetails[]>(
    `${import.meta.env.BASE_URL}api/${category}.json`,
  );

  detailsCache.set(category, data);

  return data;
}
