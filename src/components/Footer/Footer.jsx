import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";
import sanityClient from "../../client";
import { urlFor } from "../../Functions/Functions";

export const Footer = ({ logo }) => {
  const [footer, setFooter] = useState(null);
  const [social, setSocial] = useState(null);

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
        setSocial(newData.socialLinks);
      })
      .catch(console.error);
  }, []);

  return (
    footer && (
      <footer>
        <NavLink to="/" className="my-2">
          <img src={urlFor(logo?.asset._ref)} alt="Storey Real Estate Logo" />
        </NavLink>

        {/* Social Icons */}
        <div className="flex justify-center my-2 flex-wrap">
          {social.map((link) => (
            <SocialIcon
              key={link._key}
              url={link.url}
              className="m-3"
              target="_blank"
              bgColor="#0c4c26"
              fgColor="#fff"
            />
          ))}
        </div>

        {/* Contact Info */}
        <div>
          <p className="hidden md:block">
            {footer.name} |{" "}
            <a className="footer-links" href={`tel:${footer.phone}`}>
              {footer.phone}
            </a>{" "}
            |{" "}
            <a className="footer-links" href={`mailto:${footer.email}`}>
              {footer.email}
            </a>
          </p>
          <p className="md:hidden text-center">
            {footer.name} <br />
            <a className="footer-links" href={`tel:${footer.phone}`}>
              {footer.phone}
            </a>
            <br />{" "}
            <a className="footer-links" href={`mailto:${footer.email}`}>
              {footer.email}
            </a>
            <br />
          </p>
          <p className="m-0 text-sm">
            © 2023{" "}
            <a
              target="_blank"
              href="https://www.jordanbettmann.com"
              rel="noreferrer"
            >
              Jordan Bettmann
            </a>
          </p>
        </div>
      </footer>
    )
  );
};
