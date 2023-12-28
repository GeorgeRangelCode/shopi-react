import React, {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";
import { CardProduct } from "../interfaces";

interface ShoppingCartContextProps {
  count: number;
  setCount: Dispatch<SetStateAction<number>>;
  isProductDetail: boolean;
  setIsProductDetail: Dispatch<SetStateAction<boolean>>;
  productToShow: CardProduct;
  setProductToShow: Dispatch<SetStateAction<CardProduct>>;
}

export const ShoppingCartContext = createContext<ShoppingCartContextProps>({
  count: 0,
  setCount: () => {},
  isProductDetail: false,
  setIsProductDetail: () => {},
  productToShow: {
    title: "",
    price: 0,
    images: [],
    category: {
      name: "",
    },
  },
  setProductToShow: () => {},
});

interface ShoppingCartProviderProps {
  children: ReactNode;
}

export const ShoppingCartProvider: React.FC<ShoppingCartProviderProps> = ({
  children,
}) => {
  const [count, setCount] = useState(0);
  const [isProductDetail, setIsProductDetail] = useState(false);
  const [productToShow, setProductToShow] = useState({
    title: "",
    price: 0,
    images: [],
    category: {
      name: "",
    },
  });

  return (
    <ShoppingCartContext.Provider
      value={{
        count,
        setCount,
        isProductDetail,
        setIsProductDetail,
        productToShow,
        setProductToShow,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
