import { FiX } from "react-icons/fi";
import { useState } from "react";

const PaymentCard = ({ imageUrl, active }) => {
  const [close, setClose] = useState(false);

  const closeFunc = () => {
    setClose(!close);
  };

  return (
    <div
      className={`col-12 col-md-4 px-0 px-md-3 mt-3 ${close ? "d-none" : ""}`}
    >
      <div
        className={`payment-card p-3 rounded-lg ${active ? "active" : ""} `}
        style={{ backgroundColor: "rgba(0, 158, 127,0.1)" }}
      >
        <div className="d-flex justify-content-between align-items-center mb-2">
          <img
            className="border"
            src={imageUrl}
            alt="Image"
            style={{ maxWidth: 100, maxHeight: 33 }}
          />
          <div
            className="cross rounded-circle color-white font-weight-bold paragraph-sm d-flex justify-content-center align-items-center"
            style={{
              width: 25,
              height: 25,
              backgroundColor: "rgb(255, 91, 96)",
              cursor: "pointer",
            }}
            onClick={closeFunc}
          >
            <FiX />
          </div>
        </div>
        <p className="paragraph-sm color-secondary text-capitalize">
          Card Number
        </p>
        <p className="paragraph-text color-secondary text-capitalize font-weight-bold mb-2">
          ****&nbsp; ****&nbsp; ****&nbsp; 4535
        </p>
        <p className="paragraph-sm color-secondary text-capitalize font-weight-bold mb-2">
          John Doe Smith
        </p>
      </div>

      <style jsx>{`
        .cross {
          opacity: 0;
          visibility: hidden;
          transition: 0.5s;
        }
        .payment-card:hover .cross {
          opacity: 1 !important;
          visibility: visible !important;
        }
        .active {
          border: 1px solid rgb(0, 158, 127) !important;
        }
      `}</style>
    </div>
  );
};

export default PaymentCard;
