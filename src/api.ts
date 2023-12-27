import { API_URL } from "./constants";
import { Product } from "./interfaces";

export const fetchProducts = async (endpoint: string): Promise<Product[]> => {
  const result: Response = await fetch(`${API_URL}${endpoint}`);

  try {
    return await result.json();
  } catch (error) {
    throw new Error("Something went horrible wrong!");
  }
};
