import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { urlFor } from "../../Functions/Functions";
import { Divide as Hamburger } from "hamburger-react";

export const NavBar = ({ nav, logo }) => {
  const [isOpen, setOpen] = useState(false);

  const firstHalf = nav.slice(0, nav.length / 2);
  const lastHalf = nav.slice(nav.length / 2);

  const handleClick = () => {
    setOpen(!isOpen);
  };
  return (
    <header className="mx-auto p-4">
      <nav className="sm:flex hidden">
        <div className="w-1/3 flex flex-auto justify-around items-center">
          {/* First half */}

          {firstHalf.map((item, i) => {
            return (
              <NavLink
                key={i}
                className="flex-auto text-center flex-wrap text-storeyGreen-100 items-center px-1 leading-tight"
                to={`/${item.slug.current}`}
              >
                {item.title}
              </NavLink>
            );
          })}
        </div>

        {/* Logo */}
        <div className="flex justify-center flex-auto w-1/3 px-1 ">
          <NavLink className="" to="/">
            <img
              src={urlFor(logo?.asset?._ref)}
              alt="Storey Real Estate Logo"
            />
          </NavLink>
        </div>

        {/* Second Half */}
        <div className="w-1/3 flex flex-auto justify-around items-center px-1">
          {lastHalf.map((item, i) => {
            return (
              <NavLink
                key={i}
                className="text-center flex-wrap text-yellow-600"
                to={`/${item.slug.current}`}
              >
                {item.title}
              </NavLink>
            );
          })}
        </div>
      </nav>
      <nav className="flex relative justify-between w-full sm:hidden">
        {/* Hamburger */}
        <Hamburger
          duration={0.8}
          className=""
          label="Show menu"
          toggled={isOpen}
          toggle={setOpen}
        />
        {isOpen && (
          <div className="absolute top-[4rem] grid gap-3 z-10 bg-slate-200 p-2 rounded-lg divide-y divide-slate-600 shadow-lg">
            {/* First half */}
            {nav.map((item, i) => {
              return (
                <NavLink
                  key={i}
                  className="text-center text-storeyGreen-100  px-1 leading-tight isOpen:translate-y-1 duration-300"
                  to={`/${item.slug.current}`}
                  onClick={handleClick}
                >
                  {item.title}
                </NavLink>
              );
            })}
          </div>
        )}

        {/* Logo */}
        <div className="flex max-w-[200px] flex-auto justify-center items-center px-1 ">
          <NavLink className="flex-auto" to="/">
            <img
              className="flex-auto"
              src={urlFor(logo?.asset?._ref)}
              alt="Storey Real Estate Logo"
            />
          </NavLink>
        </div>
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
