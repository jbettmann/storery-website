import React, { useState, useEffect } from "react";

import sanityClient from "../../client";
import { MyVideo } from "../MyVideo/MyVideo";

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
    <div className="w-200">
      <h1 className="text-5xl underline decoration-double decoration-4 underline-offset-8 decoration-red-500 ">
        This is the h1 Title ill be styling
      </h1>
      <p className="text-base leading-normal truncate hover:whitespace-normal ">
        This is the paragraph text ill be styling there are alot of words more
        then I like to have things there This is the paragraph text ill be
        styling there are alot of words more then I like to have things there
      </p>
      <MyVideo url={aboutVid} />
    </div>
  );
};
