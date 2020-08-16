import React from "react";
import Link from "next/link";

import NavItem from "../navbar/navitems";

const Sidenav = ({ show, onBackPress }) => {
  const lists = [
    { id: 1, link: "/", text: "Profile" },
    { id: 2, link: "/", text: "Checkout" },
    { id: 3, link: "/", text: "Your Order" },
    { id: 4, link: "/", text: "Order Invoice" },
    { id: 5, link: "/", text: "Logout" },
  ];
  return (
    <>
      <div
        className={`side-nav-background w-100 h-100 ${show ? "show" : ""}`}
        onClick={onBackPress}
      ></div>
      <div className={`side-nav h-100 ${show ? "show" : ""}`}>
        <div className="pt-5 border">
          {/* profile */}
          <div
            className="w-100 py-5 d-flex justify-content-center align-items-center"
            style={{ backgroundColor: "rgb(247, 247, 247)" }}
          >
            <div className="d-flex align-items-center">
              <div
                className="image-box rounded-circle overflow-hidden mr-3"
                style={{ maxWidth: 50, maxHeight: 50 }}
              >
                <img
                  className="img-fluid"
                  src="/assets/images/profile.jpg"
                  alt="Profile Image"
                />
              </div>
              <div className="d-flex flex-column justify-content-between">
                <h3 className="paragraph-text font-weight-bold color-secondary">
                  Devid Dragon
                </h3>
                <p className="paragraph-text color-grey mb-0">
                  +91 1236 4598 70
                </p>
              </div>
            </div>
          </div>
          {/* link list */}
          <div className="py-4 mt-3">
            {lists.map((list) => (
              <Link href="/" key={list.id}>
                <a className="text-decoration-none">
                  <NavItem
                    classList="px-5"
                    iconClass="mr-3"
                    text={list.text}
                    icon={list.icon}
                  />
                </a>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        .side-nav-background {
          position: fixed;
          top: 0;
          left: 0;
          background-color: rgba(0, 0, 0, 0.6);

          opacity: 0;
          visibility: hidden;
          transition: 0.5s;
          z-index: 9999;
        }
        .side-nav {
          width: 80%;
          max-width: 400px !important;
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
        .show {
          opacity: 1 !important;
          visibility: visible !important;
          transform: translateX(0) !important;
        }
      `}</style>
    </>
  );
};

export default Sidenav;
