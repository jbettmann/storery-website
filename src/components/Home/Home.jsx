import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import sanityClient from "../../client";
import { urlFor } from "../../Functions/Functions";

import { MyVideo } from "../MyVideo/MyVideo";

import "./Home.scss";

export const Home = ({ contact }) => {
  const [home, setHome] = useState(null);
  const [cards, setCards] = useState(null);
  const [aboutVid, setAboutVid] = useState(null);

  const setCardArry = (cards) => {
    let [...newCards] = Object.values(cards);
    setCards(newCards.filter((doc, i) => typeof doc === "object"));
    console.log("cards loaded");
  };
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == 'home']{
          title,
          slug,
          hero,
          cards,
          homeAbout,
          language
      }`
      )

      .then((data) => {
        let [newData] = data;
        setHome(newData);
        setAboutVid(newData.homeAbout.videoUrl);
        setCardArry(newData.cards);
      })
      .catch(console.error);
  }, [home?.homeAbout.videoUrl]);
  console.log(home);
  if (!home) return <div>Loading...</div>;
  return (
    <div>
      {/* Hero */}
      <header className="my-8 relative text-white">
        <div className=" h-64 md:h-96 lg:h-[30rem] overflow-hidden object-center ">
          <img
            src={urlFor(home.hero?.mainImage.asset._ref)}
            alt="Beautiful sunny brick home surrounded by green trees that Storey owns"
            className="mx-auto -translate-y-1/4 md:-translate-y-1/4 lg:-translate-y-1/3 2xl:-translate-y-1/2 w-full brightness-50 "
          />
          <article className="absolute top-0 left-0 w-full h-full px-6 flex flex-col text-center justify-center items-center flex-auto">
            {home.hero.title.split("\n").map((t) => (
              <h1 className="mb-0 text-2xl md:text-4xl ">{t}</h1>
            ))}
            <h5>{home.hero.body}</h5>
            <NavLink
              className="btn mt-8"
              to={`/${contact}`}
              aria-label="Request a Call link"
            >
              Request A Call
            </NavLink>
          </article>
        </div>
      </header>

      {/* Cards */}
      {cards && (
        <section className="flex flex-col items-center lg:flex-row gap-10 mx-9 justify-center">
          {cards.map((card, i) => {
            return (
              <div
                key={i}
                className=" bg-white sm:text-left lg:text-center text-center w-full flex-auto max-w-2xl  sm:h-auto lg:h-[526px] h-auto py-8 2xl:p-16 px-6 flex sm:flex-row lg:flex-col flex-col items-center lg:justify-between justify-between"
              >
                <img
                  src={urlFor(card?.mainImage.asset._ref)}
                  alt={card.slug?.current}
                  className="mx-auto w-52 flex-auto"
                />
                <div className="flex flex-col flex-initial h-full sm:items-start lg:justify-between justify-between lg:items-center items-center p-3 lg:p-0">
                  <h1>{card.title}</h1>
                  <p className="pl-0">{card?.body}</p>
                  <NavLink
                    className="btn bg-transparent text-storeyGreen-100 border border-storeyGreen-100"
                    // to={`/${contact}`}
                    aria-label="Request a Call link"
                  >
                    {card.button}
                  </NavLink>
                </div>
              </div>
            );
          })}
        </section>
      )}

      {/* Get To Know Us*/}
      <section className="flex flex-col items-center">
        <h1>{home.homeAbout.title}</h1>
        <p className="max-w-2xl text-center">{home.homeAbout?.body}</p>
        <MyVideo url={aboutVid} />
      </section>

      {/* Espanol Language */}
      <section className="mx-auto p-6 text-center w-fit bg-white">
        <h1>{home.language.title}</h1>
        <p>{home.language.body}</p>
      </section>
    </div>
  );
};
