import SecondaryHeading from "../heading/secondaryHeading";
import OrderDetails from "../details/orderDetails";

const OrderReceivedSection = () => {
  return (
    <section className="background-grey">
      <div className="container section-pb">
        <div className="col-12 col-lg-10 mx-auto rounded-lg background-white p-4 p-md-5">
          {/* order received */}
          <div className="section-pb">
            <SecondaryHeading
              text="order received"
              classList="font-weight-bold color-secondary mb-4 pb-3 px-3"
            />
            <p className="paragraph-text color-secondary mb-4 pb-2 px-3">
              Thank you. Your order has been received
            </p>
            <div className="row mx-auto">
              <div className="col-12 col-md-6 col-lg-3 mt-3 mt-lg-0">
                <p className="paragraph-text color-secondary mb-2 font-weight-bold">
                  Order Number
                </p>
                <p className="paragraph-text color-secondary">1444</p>
              </div>
              <div className="col-12 col-md-6 col-lg-3 mt-3 mt-lg-0">
                <p className="paragraph-text color-secondary mb-2 font-weight-bold">
                  Date
                </p>
                <p className="paragraph-text color-secondary">March 14, 2019</p>
              </div>
              <div className="col-12 col-md-6 col-lg-3 mt-3 mt-lg-0">
                <p className="paragraph-text color-secondary mb-2 font-weight-bold">
                  Total
                </p>
                <p className="paragraph-text color-secondary">$10.99</p>
              </div>
              <div className="col-12 col-md-6 col-lg-3 mt-3 mt-lg-0">
                <p className="paragraph-text color-secondary mb-2 font-weight-bold">
                  Payment Method
                </p>
                <p className="paragraph-text color-secondary">
                  Cash On Delivery
                </p>
              </div>
            </div>
          </div>
          {/* order received end */}
          {/* order details */}
          <div className="section-pb">
            <SecondaryHeading
              text="order Details"
              classList="font-weight-bold color-secondary mb-4 pb-3 px-3"
            />
            <OrderDetails title="Total Item" text="6 Items" classList="mb-3" />
            <OrderDetails
              title="Order Time"
              text="1.00pm 10/12/2019"
              classList="mb-3"
            />
            <OrderDetails
              title="Delivery Time"
              text="90 Minute Express Delivery"
              classList="mb-3"
            />
            <OrderDetails
              title="Delivery Location"
              text="1st Floor, House 149, Road-22, Mohakhali DOHS, Dhaka - North"
              classList="mb-3"
            />
          </div>
          {/* order details */}

          {/* Total Amount */}
          <div>
            <SecondaryHeading
              text="Total Amount"
              classList="font-weight-bold color-secondary mb-4 pb-3 px-3"
            />
            <OrderDetails title="Sub total" text="$1,000.00" classList="mb-3" />
            <OrderDetails
              title="Payment Method"
              text="Cash on Delivery"
              classList="mb-3"
            />
            <OrderDetails title="Cash on Delivery" text="10" classList="mb-3" />
            <OrderDetails title="Total" text="$1,000.00" classList="mb-3" />
          </div>
          {/* Total Amount end */}
        </div>
      </div>
      <style jsx>{`
        section {
          padding-top: 150px;
          height: 100%;
        }
      `}</style>
    </section>
  );
};

export default OrderReceivedSection;
