import React from "react";

const DetailCard = ({ title, paragraph, hover, active }) => {
  return (
    <div className={`p-3 rounded-lg border`}>
      <div className="d-flex justify-content-between align-items-center">
        <p className="paragraph-sm font-weight-bold color-secondary">{title}</p>
      </div>
    </div>
  );
};

export default DetailCard;
