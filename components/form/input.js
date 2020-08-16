import React from "react";

const Input = ({ lebel }) => {
  return (
    <div>
      <p className="paragraph-text font-weight-bold color-secondary mb-3">
        {lebel}
      </p>
      <input
        className="w-100 border-0 py-3 px-4 color-grey background-grey paragraph-text rounded-lg"
        placeholder={lebel}
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
