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

  console.log({ blogs, faqs });
  if (!blogs && !faqs) return <div>Loading...</div>;

  return (
    <section>
      <Blog blogs={blogs} />
      <div className="bg-white w-screen h-full">
        {faqs.map((faq, i) => {
          return <FAQ key={i} faq={faq} />;
        })}
      </div>
    </section>
  );
};
