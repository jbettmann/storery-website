import { TestieCard } from "../Card/TestieCard";
import { GallerySlider } from "../GallerySlider/GallerySlider";

export const Testimonials = ({ testimonials }) => {
  if (!testimonials || testimonials.testimonialList?.length === 0) {
    return <div></div>;
  }

  return (
    testimonials && (
      <GallerySlider
        CardComponent={TestieCard}
        items={testimonials?.testimonialList}
        testies={true}
        pageTitle={testimonials.webpageTitle}
      />
    )
  );
};
