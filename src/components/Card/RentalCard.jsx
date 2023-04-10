import React from "react";

export const RentalCard = ({ benefit, icon, i }) => {
  return (
    <div
      className={`card green-card hover:cursor-auto hover:transform-none h-56 360:h-48 lg:h-56 xl:h-48 px-6 py-8 max-w-sm`}
    >
      {/* Icon and Benefit Title*/}
      <div className="flex justify-center items-center flex-auto w-full  overflow-hidden mb-3 ">
        <div className="p-3 benefit-icon">{icon}</div>

        <h4 className="font-bold">{benefit.title}</h4>
      </div>

      {/* Text/Info container */}
      <p className="m-0 p-0 ">{benefit.description}</p>
    </div>
  );
};
