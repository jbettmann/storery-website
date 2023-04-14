import React, { useEffect, useState } from "react";
import { getAbout, urlFor } from "../../Functions/Functions";
import BlockContect from "@sanity/block-content-to-react";
import { Testimonials } from "../Testimonials/Testimonials";
import { SocialLinks } from "../SocialIcon/SocialLinks";

export const About = ({ contact, testimonials }) => {
  const [about, setAbout] = useState(null);

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

  useEffect(() => {
    getAbout(setAbout);
  }, []);

  return (
    about && (
      <section>
        <article className="flex flex-col w-full items-center px-12 md:px-24">
          <h1 className="heading w-full my-20 text-center">
            {about.webpageTitle}
          </h1>
          <div className="flex flex-col py-10 xl:flex-row gap-8 justify-evenly">
            {/* Bios & Contact Container*/}
            <section className="w-full xl:w-[60%] mb-0">
              {about.abouts.map((person) => {
                return (
                  // Bios
                  <article className="flex flex-col pb-20 md:flex-row gap-5 md:gap-10">
                    <section className="green-card block text-center p-4 sm:text-left sm:flex w-full mb-0 md:block md:w-1/3 lg:w-1/2">
                      <img
                        className="w-2/3 xs:w-1/2 sm:w-1/3 mx-auto md:w-full object-cover rounded-md"
                        src={urlFor(person.mainImage.asset._ref)}
                        alt={`Portrait of ${person.name} `}
                      />
                      <div className="my-5 sm:p-4 sm:pl-6 md:p-0">
                        <h2 className="font-bold ">{person.name}</h2>
                        <p className="p-0 text mt-5 italic">
                          {person.quickBio}
                        </p>
                      </div>
                    </section>
                    <div className="w-full md:w-3/5">
                      <BlockContect
                        blocks={person.bio}
                        projectId="k4xvtsjp"
                        dataset="production"
                        className="prose"
                      />
                    </div>
                  </article>
                );
              })}
            </section>
            {/* Contact */}
            <aside className="green-card border-none px-5 py-10 mb-20 w-full text-center xl:text-left xl:w-1/3 2xl:w-1/4">
              <h2 className="mb-8">Contact</h2>
              <p className="font-bold p-0 m-0 mb-3 text-xl">{contact.name} </p>
              <a className="footer-links text-xl" href={`tel:${contact.phone}`}>
                {contact.phone}
              </a>{" "}
              <br />
              <a
                className="footer-links text-xl"
                href={`mailto:${contact.email}`}
              >
                {contact.email}
              </a>
              <a
                href="https://www.nar.realtor/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="rounded-full w-12 mt-8"
                  src={urlFor(contact.realtorLogo.asset._ref)}
                  alt="National Association of REALTORS website link"
                />
              </a>
              {/* <SocialLinks social={contact.socialLinks} style={style} /> */}
            </aside>
          </div>
        </article>
        <article>
          <Testimonials testimonials={testimonials} />
        </article>
      </section>
    )
  );
};
