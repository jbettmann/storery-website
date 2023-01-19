import React, { useState, useEffect } from "react";

import sanityClient from "../../client";
import { MyVideo } from "../MyVideo/MyVideo";
import { Footer } from "../Footer/Footer";

import "./Home.scss";

export const Home = ({ setLogo }) => {
  const [home, setHome] = useState(null);
  const [aboutVid, setAboutVid] = useState(null);

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
      })
      .catch(console.error);
  }, [home?.homeAbout.videoUrl]);

  if (!home) return <div>Loading...</div>;
  return (
    <div>
      <MyVideo url={aboutVid} />
      <Footer logo={home.logo} />
    </div>
  );
};
