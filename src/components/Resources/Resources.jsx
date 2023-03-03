import React, { useEffect, useState } from "react";

import { getBlog, getFAQ } from "../../Functions/Functions";
import { Blog } from "../Blog/Blog";
import { FAQ } from "../FAQs/FAQs";

export const Resources = () => {
  const [blogs, setBlog] = useState(null || []);
  const [faqs, setFAQ] = useState([]);

  useEffect(() => {
    getBlog(setBlog);
    getFAQ(setFAQ);
  }, [blogs.length]);

  return (
    <section>
      <Blog blogs={blogs} />
      <div className="bg-white w-screen h-full flex flex-col items-center">
        <h1 className="mt-14">Frequently Asked Questions</h1>
        {faqs.map((faq, i) => {
          return <FAQ key={i} i={i} faq={faq} />;
        })}
      </div>
    </section>
  );
};
