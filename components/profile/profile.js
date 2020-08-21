import React, { useState } from "react";
import { FaCaretDown } from "react-icons/fa";
import Link from "next/link";

import NavItem from "../navbar/navitems";

const ProductDropdown = ({ classList }) => {
  const [show, setShow] = useState(false);
  const lists = [
    { id: 1, link: "/profile", text: "Profile" },
    { id: 2, link: "/checkout", text: "Checkout" },
    { id: 3, link: "/my-order", text: "Your Order" },
    { id: 4, link: "/order-received", text: "Order Invoice" },
    { id: 5, link: "/", text: "Logout" },
  ];

  const showDrop = () => {
    setShow(!show);
  };

  return (
    <div
      className={`drop-down position-relative ${classList ? classList : ""}`}
    >
      <div style={{ maxWidth: 38, cursor: "pointer" }} onClick={showDrop}>
        <img
          src="/assets/images/profile.jpg"
          alt="Profile"
          className="img-fluid rounded-circle"
        />
      </div>
      <div
        className={`dropdown-box border position-absolute rounded-lg p-3 ${
          show ? "show" : ""
        }`}
      >
        {lists.map((list) => (
          <Link href={list.link}>
            <a className="text-decoration-none">
              <NavItem
                iconClass="mr-3"
                text={list.text}
                icon={list.icon}
                key={list.id}
              />
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
