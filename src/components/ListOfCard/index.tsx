import React from "react";

type ListOfCardProps = {
  children: JSX.Element | JSX.Element[] | string;
};

export const ListOfCard: React.FC<ListOfCardProps> = ({ children }) => {
  return (
    <div className="grid  gap-4 grid-cols-4 w-full max-w-screen-lg">
      {children}
    </div>
  );
};
