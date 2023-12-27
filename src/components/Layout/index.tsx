import React, { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return <main className="flex flex-col items-center  mt-20">{children} </main>;
};
