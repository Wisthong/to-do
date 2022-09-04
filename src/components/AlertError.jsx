import React from "react";

export const AlertError = ({children}) => {
  return (
    <div className="bg-red-600 text-center text-white font-bold p-2 mb-5 rounded">
      <p>{children}</p>
    </div>
  );
};
