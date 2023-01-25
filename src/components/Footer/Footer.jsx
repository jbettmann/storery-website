import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import sanityClient from "../../client";
import { urlFor } from "../../Functions/Functions";

export const Footer = ({ logo }) => {
  const [footer, setFooter] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == 'footer']{
            title,
            socialLinks,
            name,
            phone,
            email,
         }`
      )
      .then((data) => {
        let [newData] = data;
        setFooter(newData);
      })
      .catch(console.error);
  }, []);
  // console.log(logo);
  return (
    footer && (
      <div>
        <NavLink className="" to="/">
          <img src={urlFor(logo.asset?._ref)} alt="Storey Real Estate Logo" />
        </NavLink>
      </div>
    )
  );
};
