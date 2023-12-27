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
}

export const ShoppingCartContext = createContext<ShoppingCartContextProps>({
  count: 0,
  setCount: () => {},
});

interface ShoppingCartProviderProps {
  children: ReactNode;
}

export const ShoppingCartProvider: React.FC<ShoppingCartProviderProps> = ({
  children,
}) => {
  const [count, setCount] = useState(0);

  return (
    <ShoppingCartContext.Provider value={{ count, setCount: setCount }}>
      {children}
    </ShoppingCartContext.Provider>
  );
};
