import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";
import { urlFor } from "../../Functions/Functions";
import { getFooter } from "../../Functions/Functions";
import zillow from "../../assets/icons/zillow-icon.svg";

export const Footer = ({ logo }) => {
  const [footer, setFooter] = useState(null);
  const [social, setSocial] = useState(null);

  useEffect(() => {
    getFooter(setFooter, setSocial);
  }, []);

  return (
    footer && (
      <footer>
        <NavLink to="/" className="my-2">
          <img src={urlFor(logo?.asset._ref)} alt="Storey Real Estate Logo" />
        </NavLink>

        {/* Social Icons */}
        <div className="flex justify-center my-2 flex-wrap">
          {social.map((link) =>
            link.socialNetwork === "Zillow" ? (
              <a
                key={link._key}
                href={link.url}
                className="m-3 flex justify-center"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="social-icon"
                  src={zillow}
                  alt="zillow icon link"
                />
              </a>
            ) : (
              <SocialIcon
                key={link._key}
                url={link.url}
                className="m-3"
                target="_blank"
                bgColor="#0c4c26"
                fgColor="#fff"
              />
            )
          )}
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
          <p className="text-center md:hidden ">
            {footer.name}
            <br />
            <a className="footer-links" href={`tel:${footer.phone}`}>
              {footer.phone}
            </a>{" "}
            <br />
            <a className="footer-links" href={`mailto:${footer.email}`}>
              {footer.email}
            </a>
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
