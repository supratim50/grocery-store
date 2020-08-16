import { useState } from "react";
import ButtonSecondary from "../buttons/buttonSecondary";
import Quantity from "../quantity/quantity";
import ProductDetails from "./productDetails";

const Product = ({
  imageUrl,
  price,
  piece,
  title,
  smallImages,
  productDetails,
}) => {
  const [cart, setCart] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  const addToCart = () => {
    setCart(!cart);
  };

  const showDetailsFunc = () => {
    setShowDetails(!showDetails);
  };

  return (
    <>
      <div className="p-2 card border-0 background-white">
        <img
          className="card-img-top"
          src={imageUrl}
          alt="Product Image"
          onClick={showDetailsFunc}
        />
        <div className="card-body px-2 px-md-3">
          <p
            className="paragraph-text color-secondary font-weight-bold text-capitalize mb-2 text-truncate"
            onClick={showDetailsFunc}
            style={{ cursor: "pointer" }}
          >
            {title}
          </p>
          <p className="paragraph-text color-grey">{piece}</p>

          {/* price */}
          <div className="d-flex justify-content-between align-items-center">
            <p className="paragraph-text font-weight-bold color-primary mb-0">
              $ {price}
            </p>
            {cart ? (
              <Quantity onPress={addToCart} />
            ) : (
              <ButtonSecondary classList="rounded-pill" onPress={addToCart} />
            )}
          </div>
        </div>
      </div>
      {/* product details */}
      {showDetails ? (
        <ProductDetails
          show
          imageUrl={imageUrl}
          title={title}
          price={price}
          piece={piece}
          smallImages={smallImages}
          productDetails={productDetails}
          close={showDetailsFunc}
        />
      ) : (
        ""
      )}

      <style jsx>{`
        .card-img-top {
          height: 220px !important;
          object-fit: cover !important;
          cursor: pointer;
        }
        @media screen and (max-width: 767px) {
          .card-img-top {
            height: 120px !important;
          }
        }
      `}</style>
    </>
  );
};

export default Product;
