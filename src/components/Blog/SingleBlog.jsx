import React, { useEffect, useRef, useState, useLayoutEffect } from "react";
import { useParams } from "react-router-dom";
import { getSingleBlog, urlFor } from "../../Functions/Functions";
import BlockContect from "@sanity/block-content-to-react";
import { Spinner } from "../Spinner/Spinner";

export const SingleBlog = ({ navRef }) => {
  const [singleBlog, setSingleBlog] = useState(null);
  const blogSection = useRef(null);
  const { slug } = useParams();

  useLayoutEffect(() => {
    if (blogSection.current) {
      const { offsetTop } = blogSection.current;
      const { offsetHeight } = navRef.current;
      const scrollOffset = offsetTop - offsetHeight;

      window.scrollTo({ top: scrollOffset, behavior: "smooth" });
    }
  }, [blogSection.current]);

  useEffect(() => {
    getSingleBlog(slug, setSingleBlog);
  }, []);

  if (!singleBlog) return <Spinner />;
  return (
    <section className="w-full h-full bg-white my-14 p-6">
      {singleBlog && (
        <article ref={blogSection} className="flex flex-col items-center">
          <h1 className="mt-8 text-center">{singleBlog.title}</h1>
          <div className="flex w-full sm:w-2/3 justify-between items-center m-1 sm:m-6 border-y border-gray-400">
            <div className="flex m-2 items-center">
              <img
                src={urlFor(singleBlog.authorImage.asset._ref)}
                alt={singleBlog.slug.current}
                className=" w-8 h-8 sm:w-12 sm:h-12 rounded-full mr-3"
              />
              <h5 className="text-sm sm:text-base m-0">{singleBlog.author}</h5>
            </div>
            <p className="text-gray-500 m-0 text-right text-sm sm:text-base">
              {new Date(singleBlog.publishedAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </p>
          </div>
          <div className="flex-auto w-full h-auto max-h-[30rem] p-1 overflow-hidden flex justify-center items-center">
            <img
              src={urlFor(singleBlog.mainImage.asset._ref)}
              alt={singleBlog.slug.current}
              className=""
            />
          </div>
          <div className="">
            {/* makes all things that can be in description look good */}
            <BlockContect
              blocks={singleBlog.body}
              projectId="k4xvtsjp"
              dataset="production"
              className="prose"
            />
          </div>
        </article>
      )}
    </section>
  );
};
