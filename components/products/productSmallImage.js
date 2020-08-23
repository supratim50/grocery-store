import React from "react";

const ProductSmallImage = ({ imgUrl, classList }) => {
  return (
    <div
      className={`smallImage overflow-hidden rounded-lg ${
        classList ? classList : ""
      }`}
    >
      <img className="img-fluid" src={imgUrl} alt="Product Image" />
      <style jsx>{`
        .smallImage {
          max-width: 70px !important;
          max-height: 86px !important;
        }

        @media screen and (max-width: 767px) {
          .smallImage {
            max-width: 73px !important;
            max-height: 90px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default ProductSmallImage;
