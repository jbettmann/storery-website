import React from "react";
import sanityClient from "../client";
import imageUrlBuilder from "@sanity/image-url";

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

export function urlFor(source) {
  const builder = imageUrlBuilder(sanityClient);

  return builder.image(source);
}
