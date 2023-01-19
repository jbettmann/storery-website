import React, { useState, useEffect } from "react";

import sanityClient from "../../client";
import { MyVideo } from "../MyVideo/MyVideo";
import { Footer } from "../Footer/Footer";

export const Home = () => {
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
      }`
      )

      .then((data) => {
        let [newData] = data;
        setHome(newData);
        setAboutVid(newData.homeAbout.videoUrl);
      })
      .catch(console.error);
  }, [home?.homeAbout.videoUrl]);
  console.log(aboutVid);
  if (!home) return <div>Loading...</div>;
  return (
    <div>
      <MyVideo url={aboutVid} />
    </div>
  );
};
