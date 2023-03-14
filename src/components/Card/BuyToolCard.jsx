import React from "react";
import { Link } from "react-router-dom";
import { urlFor } from "../../Functions/Functions";

export const BuyToolCard = ({ card, style }) => {
  return (
    <a
      href={card.url}
      aria-label={`Go to ${card.name} website`}
      target="_blank"
      className={`card`}
      rel="noreferrer"
    >
      <div className="flex-auto w-full h-full overflow-hidden flex justify-center items-center ">
        <img
          src={urlFor(card.mainImage?.asset._ref)}
          alt={card.slug?.current}
          className={`mx-auto ${style ? style.img : " w-52 "}`}
        />
      </div>

      <div
        className={`flex flex-col flex-initial sm:items-start lg:justify-between justify-between lg:items-center items-center p-3 lg:p-0 ${
          style ? style.body : "h-full"
        }`}
      >
        <div>
          {card.company ? (
            <h3 className="my-4 text-base md:text-xl font-medium">
              {card.company}
            </h3>
          ) : null}
          <h3>{card.name}</h3>
        </div>
        {card.company ? (
          <div>
            <p>{card.position}</p>
            <a
              className=""
              aria-label={`Call ${card.name} at ${card.phone}`}
              href={`tel:${card.phone}`}
            >
              {card.phone}
            </a>
            <a
              className=""
              aria-label={`Email ${card.nam} at ${card.email}`}
              href={`mailto:${card.email}`}
            >
              {card.email}
            </a>
          </div>
        ) : (
          <a
            className="btn bg-transparent text-storeyGreen-100 border border-storeyGreen-100"
            href={card.url}
            aria-label="Read more..."
          >
            {card.button ? card.button : "Read more..."}
          </a>
        )}
      </div>
    </a>
  );
};
