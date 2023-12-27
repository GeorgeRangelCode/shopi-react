import React from "react";

type LayoutProps = {
  children: JSX.Element | JSX.Element[] | string;
};

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return <main className="flex flex-col items-center  mt-20">{children} </main>;
};
