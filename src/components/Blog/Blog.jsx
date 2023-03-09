import React, { useEffect, useState, useRef } from "react";

import { Card } from "../Card/Card";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { Spinner } from "../Spinner/Spinner";

export const Blog = ({ blogs }) => {
  const [smallScreen, setSmallScreen] = useState(false);

  const [activeDot, setActiveDot] = useState(0); // state for active dot
  const [curSlide, setCurSlide] = useState(0); // determines blog slide shown
  const blogArray = useRef([]); // ref to blog array

  // divides blogs array into thirds
  const blogsOfThree = Array.from(
    { length: Math.ceil(blogs.length / 3) },
    (_, i) => blogs.slice(i * 3, i * 3 + 3)
  );
  // max length for navigating through blog slides
  let maxSlide = smallScreen ? blogs.length - 1 : blogsOfThree.length - 1;

  // Custom styling for Blog card
  const style = {
    card: "h-[437px] lg:w-[388px] rounded-lg p-2 sm:py-8 sm:px-6 max-w-lg",
    img: "",
    body: "h-2/3 sm:items-center",
  };

  // Number of dots displayed for blog slide nav
  const createDots = () => {
    if (smallScreen) return <div></div>; // No dots for mobile

    return blogsOfThree.map((_, i) => {
      return (
        <button
          onClick={() => goToSlide(i)}
          key={i}
          className={`dots w-5 h-5 m-2 rounded-full ${
            i === activeDot ? "dot--active" : ""
          }`}
        ></button>
      );
    });
  };

  // Colors in dot based on page for Blog
  const activateDot = (slide) => {
    setActiveDot(slide); // update activeSlide state
  };

  // Displays div of blogs in 3's
  function goToSlide(slide) {
    activateDot(slide);
    setCurSlide(slide);
    blogArray.current.forEach((s, i) => {
      s.style.transform = `translateX(${(i - slide) * 100}%)`;
    });
  }

  // Next slide. functionality to buttons
  const nextSlide = () => {
    if (curSlide === maxSlide) {
      goToSlide(0);
    } else {
      goToSlide(curSlide + 1);
    }
  };

  // Previous slide. functionality to buttons
  const prevSlide = () => {
    if (curSlide === 0) {
      goToSlide(maxSlide);
    } else {
      goToSlide(curSlide - 1);
    }
  };

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 768) {
        setSmallScreen(window.innerWidth <= 768);
        goToSlide(0);
      }
      setSmallScreen(window.innerWidth <= 768);
    }
    handleResize();
    window.addEventListener("resize", handleResize);

    if (blogArray.current.length > 0) {
      goToSlide(0);
    }
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [blogArray.current.length]);

  if (blogs.length === 0) {
    return <Spinner />;
  }

  return (
    <div className="flex flex-col items-center h-auto">
      <h1 className="mt-14">Blog</h1>
      {/* Blog Container */}
      <div className="flex p-6 sm:px-14 w-full relative">
        <SlArrowLeft
          className="cursor-pointer absolute top-1/2 left-1 sm:left-5 "
          onClick={prevSlide}
          size={smallScreen ? "1.2rem" : "2rem"}
        />
        {/* Blog Slider */}
        <div className="w-full max-w-[1500px] h-[500px] md:h-[550px] mx-auto relative overflow-hidden flex justify-center">
          {!smallScreen
            ? blogsOfThree.map((group, i) => {
                return (
                  <article
                    ref={(el) => (blogArray.current[i] = el)}
                    className={`blog-group absolute top-0 flex items-center justify-center w-full gap-5 lg:gap-10 p-6 lg:p-14 mx-3 ${
                      blogArray.current[i]?.style.transform === "translateX(0%)"
                        ? "opacity-100"
                        : "opacity-0"
                    }`}
                    key={i}
                  >
                    {group.map((blog, i) => {
                      return (
                        <Card
                          key={i}
                          card={blog}
                          style={style}
                          urlNav={`blog`}
                        />
                      );
                    })}
                  </article>
                );
              })
            : blogs.map((blog, i) => {
                return (
                  <article
                    ref={(el) => (blogArray.current[i] = el)}
                    className={`blog-group absolute top-0 flex items-center justify-center w-full p-3 mx-3 ${
                      blogArray.current[i]?.style.transform === "translateX(0%)"
                        ? "opacity-100"
                        : "opacity-0"
                    }`}
                    key={i}
                  >
                    <Card card={blog} style={style} urlNav={`blog`} />
                  </article>
                );
              })}
        </div>

        <SlArrowRight
          className="cursor-pointer absolute top-1/2 right-1 sm:right-5"
          onClick={nextSlide}
          size={smallScreen ? "1.2rem" : "2rem"}
        />
      </div>

      {/* Dots */}
      <div className="pb-4">{createDots()}</div>
    </div>
  );
};
