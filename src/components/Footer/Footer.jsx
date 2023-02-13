import React from "react";
import { NavLink } from "react-router-dom";
import { urlFor } from "../../Functions/Functions";
import { SocialLinks } from "../SocialIcon/SocialLinks";

export const Footer = ({ footer, logo }) => {
  return (
    footer && (
      <footer>
        <NavLink to="/" className="my-2">
          <img src={urlFor(logo?.asset._ref)} alt="Storey Real Estate Logo" />
        </NavLink>

        {/* Social Icons */}
        <SocialLinks social={footer.socialLinks} />

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
