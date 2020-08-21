const OrderProgress = () => {
  return (
    <div className="d-flex flex-md-column justify-content-center align-items-center">
      <div className="border">
        <div
          className="d-flex justify-content-center align-items-center rounded-circle border background-sky"
          style={{ width: 60, height: 60 }}
        >
          <p className="paragraph-text color-primary mb-0">1</p>
        </div>
      </div>
      <p className="paragraph-text font-weight-bold color-secondary ml-3 ml-md-0 mt-md-3 mb-0">
        Order Received
      </p>
    </div>
  );
};

export default OrderProgress;
