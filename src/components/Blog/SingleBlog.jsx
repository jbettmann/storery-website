import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleBlog, urlFor } from "../../Functions/Functions";
import BlockContect from "@sanity/block-content-to-react";
import { Spinner } from "../Spinner/Spinner";

export const SingleBlog = () => {
  const [singleBlog, setSingleBlog] = useState(null);
  const blogSection = useRef(null);
  const { slug } = useParams();

  const dateFormate = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  useEffect(() => {
    if (!singleBlog) {
      getSingleBlog(slug, setSingleBlog);
    }
    if (blogSection.current) {
      const { offsetTop } = blogSection.current;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }
  }, [blogSection.current]);

  console.log(blogSection.current);
  if (!singleBlog) return <Spinner />;
  return (
    <section className="w-full h-full bg-white my-14 p-6">
      {singleBlog && (
        <article ref={blogSection} className="flex flex-col items-center">
          <h1 className="mt-8 text-center">{singleBlog.title}</h1>
          <div className="flex w-2/3 justify-between items-center m-6 border-y border-gray-400">
            <div className="flex m-2 items-center">
              <img
                src={urlFor(singleBlog.authorImage.asset._ref)}
                alt={singleBlog.slug.current}
                className="w-12 h-12 rounded-full mr-3"
              />
              <h5 className="m-0">{singleBlog.author}</h5>
            </div>
            <p className="text-gray-500 m-0">
              {new Date(singleBlog.publishedAt).toLocaleDateString(
                "en-US",
                dateFormate
              )}
            </p>
          </div>
          <div className="flex-auto w-full h-[30rem] overflow-hidden flex justify-center items-center">
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
