import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

export const NavBar = ({ nav }) => {
  const firstHalf = nav.slice(0, nav.length / 2);
  const lastHalf = nav.slice(nav.length / 2);
  return (
    <header>
      <nav>
        {firstHalf.map((item) => {
          return <NavLink to={`/${item.slug.current}`}>{item.title}</NavLink>;
        })}

        <NavLink to="/">LOGO</NavLink>

        {lastHalf.map((item) => {
          return <NavLink to={`/${item.slug.current}`}>{item.title}</NavLink>;
        })}
      </nav>
      {/* <div className="inline-flex py-3 px-3 my-6">
          <SocialIcon
            url="https://twitter.com/gordev5"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://github.com/jbettmann/"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://www.linkedin.com/in/jordan-bettmann/"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          /> 
        </div> */}
    </header>
  );
};
