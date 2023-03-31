import React from "react";
import { Link } from "react-router-dom";
import { urlFor } from "../../Functions/Functions";

export const RentalCard = ({ benefit, icon, i }) => {
  return (
    <div className={`card h-auto px-8 max-w-sm`}>
      {/* Icon and Benefit Title*/}
      <div className="flex justify-center flex-auto w-full  mb-6 overflow-hidden ">
        {/* <img
          src={icon[i]}
          alt={``}
          className={`mx-auto w-11/12 sm:w-full h-full object-cover`}
        /> */}
        <h4 className="font-bold">{benefit.title}</h4>
      </div>

      {/* Text/Info container */}

      <p className="m-0 p-0">{benefit.description}</p>
    </div>
  );
};
