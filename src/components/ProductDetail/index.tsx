import { XMarkIcon } from "@heroicons/react/24/solid";
import { useContext } from "react";
import { ShoppingCartContext } from "../../context";
import "./styles.css";

export const ProductDetail = () => {
  const { setIsProductDetail, isProductDetail, productToShow } =
    useContext(ShoppingCartContext);

  const { images, title, price, category } = productToShow;

  return (
    <aside
      className={`${
        isProductDetail ? "flex" : "hidden"
      } product-datail  flex-col fixed bg-white right-0 border border-black rounded`}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">Detail</h2>
        <div>
          <XMarkIcon
            className="h-6 w-6 text-black cursor-pointer"
            onClick={() => setIsProductDetail(false)}
          />
        </div>
      </div>
      <figure className="px-6">
        <img className="w-full h-full rounded-lg" src={images[0]} alt={title} />
      </figure>
      <p className="flex flex-col p-6">
        <span className="font-medium text-2xl mb-2">${price}</span>
        <span className="font-medium text-md">{title}</span>
        <span className="font-light text-sm">{category.name}</span>
      </p>
    </aside>
  );
};
