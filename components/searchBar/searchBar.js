import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ classList }) => {
  return (
    <div
      className={`search-div border justify-content-around align-items-center ${
        classList ? classList : ""
      }`}
    >
      <i className="color-grey px-3">
        <FaSearch />
      </i>
      <input
        className="input-box paragraph-text color-grey py-3 px-2 border-0 flex-fill"
        type="text"
        placeholder="Search Your Product From Here"
      />

      <style jsx>{`
        .search-div {
          color: rgb(119, 121, 140);
          background-color: rgb(243, 243, 243);
          border-radius: 6px;
          overflow: hidden;
        }
        .input-box {
          background-color: transparent;
        }
        .input-box:focus {
          outline: none;
        }
      `}</style>
    </div>
  );
};

export default SearchBar;
