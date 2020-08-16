import React, { useState } from "react";
import { FaQuestionCircle, FaCaretDown } from "react-icons/fa";
import Link from "next/link";

import NavItem from "../navbar/navitems";

const ProductDropdown = ({ classList }) => {
  const [show, setShow] = useState(false);
  const lists = [
    { id: 1, text: "Grocery", icon: <FaQuestionCircle /> },
    { id: 2, text: "Makeup", icon: <FaQuestionCircle /> },
    { id: 3, text: "Bags", icon: <FaQuestionCircle /> },
    { id: 4, text: "Books", icon: <FaQuestionCircle /> },
    { id: 5, text: "Medicine", icon: <FaQuestionCircle /> },
    { id: 6, text: "Foods", icon: <FaQuestionCircle /> },
  ];

  const showDrop = () => {
    setShow(!show);
  };

  return (
    <div
      className={`drop-down position-relative ${classList ? classList : ""}`}
    >
      <button
        className="drop-button border px-2 px-md-3 py-2 rounded-lg font-weight-bold color-primary"
        onClick={showDrop}
      >
        {/* <i className="mr-2">
          <FaPepperHot />
        </i> */}
        <span className="mr-3">Grocery</span>
        <i>
          <FaCaretDown />
        </i>
      </button>
      <div
        className={`dropdown-box border position-absolute rounded-lg p-3 ${
          show ? "show" : ""
        }`}
      >
        {lists.map((list) => (
          <Link href="/" key={list.id}>
            <a className="text-decoration-none">
              <NavItem iconClass="mr-3" text={list.text} icon={list.icon} />
            </a>
          </Link>
        ))}
      </div>
      <style jsx>{`
        .drop-button {
          background-color: transparent;
        }
        .drop-button:focus {
          outline: none;
        }
        .dropdown-box {
          min-width: 200px;
          top: calc(100% + 15px);
          right: 0;
          box-shadow: rgba(142, 142, 142, 0.14) 0px 3px 20px;
          background-color: #fff;
          transform: translateY(30px);
          opacity: 0;
          visibility: hidden;
          transition: 0.5s;
        }
        .show {
          transform: translateY(0) !important;
          visibility: visible !important;
          opacity: 1 !important;
        }
      `}</style>
    </div>
  );
};

export default ProductDropdown;
