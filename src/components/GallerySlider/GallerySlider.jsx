import React, { useEffect, useState, useRef } from "react";

import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { Spinner } from "../Spinner/Spinner";

export const GallerySlider = ({
  CardComponent,
  items,
  testies,
  beforeAfter,
}) => {
  const [smallScreen, setSmallScreen] = useState(false);
  const [activeDot, setActiveDot] = useState(0); // state for active dot
  const [curSlide, setCurSlide] = useState(0); // determines blog slide shown
  const itemArray = useRef([]); // ref to blog array

  // divides items array into thirds
  let itemsOfThree;
  if (!beforeAfter) {
    itemsOfThree = Array.from({ length: Math.ceil(items.length / 3) }, (_, i) =>
      items.slice(i * 3, i * 3 + 3)
    );
  }
  // max length for navigating through blog slides
  let maxSlide = smallScreen
    ? items.length - 1
    : beforeAfter
    ? items.imgs.length - 1
    : itemsOfThree.length - 1;

  // Custom styling for Blog card
  const style = {
    card: "h-[437px] lg:w-[388px] rounded-lg p-2 sm:py-8 sm:px-6 max-w-lg",
    img: "",
    body: "h-2/3 sm:items-center",
  };

  // Number of dots displayed for blog slide nav
  const createDots = () => {
    if (smallScreen) return <div></div>; // No dots for mobile

    if (beforeAfter) {
      return items.imgs.map((_, i) => {
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
    }

    return itemsOfThree.map((_, i) => {
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

  // Displays div of items in 3's
  function goToSlide(slide) {
    activateDot(slide);
    setCurSlide(slide);
    itemArray?.current.forEach((s, i) => {
      if (s) {
        s.style.transform = `translateX(${(i - slide) * 100}%)`;
        s.style?.transform === `translateX(0%)`
          ? (s.style.opacity = 1)
          : (s.style.opacity = 0);
      }
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
      if (beforeAfter) {
        setSmallScreen(true);
      }
      if (testies) {
        setSmallScreen(window.innerWidth <= 1040);
      } else {
        setSmallScreen(window.innerWidth <= 768);
      }

      goToSlide(0);
    }

    handleResize();
    window.addEventListener("resize", handleResize);

    if (itemArray.current.length > 0) {
      goToSlide(0);
    }
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [itemArray.current.length]);

  if (items.length === 0) {
    return <Spinner />;
  }

  return (
    <div className="flex flex-col items-center h-auto">
      <h1 className="heading mt-14">
        {testies ? "Testimonials" : beforeAfter ? items.title : "Blog"}
      </h1>
      {/* Container */}
      <div className="flex p-6 sm:px-14 w-full relative">
        <SlArrowLeft
          className="cursor-pointer absolute top-1/2 left-3 sm:left-5 "
          onClick={prevSlide}
          size={smallScreen ? "1.5rem" : "2rem"}
        />
        {/* Slider */}
        <div
          className={`${
            testies
              ? "h-[880px] xs:h-[550px] testie:h-[800px] xl:h-[650px]"
              : beforeAfter
              ? " h-56 xs:h-[20rem] 480:h-[25rem] sm:h-[30rem] md:h-[38rem] xl:h-[650px]"
              : "h-[500px] md:h-[550px]"
          } w-full max-w-[1500px] mx-auto relative flex justify-center`}
        >
          {!smallScreen && !beforeAfter
            ? itemsOfThree.map((group, i) => {
                return (
                  <article
                    ref={(el) => (itemArray.current[i] = el)}
                    className={`blog-group gap-5 lg:gap-10  mx-3 ${
                      testies ? "" : "p-6 lg:p-14"
                    } ${
                      itemArray.current[i]?.style.transform === "translateX(0%)"
                        ? "opacity-100"
                        : "opacity-0"
                    }`}
                    key={i}
                  >
                    {group.map((item, i) => {
                      return (
                        <CardComponent
                          key={i}
                          item={item}
                          style={style}
                          urlNav={`blog`}
                        />
                      );
                    })}
                  </article>
                );
              })
            : beforeAfter
            ? items.imgs.map((item, i) => {
                return (
                  <article
                    ref={(el) => (itemArray.current[i] = el)}
                    className={`blog-group mx-3 ${
                      testies ? "items-start p-3" : "p-5"
                    } ${
                      itemArray.current[i]?.style.transform === "translateX(0%)"
                        ? "opacity-100"
                        : "opacity-0"
                    }`}
                    key={i}
                  >
                    <CardComponent item={item} style={style} urlNav={`blog`} />
                  </article>
                );
              })
            : items.map((item, i) => {
                return (
                  <article
                    ref={(el) => (itemArray.current[i] = el)}
                    className={`blog-group mx-3 ${
                      testies ? "items-start p-3" : "p-5"
                    } ${
                      itemArray.current[i]?.style.transform === "translateX(0%)"
                        ? "opacity-100"
                        : "opacity-0"
                    }`}
                    key={i}
                  >
                    <CardComponent item={item} style={style} urlNav={`blog`} />
                  </article>
                );
              })}
        </div>

        <SlArrowRight
          className="cursor-pointer absolute top-1/2 right-3 sm:right-5"
          onClick={nextSlide}
          size={smallScreen ? "1.5rem" : "2rem"}
        />
      </div>

      {/* Dots */}
      <div className="py-4 2xl:pt-14">{createDots()}</div>
    </div>
  );
};
