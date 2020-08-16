import React from "react";

const Header = () => {
  return (
    <section className="header w-100 overflow-hidden d-flex justify-content-center align-items-center">
      <div className="container">
        <h1 className="primary-heading color-secondary font-weight-bold text-center">
          Grocries delivered in 90 minutes
        </h1>
        <p className="paragraph-text color-grey text-center">
          Get your healthy foods & snacks delivered at your doorsteps all day
          everyday
        </p>
      </div>
      <style jsx>{`
        .header {
          height: 100vh;
          background-image: url(/assets/images/groceryHeader.png);
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        }
        @media screen and (max-width: 1280px) {
          .header {
            background-position: left;
          }
        }
      `}</style>
    </section>
  );
};

export default Header;
