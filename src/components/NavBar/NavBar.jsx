import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { urlFor } from "../../Functions/Functions";
import { Divide as Hamburger } from "hamburger-react";

export const NavBar = ({ nav, logo, navRef }) => {
  // ref for hamburger menu
  const ref = useRef(null);

  const [isOpen, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const firstHalf = nav.slice(0, nav.length / 2);
  const lastHalf = nav.slice(nav.length / 2);

  // Applied when nav link is Active
  let activeStyle = {
    backgroundColor: "#E5F1E0",
    color: "#14834E",
    borderRadius: "6px",
  };

  // closes menu when clicked outside of menu
  function handleHamMenuClick(e) {
    // checks if target is not the hamburger menu and IS the overflow div
    if (ref.current && e.target.id === "hamburger-overflow") {
      setOpen(!isOpen);
    }
  }
  // Checks positions of nav for transparent and blur effect
  const handleScroll = () => {
    if (window.pageYOffset > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  // Hamburger menu opened or not
  const handleClick = () => {
    setOpen(!isOpen);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    if (isOpen) {
      document.addEventListener("mousedown", handleHamMenuClick);
    } else {
      document.removeEventListener("mousedown", handleHamMenuClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleHamMenuClick);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isOpen]);

  return (
    <nav
      onClick={handleScroll}
      ref={navRef}
      className={`p-4 bg-white sticky top-0 z-20 transition-colors ${
        isScrolled ? "bg-opacity-90 backdrop-blur-sm shadow-md" : ""
      }`}
    >
      <div className="lg:flex hidden ">
        <div className="w-1/3 flex flex-auto justify-around items-center text-storeyGreen-100">
          {/* First half of Nav*/}
          {firstHalf.map((item, i) => {
            return (
              <NavLink
                key={i}
                className={`text-center flex-wrap  px-4 py-3 `}
                style={({ isActive }) => (isActive ? activeStyle : null)}
                to={`/${item.slug.current}`}
              >
                {item.title}
              </NavLink>
            );
          })}
        </div>

        {/* Logo */}
        <div className="flex justify-center flex-auto w-1/3 px-1 ">
          <NavLink className="" to="/" end>
            <img
              src={urlFor(logo?.asset?._ref)}
              alt="Storey Real Estate Logo"
            />
          </NavLink>
        </div>

        {/* Second Half of Nav*/}
        <div className="w-1/3 flex flex-auto justify-around items-center px-1 text-storeyGreen-100">
          {lastHalf.map((item, i) => {
            return (
              <NavLink
                key={i}
                className={`text-center flex-wrap px-4 py-3 ${
                  item.slug.current.includes("contact") ? "btn" : ""
                }`}
                style={({ isActive }) => (isActive ? activeStyle : null)}
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
        <div className="invisible w-12"></div>
        {/* Logo */}
        <div className="flex max-w-[200px] flex-auto justify-center items-center px-3 ">
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
          className={`fixed z-10 top-0 left-0 grid gap-6 bg-slate-100 p-4  shadow-inner w-3/4 h-screen transition-all duration-300 ease-out ${
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
                className="text-center text-storeyGreen-100 p-4 mt-4"
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
    </nav>
  );
};
