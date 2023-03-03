import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleBlog, urlFor } from "../../Functions/Functions";
import BlockContect from "@sanity/block-content-to-react";
import { Spinner } from "../Spinner/Spinner";

export const SingleBlog = () => {
  const [singleBlog, setSingleBlog] = useState(null);
  const { slug } = useParams();

  const dateFormate = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  useEffect(() => {
    getSingleBlog(slug, setSingleBlog);
  }, []);

  console.log(singleBlog);

  if (!singleBlog) return <Spinner />;
  return (
    <section className="w-full h-full bg-white ">
      {singleBlog && (
        <article className="flex flex-col items-center">
          <h1>{singleBlog.title}</h1>
          <div>
            <div>
              <img
                src={urlFor(singleBlog.authorImage.asset._ref)}
                alt={singleBlog.slug.current}
                className=""
              />
              <h5>{singleBlog.author}</h5>
            </div>
            <p>
              {new Date(singleBlog.publishedAt).toLocaleDateString(
                "en-US",
                dateFormate
              )}
            </p>
          </div>
          <div className="">
            {/* makes all things that can be in description look good */}
            <BlockContect
              blocks={singleBlog.body}
              projectId="k4xvtsjp"
              dataset="production"
            />
          </div>
        </article>
      )}
    </section>
  );
};
