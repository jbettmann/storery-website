import React from "react";
import { SocialIcon } from "react-social-icons";
import zillow from "../../assets/icons/zillow-icon.svg";

export const SocialLinks = ({ social, style }) => {
  return (
    // Social Icons
    <div className="flex justify-center my-2 flex-wrap">
      {social &&
        social.map((link) =>
          link.socialNetwork === "Zillow" ? (
            <a
              key={link._key}
              href={link.url}
              className="m-3 flex justify-center"
              style={style ? style : { height: 50, width: 50 }}
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
              style={style ? style : null}
              target="_blank"
              bgColor="#fff"
              fgColor="#0c4c26"
            />
          )
        )}
    </div>
  );
};
