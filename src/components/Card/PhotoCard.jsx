import React, { useState, useEffect } from "react";
import { urlFor } from "../../Functions/Functions";

export const PhotoCard = ({ item, beforeAfter, isActive }) => {
  const [showBefore, setShowBefore] = useState(true);
  useEffect(() => {
    console.log({ item });
    if (isActive) {
      const interval = setInterval(() => {
        setShowBefore((prev) => !prev);
      }, 3000); // Toggle every 3 seconds

      return () => clearInterval(interval); // Cleanup on component unmount or when inactive
    }
  }, [isActive]);
  return (
    <div className="flex-auto w-1/2 h-full overflow-hidden flex justify-center items-center p-2 sm:p-0 bg-white rounded-2xl">
      <div className="relative w-full md:w-5/6 lg:w-2/3 xl:w-1/2 sm:py-8 sm:px-6">
        {/* Before */}
        <img
          src={urlFor(item.beforeImage.asset._ref)}
          alt={" Before"}
          className={`absolute top-0 w-full h-full object-cover transition-opacity duration-1000 ${
            showBefore ? "opacity-100" : "opacity-0"
          }`}
        />
        {/* After */}
        <img
          src={urlFor(item.afterImage.asset._ref)}
          alt={"  After"}
          className={`absolute top-0 w-full h-full object-cover transition-opacity duration-1000 ${
            showBefore ? "opacity-0" : "opacity-100"
          }`}
        />
        {/* Other parts of the CardComponent, if any */}
      </div>
    </div>
  );
};
