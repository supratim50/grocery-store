import React from "react";

const DiscountCard = ({ imageUrl, classList }) => {
  return (
    <div className={`rounded-lg w-100 overflow-hidden ${classList}`}>
      <img className="img-fluid" src={imageUrl} alt="Discount Image" />
    </div>
  );
};

export default DiscountCard;
