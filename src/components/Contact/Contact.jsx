import React from "react";
import { useForm, ValidationError } from "@formspree/react";

export const Contact = () => {
  const [state, handleSubmit] = useForm("xjvdyypp");
  if (state.succeeded) {
    return <p>Thanks for Sending a message! We'll get back to you shortly</p>;
  }

  return (
    <div
      className="  h-[100vh] w-full flex justify-center items-center"
      id="contact"
      onSubmit={handleSubmit}
    >
      <form className="bg-white h-auto w-[300px]  md:w-[400px] rounded-xl shadow-xl p-3 ">
        <div className=" text-center text-3xl mt-10">Send a Message</div>
        <div className=" w-full flex justify-center flex-col items-center">
          <div>
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
            <input
              className=" outline-none mb-2 rounded-md backdrop-blur-xl bg-white/20 shadow-md px-3 py-3 w-3/4"
              placeholder="Full Name"
              name="name"
              required
            />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
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
              placeholder="your message"
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
            <button
              className=" bg-blue-600 w-max px-4 py-2 rounded-md underbar flex items-center flex-row gap-4 hover:shadow-xl"
              disabled={state.submitting}
            >
              <h2 className=" text-sm font-medium text-white">Get in touch</h2>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
