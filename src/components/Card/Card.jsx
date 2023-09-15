import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { urlFor } from "../../Functions/Functions";

export const Card = ({ item, style, urlNav, beforeAfter, isActive }) => {
  const [showBefore, setShowBefore] = useState(true);
  useEffect(() => {
    if (isActive) {
      const interval = setInterval(() => {
        setShowBefore((prev) => !prev);
      }, 3000); // Toggle every 3 seconds

      return () => clearInterval(interval); // Cleanup on component unmount or when inactive
    }
  }, [isActive]);
  console.log({ beforeAfter, item, isActive });
  return beforeAfter ? (
    <div className="relative">
      {/* Before */}
      <img
        src={urlFor(item.beforeImage.asset._ref)}
        alt="Before"
        className={`absolute top-0 w-full h-full object-cover transition-opacity duration-1000 ${
          showBefore ? "opacity-100" : "opacity-0"
        }`}
      />
      {/* After */}
      <img
        src={urlFor(item.afterImage.asset._ref)}
        alt="After"
        className={`absolute top-0 w-full h-full object-cover transition-opacity duration-1000 ${
          showBefore ? "opacity-0" : "opacity-100"
        }`}
      />
      {/* Other parts of the CardComponent, if any */}
    </div>
  ) : (
    <NavLink
      to={urlNav ? `${urlNav}/${item.slug?.current}` : `/${item.slug?.current}`}
      className={`card ${
        style
          ? style.card
          : "sm:flex-row lg:flex-col 2xl:p-12 px-6 sm:text-left lg:text-center lg:h-[526px] sm:h-auto"
      }`}
    >
      <div className="flex-auto w-full h-full overflow-hidden flex justify-center items-center relative">
        <img
          src={urlFor(item.mainImage?.asset._ref)}
          alt={item.slug?.current}
          className={`object-contain object-center max-w-full max-h-full ${
            style ? style.img : " w-auto "
          }`}
        />
        {item.projectType && (
          <p className="tags text-xs p-1 px-2 rounded-md absolute top-2 left-0">
            {item.projectType}
          </p>
        )}
      </div>

      <div
        className={`flex flex-col flex-initial sm:items-start lg:justify-between justify-between lg:items-center items-center p-3 lg:p-0 ${
          style ? style.body : "h-full"
        }`}
      >
        {style ? (
          <h3 className="my-4 text-base md:text-xl font-medium">
            {item.title}
          </h3>
        ) : (
          <h1 className="mt-6">{item.title}</h1>
        )}
        {item.sub ? <p className="pl-0">{item.sub}</p> : null}
        <NavLink
          className="btn bg-none bg-transparent text-storeyGreen-100 border border-storeyGreen-100"
          to={
            urlNav
              ? `${urlNav}/${item.slug?.current}`
              : `/${item.slug?.current}`
          }
          aria-label="Request a Call link"
        >
          {item.button ? item.button : "Read more..."}
        </NavLink>
        {/* {item.publishedAt ? (
          <p className="absolute p-2 m-0 bottom-0 left-1 text-gray-500 text-xs sm:text-sm italic">
            {new Date(item.publishedAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </p>
        ) : (
          ""
        )} */}
      </div>
    </NavLink>
  );
};
