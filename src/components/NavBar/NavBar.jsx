import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { urlFor } from "../../Functions/Functions";
import { Divide as Hamburger } from "hamburger-react";

export const NavBar = ({ nav, logo }) => {
  // ref for hamburger menu
  const ref = useRef(null);

  const [isOpen, setOpen] = useState(false);

  const firstHalf = nav.slice(0, nav.length / 2);
  const lastHalf = nav.slice(nav.length / 2);

  const handleClick = (e) => {
    setOpen(!isOpen);
    console.log(e.target);
  };

  useEffect(() => {
    // closes menu when clicked outside of menu
    function handleHamMenuClick(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(!isOpen);
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleHamMenuClick);
    } else {
      document.removeEventListener("mousedown", handleHamMenuClick);
    }
    return () => {
      document.removeEventListener("mousedown", handleHamMenuClick);
    };
  }, [isOpen]);

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
      <nav className="flex relative z-10 justify-between w-full sm:hidden">
        {/* Hamburger */}
        <Hamburger
          duration={0.8}
          className="hamburger-menu"
          label="Show menu"
          toggled={isOpen}
          toggle={setOpen}
        />

        <div
          ref={ref}
          className={`absolute top-[4rem] grid gap-6  bg-slate-200 p-4 rounded-lg divide-slate-600 shadow-lg w-3/4 h-screen transition-all ease-in delay-150 duration-300 ${
            isOpen ? "translate-x-0 opacity-100" : "-translate-x-3/4 opacity-0"
          } `}
        >
          {/* First half */}
          {nav.map((item, i) => {
            return (
              <NavLink
                key={i}
                className="text-center text-storeyGreen-100 p-4 leading-tight"
                to={`/${item.slug.current}`}
                onClick={handleClick}
              >
                {item.title}
              </NavLink>
            );
          })}
        </div>

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
