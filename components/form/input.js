import React from "react";

const Input = ({ lebel, placeholder, classList, inputClass }) => {
  return (
    <div className={`${classList ? classList : ""}`}>
      {lebel ? (
        <p className="paragraph-text font-weight-bold color-secondary mb-3">
          {lebel}
        </p>
      ) : (
        ""
      )}
      <input
        className={`w-100 border-0 color-grey paragraph-text rounded-lg ${
          inputClass ? inputClass : ""
        }`}
        placeholder={placeholder && placeholder}
      />
      <style jsx>{`
        input:focus {
          outline: none;
        }
        .transparent {
          background-color: transparent !important;
        }
      `}</style>
    </div>
  );
};

export default Input;
