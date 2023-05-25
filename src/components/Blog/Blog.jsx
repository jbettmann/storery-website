import { useState } from "react";
import { Card } from "../Card/Card";
import { BlogFilter } from "../Filter/BlogFilter";
import { GallerySlider } from "../GallerySlider/GallerySlider";
import { useEffect } from "react";

export const Blog = ({ blogs }) => {
  // Add the following filter function inside the GallerySlider component

  const [filteredItems, setFilteredItems] = useState(blogs);
  const [loading, setLoading] = useState(false);

  const handleFilter = (projectType) => {
    setLoading(true);
    setTimeout(() => {
      if (projectType) {
        setFilteredItems(filterItems(projectType));
      } else {
        setFilteredItems(blogs);
      }
      setLoading(false);
    }, 200);
  };

  const filterItems = (projectType) => {
    const searchTerm = projectType.toLowerCase();
    return blogs.filter((item) => {
      console.log(item);
      const itemProjectType = item.projectType
        ? item.projectType.toLowerCase()
        : "";
      const hasTag =
        item.tags &&
        item.tags.some((tag) => tag.toLowerCase().includes(searchTerm));
      return itemProjectType.includes(searchTerm) || hasTag;
    });
  };

  useEffect(() => {
    setFilteredItems(blogs);
  }, [blogs]);

  return (
    blogs && (
      <>
        <BlogFilter onFilter={handleFilter} />
        <GallerySlider
          CardComponent={Card}
          items={filteredItems}
          loading={loading}
        />
      </>
    )
  );
};
