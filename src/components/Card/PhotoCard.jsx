import React from "react";
import { urlFor } from "../../Functions/Functions";

export const PhotoCard = ({ item }) => {
  return (
    <div className="flex-auto w-1/2 h-full overflow-hidden flex justify-center items-center p-2  sm:p-0">
      {/* <img
        src={urlFor(item.mainImage?.asset._ref)}
        alt={item.slug?.current}
        className={`mx-auto w-52 `}
      /> */}
      <img
        src={item}
        alt={item.slug?.current}
        className={`mx-auto w-full md:w-5/6 lg:w-2/3 xl:w-1/2 sm:py-8 sm:px-6  rounded-2xl sm:bg-white`}
      />
    </div>
  );
};
