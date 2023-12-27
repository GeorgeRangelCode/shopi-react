import { useState, useEffect } from "react";
import { Card } from "../../components/Card";
import { Layout } from "../../components/Layout";
import { fetchProducts } from "../../api";
import { PRODUCTS_RESOURCE } from "../../constants";
import { Product } from "../../interfaces";
import { ListOfCard } from "../../components/ListOfCard";
import { ProductDetail } from "../../components/ProductDetail";

export const Home = () => {
  const [items, setItems] = useState<Product[]>();

  const getProducts = async () => {
    const result = await fetchProducts(PRODUCTS_RESOURCE);
    setItems(result);
  };

  useEffect(() => {
    getProducts();
  }, []);

  if (!items) return null;

  return (
    <Layout>
      <ListOfCard>
        {items.map(({ id, category, images, price, title }) => (
          <Card
            key={id}
            category={category}
            images={images}
            price={price}
            title={title}
          />
        ))}
      </ListOfCard>
      <ProductDetail />
    </Layout>
  );
};
