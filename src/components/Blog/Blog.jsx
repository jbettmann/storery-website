import React, { useEffect, useState, useRef } from "react";
import BlockContent from "@sanity/block-content-to-react";
import { Card } from "../Card/Card";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { Spinner } from "../Spinner/Spinner";

export const Blog = ({ blogs }) => {
  const [smallScreen, setSmallScreen] = useState(false);
  const [rendered, setRendered] = useState(false);
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
    card: "h-[437px] lg:w-[388px] rounded-lg py-8 px-6 max-w-lg",
    img: "",
    body: "h-2/3",
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
      setSmallScreen(window.innerWidth < 768);
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    if (blogArray.current.length > 0 && !rendered) {
      goToSlide(0);
      setRendered(true);
    }
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [blogArray.current.length]);

  if (blogs.length === 0) {
    return <Spinner />;
  }

  return (
    <article className="flex flex-col items-center h-auto">
      <h1 className="mt-14">Blog</h1>
      {/* Blog Container */}
      <div className="flex px-14 w-full relative">
        <SlArrowLeft
          className="cursor-pointer absolute top-1/2 left-5 z-10"
          onClick={prevSlide}
          size={"2rem"}
        />
        {/* Blog Slider */}
        <div className="w-full max-w-[1500px] h-[550px] mx-auto relative overflow-hidden">
          {!smallScreen
            ? blogsOfThree.map((group, i) => {
                return (
                  <div
                    ref={(el) => (blogArray.current[i] = el)}
                    className={`blog-group absolute top-0 flex items-center justify-center w-full gap-10 p-14 mx-3`}
                    key={i}
                  >
                    {group.map((blog, i) => {
                      return <Card card={blog} i={i} style={style} />;
                    })}
                  </div>
                );
              })
            : blogs.map((blog, i) => {
                return (
                  <div
                    ref={(el) => (blogArray.current[i] = el)}
                    className={`blog-group absolute top-0 flex items-center justify-center w-full gap-10 p-14 mx-3`}
                    key={i}
                  >
                    <Card card={blog} i={i} style={style} />
                  </div>
                );
              })}
        </div>

        <SlArrowRight
          className="cursor-pointer absolute top-1/2 right-5 z-10"
          onClick={nextSlide}
          size={"2rem"}
        />
      </div>

      {/* Dots */}
      <div className="pb-4">{createDots()}</div>
    </article>
  );
};
