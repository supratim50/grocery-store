import React from "react";

const ProductRow = ({
  productName,
  productImage,
  piece,
  price,
  quantity,
  totalPrice,
}) => {
  return (
    //   items
    <div className="row mx-auto" style={{ minWidth: 500 }}>
      <div className="col-6">
        <div className="d-flex align-items-center">
          {/* image */}
          <div className="image-box">
            <img className="img-fluid" src={productImage} alt="Product Image" />
          </div>
          {/* product details */}
          <div className="flex-fill ml-3">
            <p className="paragraph-text font-weight-bold color-secondary mb-2">
              {productName}
            </p>
            <p className="paragraph-text color-secondary mb-2">{piece}</p>
            <p className="paragraph-text color-primary mb-2">${price}</p>
          </div>
        </div>
      </div>
      <div className="col-3 d-flex justify-content-center align-items-center">
        {quantity}
      </div>
      <div className="col-3 d-flex justify-content-center align-items-center">
        ${totalPrice}
      </div>

      <style jsx>{`
        .image-box {
          max-width: 150px !important;
          max-height: 190px !important;
        }
        @media screen and (max-width: 767px) {
          .image-box {
            max-width: 130px !important;
            max-height: 160px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default ProductRow;
