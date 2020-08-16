import { FiX } from "react-icons/fi";

import ProductSmallImage from "./productSmallImage";
import PrimaryBtn from "../buttons/primaryButton";
import Quantity from "../quantity/quantity";

const roductDetails = ({
  imageUrl,
  price,
  piece,
  title,
  smallImages,
  productDetails,
  show,
  close,
}) => {
  return (
    <>
      <div
        className={`background w-100 h-100 ${show ? "show" : ""}`}
        onClick={close}
      ></div>
      <div className={`w-100 details-box p-4 ${show ? "show" : ""}`}>
        <div className="row mt-4 w-100 mx-auto">
          <div className="col-12 col-md-6 p-2">
            {/* product image */}
            <div className="product-img-box rounded-lg overflow-hidden w-100 mb-5 md-md-4 d-flex justify-content-center ">
              <img className="product-img" src={imageUrl} alt="Product Image" />
            </div>
            {/* product images */}
            <div className="d-flex justify-content-between align-items-center pt-md-3">
              {smallImages.map((smallImage) => (
                <ProductSmallImage
                  key={smallImage.id}
                  imgUrl={smallImage.image}
                />
              ))}
            </div>
          </div>

          <div className="col-12 col-md-6 p-2 pl-3 d-flex flex-column">
            {/* product-details */}
            <div className="product-text-box pt-3 pt-md-0 mt-4 mb-3 mt-md-0">
              <h2 className="paragraph-text color-secondary font-weight-bold mb-2 text-truncate">
                {title}
              </h2>
              <p className="paragraph-text color-grey  mb-4 pb-md-2">{piece}</p>
              <p className="details text-paragraph color-black-2 mb-4 pb-3 mb-md-0 pb-md-0">
                {productDetails}
              </p>
            </div>
            <div className="mt-auto">
              <div className="mb-4 pb-3 pb-md-0 mb-md-5">
                <Quantity />
              </div>
              {/* button */}
              <PrimaryBtn text="Buy Now" classList="py-3 px-4" />
            </div>
          </div>
        </div>
        <div className="cross-box p-1 d-inline-block" onClick={close}>
          <i className="cross paragraph-text font-weight-bold">
            <FiX />
          </i>
        </div>
      </div>
      <style jsx>{`
        .background {
          position: fixed;
          top: 0;
          left: 0;
          background-color: rgba(0, 0, 0, 0.7);
          opacity: 0;
          visibility: hidden;
          transition: 0.5s;

          z-index: 9999;
        }
        .details-box {
          max-width: 994px;
          border-radius: 10px;
          box-shadow: 4px 4px 50px rgba(21, 45, 105, 0.1);
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background-color: #fff;
          overflow-y: auto;
          transition: 0.5s;

          opacity: 0;
          visibility: hidden;
          z-index: 9999;
        }
        .details {
          line-height: 2;
        }

        .show {
          opacity: 1 !important;
          visibility: visible !important;
        }

        @media screen and (max-width: 767px) {
          .details-box {
            height: 100% !important;
            top: 0 !important;
            left: 0 !important;
            border-radius: 0 !important;
            transform: translate(0, 0);
          }
        }

        .product-img {
          max-width: 100% !important;
          max-height: 400px !important;
          object-fit: cover;
        }

        @media screen and (max-width: 767px) {
          .product-img {
            max-height: 236px !important;
          }
        }

        .product-text-box {
          max-height: 400px !important;
          overflow-x: auto;
        }

        .price {
          font-size: 30px !important;
        }

        .cross-box {
          position: absolute;
          top: 15px;
          right: 25px;
          cursor: pointer;
        }

        @media screen and (max-height: 767px) {
          .cross-box {
            top: 20px;
            right: 10px;
          }
        }
      `}</style>
    </>
  );
};

export default roductDetails;
