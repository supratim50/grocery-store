import React, { useState, useEffect } from "react";
import { FaQuestionCircle, FaSearch, FaBars } from "react-icons/fa";
import Link from "next/link";

import SearchBar from "../searchBar/searchBar";
import ProductDropdown from "../buttons/productDropdown";
import Profile from "../profile/profile";
import Navitem from "../navbar/navitems";
import Sidenav from "../navbar/sidenav";
import SideSearch from "../searchBar/sideSearch";

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showSideSearch, setShowSideSearch] = useState(false);
  // for scroll
  const [Yaxis, setYaxis] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setYaxis(window.scrollY);
    });
  }, [Yaxis]);

  const showSidebarFunc = () => {
    setShowSidebar(!showSidebar);
  };
  const setShowSearchFunc = () => {
    setShowSideSearch(!showSideSearch);
  };

  return (
    <>
      {/* side nav */}
      {showSidebar ? (
        <Sidenav show onBackPress={showSidebarFunc} />
      ) : (
        <Sidenav />
      )}
      {/* side search */}
      {showSideSearch ? (
        <SideSearch show onBackPress={setShowSearchFunc} />
      ) : (
        <SideSearch />
      )}
      {/* navbar */}
      <nav
        className={`navbar fixed-top w-100 d-flex align-items-center ${
          Yaxis === 0 ? "" : "scrolled"
        }`}
      >
        <div className="d-flex justify-content-center align-items-center">
          <i
            className="bar-icon mr-3 d-block d-lg-none"
            onClick={showSidebarFunc}
          >
            <FaBars />
          </i>
          <Link href="/">
            <a>
              <img
                src="/assets/images/Logo.svg"
                alt="Logo"
                style={{ maxWidth: 110 }}
              />
            </a>
          </Link>
        </div>
        <div className="nav d-flex align-items-center justify-content-end flex-lg-fill">
          {/* search */}
          <SearchBar classList="flex-fill d-none d-lg-flex" />
          <div className="nav-box ml-4 pl-2 justify-content-center align-items-center d-none d-lg-flex">
            <Navitem text="Offer" />
            <Navitem text="Need Help" icon={<FaQuestionCircle />} />
          </div>

          <div className="nav-box ml-4 d-flex justify-content-center align-items-center">
            <ProductDropdown classList="mr-3" />
            <Profile classList="d-none d-lg-block" />
            <i
              className="color-grey d-block d-lg-none"
              onClick={setShowSearchFunc}
            >
              <FaSearch />
            </i>
          </div>
        </div>
        <style jsx>{`
          .navbar {
            padding: 20px 50px;
            transition: 0.5s;
          }
          .scrolled {
            background-color: #fff !important;
            box-shadow: rgba(0, 0, 0, 0.06) 0px 1px 2px;
          }
          .bar-icon {
            font-size: 21px;
            margin-top: -4px;
          }
          @media screen and (max-width: 992px) {
            .navbar {
              padding: 15px 18px;
            }
          }
          .nav {
            margin-left: 180px;
          }
          @media screen and (max-width: 1060px) {
            .nav {
              margin-left: 90px !important;
            }
          }
          @media screen and (max-width: 992px) {
            .nav {
              margin-left: 0px !important;
            }
          }
        `}</style>
      </nav>
    </>
  );
};

export default Navbar;
