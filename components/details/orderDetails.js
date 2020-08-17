const OrderDetails = ({ text, title, classList }) => {
  return (
    <div
      className={`d-flex justify-content-start align-items-center px-3 ${
        classList ? classList : ""
      }`}
    >
      <div className="title">
        <p className="paragraph-text font-weight-bold color-secondary text-capitalize mb-0">
          {title}
        </p>
      </div>
      <div style={{ width: 12 }}>
        <p className="paragraph-text color-secondary mb-0">:</p>
      </div>
      <div className="flex-fill">
        <p className="paragraph-text color-secondary pl-3 pl-md-5 mb-0">
          {text}
        </p>
      </div>
      <style jsx>{`
        .title {
          min-width: 210px !important;
          max-width: 210px !important;
        }
        @media screen and (max-width: 767px) {
          .title {
            min-width: 110px !important;
            max-width: 110px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default OrderDetails;
