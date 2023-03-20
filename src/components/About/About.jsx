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
  console.log(about, contact);
  return (
    about && (
      <section>
        <article className="flex flex-col w-full items-center px-24">
          <h1 className="w-full my-20 text-center">{about.webpageTitle}</h1>
          <div className="flex gap-8 justify-evenly">
            {/* Bios & Contact Container*/}
            <section className="w-[60%] mb-0">
              {about.abouts.map((person) => {
                return (
                  // Bios
                  <article className="flex gap-10">
                    <section className="green-card w-1/2 p-4">
                      <img
                        className="w-full object-cover rounded-md"
                        src={urlFor(person.mainImage.asset._ref)}
                        alt={`Portrait of ${person.name} `}
                      />

                      <h2 className="font-bold my-5">{person.name}</h2>
                      <p className="p-0 italic">{person.quickBio}</p>
                    </section>
                    <div className="w-3/5">
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
            <aside className="green-card border-none p-5 w-1/3">
              <h3 className="mb-8">Contact</h3>
              <p className="font-bold p-0 m-0 mb-3 text-xl">{contact.name}</p>
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
                  className="rounded-full w-1/3 mt-8"
                  src={urlFor(contact.realtorLogo.asset._ref)}
                  alt="National Association of REALTORS website link"
                />
              </a>
              {/* <SocialLinks social={contact.socialLinks} style={style} /> */}
            </aside>
          </div>
        </article>
        <article className="mt-14">
          <Testimonials testimonials={testimonials} />
        </article>
      </section>
    )
  );
};
