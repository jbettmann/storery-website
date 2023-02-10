import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { SocialIcon } from "react-social-icons";
import sanityClient from "../../client";

import zillow from "../../assets/icons/zillow-icon.svg";

export const Contact = () => {
  const [state, handleSubmit] = useForm("xjvdyypp");
  if (state.succeeded) {
    return <p>Thanks for Sending a message! We'll get back to you shortly</p>;
  }

  return (
    <form
      className="bg-white h-[100%] w-full border-y-[2rem] border-slate-100 "
      onSubmit={handleSubmit}
      id="contact"
    >
      <div className="shadow-md w-full p-3">
        <div className=" border-none text-center text-3xl mt-10">
          Send a Message
        </div>
        <div className=" w-full flex justify-center flex-col items-center">
          <div>
            <input
              className="outline-none mb-2 rounded-md backdrop-blur-xl bg-white/20 shadow-md px-3 py-3 w-3/4 mb-[-50px]"
              placeholder="Full Name"
              name="name"
              required
            />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
            <input
              className=" outline-none mt-16 mb-2 rounded-md backdrop-blur-xl bg-white/20 shadow-md px-3 py-3 w-3/4"
              placeholder="your email"
              name="email"
              required
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div className=" w-3/4">
            <input
              className=" outline-none mt-16 mb-2 rounded-md backdrop-blur-xl bg-white/20 shadow-md px-3 py-3 w-3/4"
              placeholder="Subject"
              name="subject"
              required
            />
            <ValidationError
              prefix="subject"
              field="subject"
              errors={state.errors}
            />
            <textarea
              className=" outline-none area rounded-md backdrop-blur-xl bg-white/20 shadow-md px-3 py-3 w-full h-40 md:h-52"
              placeholder="Message"
              name="message"
              required
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          <div className=" w-3/4 flex justify-end mt-4">
            <button className="btn" disabled={state.submitting}>
              <h2 className=" text-sm font-medium text-white">Get in touch</h2>
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};
