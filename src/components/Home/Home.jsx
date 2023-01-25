import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import sanityClient from "../../client";
import { MyVideo } from "../MyVideo/MyVideo";

import "./Home.scss";

export const Home = ({ setLogo, contact }) => {
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
          logo
      }`
      )

      .then((data) => {
        let [newData] = data;
        setHome(newData);
        setAboutVid(newData.homeAbout.videoUrl);
        setLogo(newData.logo);
        setCardArry(newData.cards);
      })
      .catch(console.error);
  }, [home?.homeAbout.videoUrl]);
  if (!home) return <div>Loading...</div>;
  return (
    <div>
      {/* Hero */}
      <header>
        <img src="" alt="" />
        <h1></h1>
        <h5></h5>
        <NavLink to={`/${contact}`} aria-label="Request a Call link">
          Request A Call
        </NavLink>
      </header>

      {/* Cards */}
      {cards && (
        <section>
          {cards.map((card, i) => {
            return (
              <div key={i}>
                <img src={card?.image} alt="" />
                <h1>{card.title}</h1>
                <p>{card?.body}</p>
              </div>
            );
          })}
        </section>
      )}
      {/* <MyVideo url={aboutVid} /> */}
    </div>
  );
};
