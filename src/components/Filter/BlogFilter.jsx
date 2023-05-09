import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

export const BlogFilter = ({ onFilter }) => {
  const handleTagChange = (event) => {
    if (event.target.value) {
      onFilter(event.target.value);
    } else {
      onFilter(null);
    }
  };

  return (
    <div className="flex justify-center xs:justify-end items-center my-3 mx-7">
      <label htmlFor="projectType">
        <AiOutlineSearch size={"1.5rem"} />
      </label>
      <input
        id="projectType"
        className="m-0 mx-2 p-2 sm:p-3"
        placeholder="Search Blogs..."
        onChange={handleTagChange}
      />
    </div>
  );
};
