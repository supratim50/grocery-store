import React from "react";
import { FaSearch, FaArrowLeft } from "react-icons/fa";

const SideSearch = ({ show, onBackPress }) => {
  return (
    <>
      <div
        className={`side-search-background w-100 h-100 ${show ? "show" : ""}`}
        onClick={onBackPress}
      ></div>
      <div
        className={`side-search w-100 py-3 px-1 d-flex justify-content-center align-items-center ${
          show ? "show" : ""
        }`}
      >
        <i
          className="p-3"
          style={{ fontSize: 20, marginTop: -5 }}
          onClick={onBackPress}
        >
          <FaArrowLeft />
        </i>
        <div className="flex-fill">
          <input
            type="text"
            placeholder="Search here"
            className="w-100 py-3 px-2 border-0"
          />
        </div>
        <i className="p-3" style={{ fontSize: 20, marginTop: -5 }}>
          <FaSearch />
        </i>
      </div>
      <style jsx>{`
        .side-search-background {
          position: fixed;
          top: 0;
          left: 0;
          background-color: rgba(0, 0, 0, 0.6);

          opacity: 0;
          visibility: hidden;
          transition: 0.5s;
          z-index: 9999;
        }
        .side-search {
          position: fixed;
          top: 0;
          left: 0;
          background-color: #fff;

          transform: translateX(-100%);
          opacity: 0;
          visibility: hidden;
          transition: 0.5s;
          z-index: 9999;
        }
        input:focus {
          outline: none;
        }
        .show {
          opacity: 1 !important;
          visibility: visible !important;
          transform: translateX(0) !important;
        }
      `}</style>
    </>
  );
};

export default SideSearch;
