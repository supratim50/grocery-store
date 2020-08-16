import React from "react";

const PprimaryHeading = ({ classList, text }) => {
  return (
    <h2
      className={`paragraph-text text-capitalize ${classList ? classList : ""}`}
    >
      {text}
    </h2>
  );
};

export default PprimaryHeading;
