import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { SocialLinks } from "../SocialIcon/SocialLinks";
import { SeHabla } from "../SeHabla/SeHabla";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

export const Contact = ({ footer, seHabla }) => {
  const [state, handleSubmit] = useForm("xjvdyypp");

  // sizing for social icons
  const style = {
    backgroundColor: "#fff",
    fill: "#0c4c26",
    width: "35px",
    height: "35px",
    zillow: {
      width: "35px",
      height: "35px",
      backgroundColor: "#0c4c26",
    },
  };

  if (state.succeeded) {
    return (
      <section className="flex justify-center items-center h-screen">
        <div className="green-card text-center p-16">
          <h3 className="">Thank you for reach out!</h3>
          <p> We'll get back to you shortly</p>
        </div>
      </section>
    );
  }

  return (
    <main className="flex flex-col items-center">
      <h1 className="mt-14">Contact Us</h1>
      <form
        className="w-screen md:w-4/5 max-w-6xl flex flex-col items-center lg:flex-row lg:items-stretch justify-between"
        onSubmit={handleSubmit}
        id="contact"
      >
        {/* Form */}
        <section className="flex flex-col w-full lg:w-2/3 mb-0 p-6 ">
          <h2 className="mb-6">Say Hello!</h2>
          <p className="text-xs m-0 px-0">
            <span className="text-red-500">*</span> REQUIRED FIELD
          </p>
          <label htmlFor="name">
            Full Name<span className="text-red-500">*</span>
          </label>
          <input
            className=" rounded-md "
            id="name"
            placeholder="Full Name"
            name="name"
            required
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} />
          <div className="flex flex-col lg:flex-row w-full ">
            <div className="form-email-phone w-full lg:w-2/3">
              <label htmlFor="email">
                Email<span className="text-red-500">*</span>
              </label>
              <input
                className="lg:mr-6 rounded-md "
                id="email"
                type="email"
                placeholder="Email"
                name="email"
                required
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>
            <div className="form-email-phone flex-1">
              <label htmlFor="phone">Phone</label>
              <input
                className="  rounded-md "
                id="phone"
                type="phone"
                placeholder="Phone Number"
                name="phone"
              />
              <ValidationError
                prefix="Phone"
                field="phone"
                errors={state.errors}
              />
            </div>
          </div>
          <label htmlFor="subject">
            Subject<span className="text-red-500">*</span>
          </label>
          <input
            className="  rounded-md "
            placeholder="Subject"
            name="subject"
            id="subject"
            required
          />
          <ValidationError
            prefix="subject"
            field="subject"
            errors={state.errors}
          />
          <label htmlFor="message">
            Message<span className="text-red-500">*</span>
          </label>
          <textarea
            className="outline-none area rounded-md px-3 w-full h-40 md:h-52"
            placeholder="Message"
            name="message"
            id="message"
            required
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />

          <div className=" flex justify-end mt-4">
            <button className="btn" disabled={state.submitting}>
              <h2 className=" text-sm font-medium text-white">Get in touch</h2>
            </button>
          </div>
        </section>

        {/* Contact Info */}
        <section className="flex flex-col bg-gradient-to-tr from-storeyGreen-100 to-storeyGreen-300 text-white pt-24 px-6 mb-0 w-full lg:w-auto md:rounded-b-xl lg:rounded-none lg:rounded-r-xl">
          <h2 className="mb-9">Contact Storey</h2>
          {/* Email */}
          <div className="flex items-start gap-3 mb-7">
            <a className="footer-links" href={`mailto:${footer?.email}`}>
              <AiOutlineMail size={`2rem`} className="" />
            </a>
            <div>
              <p className="text-lg font-bold p-0 m-0 mb-2">Email</p>
              <a className="footer-links" href={`mailto:${footer?.email}`}>
                {footer?.email}
              </a>
            </div>
          </div>

          {/* Phone number */}
          <div className="flex items-start gap-3 mb-9">
            <a className="footer-links" href={`tel:${footer.phone}`}>
              <BsFillTelephoneFill size={`1.5rem`} className="mt-2" />
            </a>
            <div>
              <p className="text-lg font-bold p-0 m-0 mb-2">Phone</p>
              <a className="footer-links" href={`tel:${footer.phone}`}>
                {footer.phone}
              </a>
            </div>
          </div>

          {/* Social Icons */}
          <SocialLinks social={footer.socialLinks} style={style} />
        </section>
      </form>
      <SeHabla seHabla={seHabla} />
    </main>
  );
};
