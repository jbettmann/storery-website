import { Card } from "../Card/Card";
import { GallerySlider } from "../GallerySlider/GallerySlider";

export const Blog = ({ blogs }) => {
  return blogs && <GallerySlider CardComponent={Card} items={blogs} />;
};
