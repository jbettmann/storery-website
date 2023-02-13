import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { SocialLinks } from "../SocialIcon/SocialLinks";
import { SeHabla } from "../SeHabla/SeHabla";

export const Contact = ({ footer, seHabla }) => {
  const [state, handleSubmit] = useForm("xjvdyypp");

  // sizing for social icons
  const style = {
    width: "35px",
    height: "35px",
  };

  console.log(seHabla);

  if (state.succeeded) {
    return <p>Thanks for Sending a message! We'll get back to you shortly</p>;
  }

  return (
    <main className="flex flex-col items-center">
      <h1>Contact Us</h1>
      <form className="" onSubmit={handleSubmit} id="contact">
        <section className="flex flex-col w-2/3 mb-0 p-6 ">
          <h3 className="mb-6">Say Hello!</h3>
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
          <div className="flex w-full ">
            <div className="form-email-phone w-2/3">
              <label htmlFor="email">
                Email<span className="text-red-500">*</span>
              </label>
              <input
                className="mr-6 rounded-md "
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
        <section className="flex flex-col bg-storeyGreen-300 text-white p-6  mb-0">
          <h3>Contact Storey</h3>
          {/* Email */}
          <div className="h-44">
            <img src="" alt="" />
            <h5>Email</h5>
            <a className="footer-links" href={`mailto:${footer.email}`}>
              {footer.email}
            </a>
          </div>

          {/* Phone number */}
          <div>
            <img src="" alt="" />
            <h5>Phone</h5>
            <a className="footer-links" href={`tel:${footer.phone}`}>
              {footer.phone}
            </a>
          </div>

          {/* Social Icons */}
          <SocialLinks social={footer.socialLinks} style={style} />
        </section>
      </form>
      <SeHabla seHabla={seHabla} />
    </main>
  );
};
