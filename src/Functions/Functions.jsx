import React from "react";
import sanityClient from "../client";
import imageUrlBuilder from "@sanity/image-url";

// Splits id from Youtube url
export function getYoutubeVideoId(youtubeURL) {
  let videoId;

  // If url includes v=
  if (youtubeURL.includes("v=")) {
    // Splits url into array and sets videoID to second element
    videoId = youtubeURL.split("v=")[1];
  } else {
    // Splits url into array and sets videoID to third element
    videoId = youtubeURL.split("/")[3];
  }
  // checks if videoID includes &
  let ampersandPosition = videoId.indexOf("&");
  // if & does exists, set videoID
  if (ampersandPosition != -1) {
    videoId = videoId.substring(0, ampersandPosition);
  }
  return videoId;
}

// image conversion function for Sanity
export function urlFor(source) {
  const builder = imageUrlBuilder(sanityClient);

  if (!source) return;

  return builder.image(source);
}

// fetch for Logo
export async function getLogo(setLogo) {
  const logoUrl = `*[_type == 'home']{
    logo,  
    }`;
  const res = await sanityClient.fetch(logoUrl);
  const data = res[0];
  setLogo(data);
}

// fetch Navigation components
export function getNav(setNav) {
  sanityClient
    .fetch(
      `*[_type == 'nav']{
    title,
    slug,
    id,
  }`
    )
    .then((d) => d.sort((a, b) => a.id - b.id))
    .then((data) => setNav(data))
    .catch(console.error);
}

// fetch for Home content
export function getHome(setHome) {
  sanityClient
    .fetch(
      `*[_type == 'home']{
      title,
      slug,
      hero,
      cards,
      homeAbout,
      language
  }`
    )

    .then((data) => {
      let [newData] = data;
      setHome(newData);
    })
    .catch(console.error);
}

// fetch for Footer content
export function getFooter(setFooter) {
  sanityClient
    .fetch(
      `*[_type == 'footer']{
        title,
        socialLinks,
        name,
        phone,
        email,
     }`
    )
    .then((data) => {
      let [newData] = data;
      setFooter(newData);
    })
    .catch(console.error);
}
