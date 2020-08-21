import { useState } from "react";
import OrderProgress from "../progressBar/orderProgress";

const OrderDetails = () => {
  const [show, setShow] = useState(false);
  const showFunc = () => {
    setShow(!show);
  };

  return (
    <div className="py-3 px-4 shadow-sm background-white">
      <div
        className={`${show ? "pb-3 pb-md-4 border-bottom" : ""}`}
        style={{ cursor: "pointer" }}
        onClick={showFunc}
      >
        {/* heading */}
        <div className="d-flex justify-content-between align-items-center mb-3">
          <p className="paragraph-text font-weight-bold color-secondary mb-0">
            Order #1
          </p>
          <div className="paragraph-sm px-3 py-2 ml-2 rounded-lg d-flex justify-content-center align-items-center background-sky color-blue text-capitalize">
            order on the way
          </div>
        </div>
        {/* order details */}
        <div className="d-flex justify-content-between align-items-center py-2 py-md-3">
          <p className="paragraph-sm color-secondary mb-0">Order Date</p>
          <p className="paragraph-sm color-secondary mb-0">7th April 2019</p>
        </div>
        <div className="d-flex justify-content-between align-items-center py-2 py-md-3">
          <p className="paragraph-sm color-secondary mb-0">Delivery Time</p>
          <p className="paragraph-sm color-secondary mb-0">13th April</p>
        </div>
        <div className="d-flex justify-content-between align-items-center font-weight-bold py-2 py-md-3">
          <p className="paragraph-sm color-secondary mb-0">Total Price</p>
          <p className="paragraph-sm color-secondary mb-0">$249.7</p>
        </div>
      </div>
      {/* hide section */}
      <div className={`hide-section py-3 py-md-4 d-none ${show ? "show" : ""}`}>
        <div className="row mx-auto mb-4">
          {/* delivery address */}
          <div className="col-12 col-md-8 px-0 mb-3 mb-md-0">
            <h2 className="paragraph-text font-weight-bold color-secondary">
              Delivery Address
            </h2>
            <p className="paragraph-text color-secondary">
              1756 Roy Alley, GIRARDVILLE, Pennsylvania
            </p>
          </div>
          {/* sub total */}
          <div className="col-12 col-md-4 px-0">
            <div className="d-flex justify-content-between mb-2 mb-md-3">
              <p className="paragraph-text color-secondary mb-0">Sub Total</p>
              <p className="paragraph-text color-secondary mb-0">$250</p>
            </div>
            <div className="d-flex justify-content-between mb-2 mb-md-3">
              <p className="paragraph-text color-secondary mb-0">Discount</p>
              <p className="paragraph-text color-secondary mb-0">$0</p>
            </div>
            <div className="d-flex justify-content-between mb-2 mb-md-3">
              <p className="paragraph-text color-secondary mb-0">
                Delivery Fee
              </p>
              <p className="paragraph-text color-secondary mb-0">$49.7</p>
            </div>
            <div className="d-flex justify-content-between font-weight-bold">
              <p className="paragraph-text color-secondary mb-0"> Total</p>
              <p className="paragraph-text color-secondary mb-0">$249.7</p>
            </div>
          </div>
        </div>
        {/* progress bar */}
        <div className="d-flex flex-column flex-md-row justify-content-center align-items-start align-items-md-center py-3 py-md-4 px-0 px-md-3">
          <OrderProgress />
          <OrderProgress />
          <OrderProgress />
        </div>
      </div>
      <style jsx>{`
        .show {
          display: block !important;
          animation: showAnim 0.5s ease-in-out;
        }

        @keyframes showAnim {
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

export default OrderDetails;
