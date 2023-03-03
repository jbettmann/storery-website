import React from "react";
import { NavLink } from "react-router-dom";
import { urlFor } from "../../Functions/Functions";

export const Card = ({ card, i, style, urlNav }) => {
  return (
    <NavLink
      key={i}
      to={urlNav ? `${urlNav}/${card.slug.current}` : `/${card.slug.current}`}
      className={`card ${
        style
          ? style.card
          : "sm:flex-row lg:flex-col 2xl:p-12 px-6 sm:text-left lg:text-center lg:h-[526px] sm:h-auto"
      }`}
    >
      <div className="flex-auto w-full h-full overflow-hidden flex justify-center items-center">
        <img
          src={urlFor(card?.mainImage.asset._ref)}
          alt={card.slug?.current}
          className={`mx-auto ${style ? style.img : " w-52 "}`}
        />
      </div>
      <div
        className={`flex flex-col flex-initial sm:items-start lg:justify-between justify-between lg:items-center items-center p-3 lg:p-0 ${
          style ? style.body : "h-full"
        }`}
      >
        {style ? (
          <h3 className="my-4 text-base md:text-xl font-medium">
            {card.title}
          </h3>
        ) : (
          <h1 className="mt-6">{card.title}</h1>
        )}
        {card.sub ? <p className="pl-0">{card.sub}</p> : null}
        <NavLink
          className="btn bg-transparent text-storeyGreen-100 border border-storeyGreen-100"
          to={`/${card.slug.current}`}
          aria-label="Request a Call link"
        >
          {card.button ? card.button : "Read more..."}
        </NavLink>
      </div>
    </NavLink>
  );
};
