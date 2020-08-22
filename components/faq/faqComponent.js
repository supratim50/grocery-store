import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

const FaqComponent = ({ question, answer, classList }) => {
  const [show, setShow] = useState(false);

  const showFunc = () => {
    setShow(!show);
  };

  return (
    <div
      className={`shadow-sm rounded-lg ${
        classList ? classList : ""
      } background-white`}
    >
      <div className="p-4 question d-flex justify-content-between align-items-center">
        <h3 className="paragraph-text color-secondary font-weight-bold mb-0">
          {question}
        </h3>
        <i className="ml-3" style={{ cursor: "pointer" }} onClick={showFunc}>
          {show ? <FiMinus /> : <FiPlus />}
        </i>
      </div>
      <div className={`p-4 answer ${show ? "show" : ""}`}>
        <p className="paragraph-text color-grey">{answer}</p>
      </div>
      <style jsx>{`
        .answer {
          display: none;
        }
        .show {
          animation: showAns 1s ease-in-out;
          display: block !important;
        }
        @keyframes showAns {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default FaqComponent;
