import React, { useState, useEffect } from "react";
import { FaQuestionCircle, FaSearch, FaBars } from "react-icons/fa";
import Link from "next/link";

import SearchBar from "../searchBar/searchBar";
import ProductDropdown from "../buttons/productDropdown";
import Profile from "../profile/profile";
import Navitem from "../navbar/navitems";
import Sidenav from "../navbar/sidenav";
import SideSearch from "../searchBar/sideSearch";
import PrimaryButton from "../buttons/primaryButton";
import SignIn from "../login/signIn";

const Navbar = ({ fill }) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showSideSearch, setShowSideSearch] = useState(false);
  const [logedIn, setLogedIn] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
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
  // log in open
  const loginOpenFunc = () => {
    setLoginOpen(!loginOpen);
  };
  // for user login
  const logedInFunc = () => {
    setLogedIn(!logedIn);
    loginOpenFunc();
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
      {/* signin */}
      {loginOpen ? (
        <SignIn onBackPress={loginOpenFunc} signIn={logedInFunc} />
      ) : (
        ""
      )}
      {/* navbar */}
      <nav
        className={`navbar fixed-top w-100 d-flex align-items-center ${
          Yaxis === 0 ? "" : "scrolled"
        } ${fill ? "scrolled" : ""}`}
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
            <Link href="/offers">
              <a className="text-decoration-none">
                <Navitem text="Offer" />
              </a>
            </Link>
            <Link href="/faq">
              <a className="text-decoration-none">
                <Navitem text="Need Help" icon={<FaQuestionCircle />} />
              </a>
            </Link>
          </div>

          <div className="nav-box ml-4 d-flex justify-content-center align-items-center">
            <ProductDropdown classList="mr-3" />
            {logedIn ? (
              <Profile classList="d-none d-lg-block mr-3" />
            ) : (
              <PrimaryButton
                text="Join"
                classList="px-3 py-2 mr-3 d-none d-lg-block"
                onPress={loginOpenFunc}
              />
            )}

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
            padding: 15px 50px;
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
          .nav {
            max-width: 83% !important;
          }
          @media screen and (max-width: 992px) {
            .navbar {
              padding: 15px 18px;
            }
          }
          .nav {
            margin-left: auto !important;
          }
        `}</style>
      </nav>
    </>
  );
};

export default Navbar;
