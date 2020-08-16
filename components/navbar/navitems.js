import React from "react";

const Navitems = ({ text, icon, iconClass, classList }) => {
  return (
    <div
      className={`nav-item p-3 paragraph-text color-secondary font-weight-bold d-flex align-items-center ${
        classList ? classList : ""
      }`}
    >
      {icon ? <i className={`mr-1 ${iconClass}`}>{icon}</i> : ""}
      {text}
      <style jsx>{`
        .nav-item {
          cursor: pointer;
        }
        .nav-item:hover {
          color: rgb(0, 158, 127) !important;
        }
      `}</style>
    </div>
  );
};

export default Navitems;
