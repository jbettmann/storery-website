import React from "react";
import BlockContent from "@sanity/block-content-to-react";
import { Card } from "../Card/Card";

export const Blog = ({ blogs }) => {
  const style = {
    card: "h-[200] lg:w-[388] rounded-lg py-8 px-6",
    img: "",
    body: "h-1/2",
  };

  if (blogs.length === 0)
    return <div>Opps, there are no blogs at this time</div>;

  return (
    <article className="flex flex-col items-center">
      <h1 className="mt-14">Blog</h1>
      <div className="flex gap-10 p-14 ">
        {/* makes all things that can be in description look good */}
        {blogs.map((blog, i) => {
          return <Card card={blog} i={i} style={style} />;
        })}
      </div>
      <div>
        {blogs.map(() => {
          return (
            <button className="w-5 h-5 m-2 rounded-full bg-storeyGreen-100"></button>
          );
        })}
      </div>
    </article>
  );
};
