import { useState } from "react";

import { FiX } from "react-icons/fi";

const CartItem = ({ imageUrl, title, price, piece, classList }) => {
  const [close, setClose] = useState(false);
  const closeFunc = () => {
    setClose(true);
  };

  return (
    <div
      className={`row mx-auto px-0 ${classList ? classList : ""} ${
        close ? "d-none" : ""
      }`}
    >
      <div className="col-4 d-flex align-items-center">
        <img src={imageUrl} className="img-fluid" style={{ maxHeight: 110 }} />
      </div>
      <div className="col-6 d-flex flex-column justify-content-center px-0">
        <h2 className="paragraph-text color-secondary font-weight-bold text-capitalize mb-2 text-truncate">
          {title}
        </h2>
        <p className="paragraph-text color-primary font-weight-bold mb-2">
          {price}
        </p>
        <p className="paragraph-text color-secondary mb-0">{piece}</p>
      </div>
      <div className="col-2 d-flex align-items-center">
        <i
          className="paragraph-text color-secondary"
          style={{ cursor: "pointer" }}
          onClick={closeFunc}
        >
          <FiX />
        </i>
      </div>
    </div>
  );
};

export default CartItem;
