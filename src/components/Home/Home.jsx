import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { urlFor, cardArray } from "../../Functions/Functions";
import { Card } from "../Card/Card";
import { MyVideo } from "../MyVideo/MyVideo";
import { SeHabla } from "../SeHabla/SeHabla";
import { Spinner } from "../Spinner/Spinner";
import BlockContect from "@sanity/block-content-to-react";

export const Home = ({ home, contact, setSeHabla }) => {
  const [cards, setCards] = useState(null);

  useEffect(() => {
    cardArray(home?.cards, setCards);
    setSeHabla(home);
  }, [home]);

  if (!home) return <Spinner />;
  return (
    <div>
      {/* Hero */}
      <header className="my-8 relative text-white">
        <div className="h-96 lg:h-[30rem] ">
          <div className="w-full h-full overflow-hidden">
            <img
              src={urlFor(home.hero?.mainImage.asset._ref)}
              alt="Beautiful sunny brick home surrounded by green trees that Storey owns"
              className="w-full h-full object-cover brightness-50"
            />
          </div>
          <article className="absolute top-0 left-0 w-full h-full px-6 flex flex-col text-center justify-center items-center flex-auto">
            {home.hero.title.split("\n").map((t, i) => (
              <h1 key={i} className="mb-0 text-2xl md:text-4xl ">
                {t}
              </h1>
            ))}

            <BlockContect
              blocks={home.hero.body}
              projectId="k4xvtsjp"
              dataset="production"
              className="prose"
            />

            <NavLink
              className="btn mt-8"
              to={`/${contact}`}
              aria-label="Request a Call link"
            >
              {home.hero.heroButton}
            </NavLink>
          </article>
        </div>
      </header>

      {/* Cards */}
      {cards && (
        <section className="flex flex-col items-center lg:flex-row gap-10 mx-9 justify-center">
          {cards.map((card, i) => {
            return <Card key={i} item={card} />;
          })}
        </section>
      )}

      {/* Get To Know Us*/}
      <section className="flex flex-col items-center">
        <h1>{home.homeAbout.title}</h1>
        <p className="max-w-2xl text-center">{home.homeAbout?.body}</p>
        <MyVideo url={home.homeAbout.videoUrl} />
      </section>

      {/* Espanol Language */}
      <SeHabla seHabla={home} />
    </div>
  );
};
