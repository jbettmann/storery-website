import React, { useEffect, useState, useRef } from "react";

import { TestieCard } from "../Card/TestieCard";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { Spinner } from "../Spinner/Spinner";

export const Testimonials = ({ testimonials }) => {
  const [smallScreen, setSmallScreen] = useState(false);
  const [activeDot, setActiveDot] = useState(0); // state for active dot
  const [curSlide, setCurSlide] = useState(0); // determines testimonials slide shown
  const testimonialsArray = useRef([]); // ref to testimonials array

  // divides testimonials array into thirds
  const testimonialsOfThree = Array.from(
    { length: Math.ceil(testimonials?.testimonialList.length / 3) },
    (_, i) => testimonials?.testimonialList.slice(i * 3, i * 3 + 3)
  );
  // max length for navigating through testimonials slides
  let maxSlide = smallScreen
    ? testimonials?.testimonialList.length - 1
    : testimonialsOfThree.length - 1;

  // Number of dots displayed for testimonials slide nav
  const createDots = () => {
    if (smallScreen) return <div></div>; // No dots for mobile

    return testimonialsOfThree.map((_, i) => {
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

  // Colors in dot based on page for testimonials
  const activateDot = (slide) => {
    setActiveDot(slide); // update activeSlide state
  };

  // Displays div of testimonials in 3's
  function goToSlide(slide) {
    activateDot(slide);
    setCurSlide(slide);
    testimonialsArray?.current?.forEach((s, i) => {
      s.style.transform = `translateX(${(i - slide) * 100}%)`;
      s.style.transform === `translateX(0%)`
        ? (s.style.opacity = 1)
        : (s.style.opacity = 0);
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
      if (window.innerWidth <= 1040) {
        setSmallScreen(window.innerWidth <= 1040);
        goToSlide(0);
      }
      setSmallScreen(window.innerWidth <= 1040);
    }
    handleResize();
    window.addEventListener("resize", handleResize);

    if (testimonialsArray.current.length > 0) {
      goToSlide(0);
    }
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [testimonialsArray.current.length]);

  if (!testimonials || testimonials.testimonialList.length === 0) {
    return <div></div>;
  }

  return (
    testimonials && (
      <div className="flex flex-col items-center h-auto">
        <h1 className="mt-14">{testimonials.webpageTitle}</h1>
        {/* testimonials Container */}
        <div className="flex p-8 sm:px-14 w-full relative">
          <SlArrowLeft
            className="cursor-pointer absolute top-1/2 left-3 sm:left-5 "
            onClick={prevSlide}
            size={smallScreen ? "1.5rem" : "2rem"}
          />
          {/* testimonials Slider */}
          <div className="w-full max-w-[1500px] h-[880px] xs:h-[550px] testie:h-[800px] xl:h-[650px] mx-auto relative overflow-hidden flex justify-center">
            {!smallScreen
              ? testimonialsOfThree.map((group, i) => {
                  return (
                    <article
                      ref={(el) => (testimonialsArray.current[i] = el)}
                      className={`blog-group items-center gap-5 lg:gap-10 mx-3 ${
                        testimonialsArray.current[i]?.style.transform ===
                        "translateX(0%)"
                          ? "opacity-100"
                          : "opacity-0"
                      }`}
                      key={i}
                    >
                      {group.map((testimonial, i) => {
                        return <TestieCard key={i} testie={testimonial} />;
                      })}
                    </article>
                  );
                })
              : testimonials.testimonialList.map((testimonial, i) => {
                  return (
                    <article
                      ref={(el) => (testimonialsArray.current[i] = el)}
                      className={`blog-group items-start p-3 mx-3 ${
                        testimonialsArray.current[i]?.style.transform ===
                        "translateX(0%)"
                          ? "opacity-100"
                          : "opacity-0"
                      }`}
                      key={i}
                    >
                      <TestieCard testie={testimonial} />
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
        <div className="pb-4">{createDots()}</div>
      </div>
    )
  );
};
