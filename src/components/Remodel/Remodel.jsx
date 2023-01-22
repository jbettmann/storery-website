import React from "react";

export const Remodel = () => {
  return (
    <div className=" grid grid-flow-col grid-rows-4 gap-1">
      <div className="p-6 rounded-lg  bg-sky-300 row-span-2">1</div>
      <div className="p-6 rounded-lg bg-red-600">2</div>
      <div className="p-6 rounded-lg bg-sky-300">3</div>
      <div className="p-6 rounded-lg bg-red-600 col-span-3">4</div>
      <div className="p-6 rounded-lg bg-sky-300 ">5</div>
      <div className="p-6 rounded-lg bg-red-600">6</div>
    </div>
  );
};
