import React from "react";

const Input = ({ lebel, placeholder, classList }) => {
  return (
    <div className={`${classList ? classList : ""}`}>
      <p className="paragraph-text font-weight-bold color-secondary mb-3">
        {lebel && lebel}
      </p>
      <input
        className="w-100 border-0 py-3 px-4 color-grey background-grey paragraph-text rounded-lg"
        placeholder={placeholder && placeholder}
      />
      <style jsx>{`
        input:focus {
          outline: none;
        }
      `}</style>
    </div>
  );
};

export default Input;