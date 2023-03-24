import React from "react";
import { Link } from "react-router-dom";
import { urlFor } from "../../Functions/Functions";

export const BuyToolCard = ({ card }) => {
  return (
    <a
      href={card.url}
      aria-label={`Go to ${card.name} website`}
      target="_blank"
      className={`card px-8 max-w-sm`}
      rel="noreferrer"
    >
      {/* Image or Logo */}
      <div className="flex justify-center flex-auto w-1/2 md:w-full h-52 mb-6 overflow-hidden ">
        <img
          src={urlFor(card.mainImage?.asset._ref)}
          alt={card.slug?.current}
          className={`mx-auto w-full h-full object-cover`}
        />
      </div>

      {/* Text/Info container */}
      <div
        className={`flex flex-col flex-initial items-start justify-center gap-6 p-3 lg:p-0 h-10/12 w-full text-left`}
      >
        <div>
          {card.company ? (
            <h3 className="text-base md:text-xl font-bold text-storeyGreen-100 ">
              {card.company}
            </h3>
          ) : null}
          <h4 className="font-bold">{card.name}</h4>
        </div>
        {card.company ? (
          <div className="flex flex-col justify-start">
            <p className="m-0 p-0">{card.bio}</p>
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
            className="bg-transparent text-storeyGreen-100 "
            href={card.url}
            target="_blank"
            aria-label="Learn more..."
            rel="noreferrer"
          >
            {card.button ? card.button : "Learn more..."}
          </a>
        )}
      </div>
    </a>
  );
};
