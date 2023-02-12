import React from "react";
import OptionList from "./OptionList";

const Search = () => {
  const [searchTerm, setSearchTerm] = React.useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <section className="container flex gap-5 justify-between items-center">
      <div className="relative my-24 w-[500px]">
        <svg
          className="w-5 h-5 fill-current text-white mr-4 absolute left-5 top-1/2 -translate-y-1/2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path
            fill="#a7a7a7"
            d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"
          ></path>
        </svg>
        <input
          type="text"
          placeholder="Search for a country..."
          value={searchTerm}
          onChange={handleChange}
          className="pr-5 py-4 pl-14 w-full bg-white rounded-md focus:outline-none"
        />
      </div>
      <OptionList />
    </section>
  );
};

export default React.memo(Search);
