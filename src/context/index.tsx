import React, {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";

interface ShoppingCartContextProps {
  count: number;
  setCount: Dispatch<SetStateAction<number>>;
  isProductDetail: boolean;
  setIsProductDetail: Dispatch<SetStateAction<boolean>>;
}

export const ShoppingCartContext = createContext<ShoppingCartContextProps>({
  count: 0,
  setCount: () => {},
  isProductDetail: false,
  setIsProductDetail: () => {},
});

interface ShoppingCartProviderProps {
  children: ReactNode;
}

export const ShoppingCartProvider: React.FC<ShoppingCartProviderProps> = ({
  children,
}) => {
  const [count, setCount] = useState(0);
  const [isProductDetail, setIsProductDetail] = useState(false);

  return (
    <ShoppingCartContext.Provider
      value={{ count, setCount, isProductDetail, setIsProductDetail }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
