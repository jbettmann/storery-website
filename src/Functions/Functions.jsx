import React from "react";
import sanityClient from "../client";
import imageUrlBuilder from "@sanity/image-url";

const YT_ID_RE = /^[a-zA-Z0-9_-]{11}$/;

export function getYoutubeVideoId(input) {
  if (!input) return null;
  const s = String(input).trim();

  // Already an ID?
  if (YT_ID_RE.test(s)) return s;

  // Try URL parsing
  try {
    const u = new URL(s);
    const host = u.hostname.replace(/^www\./, "");

    // youtu.be/<id>?si=...
    if (host === "youtu.be") {
      const id = u.pathname.split("/").filter(Boolean)[0];
      return YT_ID_RE.test(id) ? id : null;
    }

    // *.youtube.com
    if (host.endsWith("youtube.com")) {
      // watch?v=<id>
      const v = u.searchParams.get("v");
      if (YT_ID_RE.test(v)) return v;

      // /embed/<id>, /shorts/<id>
      const parts = u.pathname.split("/").filter(Boolean);
      const maybe =
        parts[0] === "embed" || parts[0] === "shorts" ? parts[1] : null;
      if (YT_ID_RE.test(maybe)) return maybe;
    }
  } catch (err) {
    // Not a URL (string like "something"), or URL constructor failed.
    if (process.env.NODE_ENV !== "production") {
      console.warn("getYoutubeVideoId: invalid URL input", input, err);
    }
    // fall through
  }

  return null;
}

// image conversion function for Sanity
export function urlFor(source) {
  const builder = imageUrlBuilder(sanityClient);

  if (!source) return;

  return builder.image(source);
}

export function cardArray(cards, setCards) {
  if (!cards) return;
  let [...newCards] = Object.values(cards);
  setCards(newCards.filter((doc, i) => typeof doc === "object"));
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
      language,
      logo
  }`
    )

    .then((data) => {
      setHome(data[0]);
    })
    .catch(console.error);
}

// fetch BuySell for BuySell page
export function getBuySell(setBuySell) {
  sanityClient
    .fetch(
      `*[_type == 'buySell']{
        buySellTitle,
        buy,
        sell,
    }`
    )
    .then((data) => {
      setBuySell(data[0]);
    })
    .catch(console.error);
}

// Investment Properties fetch
export function getInvestProps(setInvestProps) {
  sanityClient
    .fetch(
      `*[_type == 'investment']{
        webpageTitle,
        slug,
        rental,
        fixFlip,
        videoUrl
    }`
    )
    .then((data) => {
      setInvestProps(data[0]);
    })
    .catch(console.error);
}

// fetch for Remodel content
export function getRemodel(setRemodel) {
  sanityClient
    .fetch(
      `*[_type == 'remodel']{
        slug,
        hero,
        remodelPlan,
        remodelImg,
        videoUrl
    }`
    )

    .then((data) => {
      setRemodel(data[0]);
    })
    .catch(console.error);
}

// About fetch
export function getAbout(setAbout) {
  sanityClient
    .fetch(
      `*[_type == 'about']{
        webpageTitle,
        abouts,
    }`
    )
    .then((data) => {
      setAbout(data[0]);
    })
    .catch(console.error);
}

// fetch Testimonials
export function getTestimonials(setTestimonials) {
  sanityClient
    .fetch(
      `*[_type == 'testimonials']{
      webpageTitle,
      testimonialList,
  }`
    )
    .then((data) => {
      setTestimonials(data[0]);
    })
    .catch(console.error);
}

// fetch for Blog content
export function getBlog(setBlog) {
  sanityClient
    .fetch(
      `*[_type == 'blog']{
        title,
        slug,
        mainImage,
        publishedAt,
        projectType,
        tags,
      }`
    )
    .then((data) => setBlog(data))
    .catch(console.error);
}

// fetch single blog post
export function getSingleBlog(slug, setSingleBlog) {
  sanityClient
    .fetch(
      `*[slug.current == "${slug}"]{
        title,
        slug,
        "author": author->name,
        "authorImage": author->image,
        mainImage,
        publishedAt,
        body,
        projectType,
        tags,
        _id,
 
      }`
    )
    .then((data) => {
      let [newData] = data;
      setSingleBlog(newData);
    })
    .catch(console.error);
}

// fetch for FAQs content
export function getFAQ(setFAQ) {
  sanityClient
    .fetch(
      `*[_type == 'faqs']{
        title,
        id,
        slug,
        faq,
      }`
    )
    .then((d) => d.sort((a, b) => a.id - b.id))
    .then((data) => setFAQ(data))
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
        realtorLogo,
     }`
    )
    .then((data) => {
      let [newData] = data;
      setFooter(newData);
    })
    .catch(console.error);
}
