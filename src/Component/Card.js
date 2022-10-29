import React from "react";

const Card = ({ title, children }) => {
  return (
    <div className="overflow-hidden shadow-lg sm:rounded-md">
      <div className="bg-slate-200 p-3">
        <h2 className="font-bold">{title}</h2>
      </div>
      <div className="bg-white px-4 py-5 sm:p-6 ">{children}</div>
    </div>
  );
};

export default Card;
