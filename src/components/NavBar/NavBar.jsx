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

  const handleClick = () => {
    setOpen(!isOpen);
  };

  useEffect(() => {
    // closes menu when clicked outside of menu
    function handleHamMenuClick(e) {
      // checks if target is not the hamburger menu and IS the overflow div
      if (ref.current && e.target.id === "hamburger-overflow") {
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
    <nav className="p-4">
      <div className="lg:flex hidden ">
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
      </div>

      {/* Hamburger Menu*/}
      <div className="flex relative justify-between w-full lg:hidden">
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

        {/* Hamburger Icon */}
        <Hamburger
          duration={0.8}
          className="hamburger-menu"
          label="Show menu"
          toggled={isOpen}
          toggle={setOpen}
        />
        <div
          ref={ref}
          className={`fixed z-10 top-0 left-0 grid gap-6 bg-slate-100 p-4 rounded-lg shadow-inner w-3/4 h-screen transition-all duration-300 ease-out ${
            isOpen
              ? "translate-x-0 opacity-100 "
              : "-translate-x-full opacity-0"
          } `}
        >
          {/* full ham nav */}
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

        {/* Overflow div */}
        {isOpen && (
          <div
            className="fixed top-0 left-0 w-screen h-screen bg-slate-500 opacity-30 duration-300"
            id="hamburger-overflow"
          ></div>
        )}
      </div>
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
    </nav>
  );
};
