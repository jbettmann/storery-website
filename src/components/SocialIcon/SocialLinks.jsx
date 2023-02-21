import React from "react";
import { SocialIcon } from "react-social-icons";
import zillow from "../../assets/icons/zillow-icon.svg";
import zillowWhite from "../../assets/icons/zillow-icon-white.svg";

export const SocialLinks = ({ social, style }) => {
  console.log(zillow);
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
              style={
                style
                  ? style.zillow
                  : { height: 50, width: 50, img: { fill: "#0c4c26" } }
              }
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="social-icon"
                src={style ? zillowWhite : zillow}
                style={{ backgroundColor: style?.zillow.backgroundColor }}
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
              bgColor={style ? style.backgroundColor : "#0c4c26"}
              fgColor={style ? style.fill : "#fff"}
            />
          )
        )}
    </div>
  );
};
