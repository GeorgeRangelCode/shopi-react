import { XMarkIcon } from "@heroicons/react/24/solid";
import { useContext } from "react";
import { ShoppingCartContext } from "../../context";
import "./styles.css";

export const ProductDetail = () => {
  const { setIsProductDetail, isProductDetail } =
    useContext(ShoppingCartContext);

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
            className="h-6 w-6 text-black"
            onClick={() => setIsProductDetail(false)}
          />
        </div>
      </div>
    </aside>
  );
};
