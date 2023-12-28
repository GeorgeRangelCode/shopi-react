import React, { useContext } from "react";
import { CardProduct } from "../../interfaces";
import { ShoppingCartContext } from "../../context";
import { PlusIcon } from "@heroicons/react/24/solid";

export const Card: React.FC<CardProduct> = ({
  category,
  images,
  price,
  title,
}) => {
  const { setCount, setIsProductDetail, setProductToShow } =
    useContext(ShoppingCartContext);

  const showProduct = () => {
    setIsProductDetail(true);
    setProductToShow({
      category,
      images,
      price,
      title,
    });
  };

  return (
    <div className="bg-white cursor-pointer w-56 h-60 rounded-lg">
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">
          {category.name}
        </span>
        <img
          className="w-full h-full object-cover rounded-lg"
          src={images?.[0]}
          alt="headphones"
        />
        <div
          className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1"
          onClick={() => setCount((prev) => prev + 1)}
        >
          <PlusIcon
            className="h-6 w-6 text-black"
            onClick={(e) => {
              e.stopPropagation();
              showProduct();
            }}
          />
        </div>
      </figure>
      <p className="flex justify-between">
        <span className="text-sm font-light">{title}</span>
        <span className="text-lg font-medium">${price}</span>
      </p>
    </div>
  );
};
