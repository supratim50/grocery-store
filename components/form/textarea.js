import React from "react";

const Textarea = ({ placeholder, classList }) => {
  return (
    <div className={`${classList ? classList : ""}`}>
      <textarea
        className="w-100 border-0 py-3 px-4 color-grey background-grey paragraph-text rounded-lg"
        placeholder={placeholder && placeholder}
      ></textarea>
      <style jsx>{`
        textarea {
          height: 150px;
          resize: none;
        }
        textarea:focus {
          outline: none;
        }
      `}</style>
    </div>
  );
};

export default Textarea;
