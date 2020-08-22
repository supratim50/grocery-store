import React from "react";

import ProductRow from "./productRow";

const ProductTable = () => {
  return (
    <>
      <div
        className="row mx-auto background-grey py-2"
        style={{ minWidth: 500 }}
      >
        <div className="col-6 paragraph-text color-secondary font-weight-bold text-center">
          Item
        </div>
        <div className="col-3 paragraph-text color-secondary font-weight-bold text-center">
          Quantity
        </div>
        <div className="col-3 paragraph-text color-secondary font-weight-bold text-center">
          Price
        </div>
      </div>
      <ProductRow
        productName="Banana"
        productImage="/assets/images/product-1.jpg"
        piece="lb"
        price={50}
        quantity={2}
        totalPrice={100}
      />
      <ProductRow
        productName="Apple"
        productImage="/assets/images/product-2.jpg"
        piece="lb"
        price={60}
        quantity={2}
        totalPrice={120}
      />
    </>
  );
};

export default ProductTable;
