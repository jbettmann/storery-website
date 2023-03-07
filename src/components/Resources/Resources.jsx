import React, { useEffect, useState } from "react";

import { getBlog, getFAQ } from "../../Functions/Functions";
import { Blog } from "../Blog/Blog";
import { FAQ } from "../FAQs/FAQs";

export const Resources = () => {
  const [blogs, setBlog] = useState(null || []);
  const [faqs, setFAQ] = useState([]);

  // sorts blogs by date, news to oldest
  const sortBlogs = () => {
    const newArry = blogs.sort((a, b) => {
      const aDate = new Date(a.publishedAt);
      const bDate = new Date(b.publishedAt);

      return bDate - aDate;
    });

    return newArry;
  };
  sortBlogs();

  useEffect(() => {
    getBlog(setBlog);
    getFAQ(setFAQ);
  }, [blogs.length]);

  return (
    <section>
      <Blog blogs={blogs} />
      <div className="bg-white w-screen h-full flex flex-col items-center">
        <h1 className="mt-14 p-2 text-center">Frequently Asked Questions</h1>
        {faqs.map((faq, i) => {
          return <FAQ key={i} i={i} faq={faq} />;
        })}
      </div>
    </section>
  );
};
