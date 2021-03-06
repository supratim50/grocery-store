import InputWithButton from "../form/inputWithButton";
import PrimaryHeading from "../heading/primaryHeading";
import SecondaryButton from "../buttons/buttonSecondary";
import DetailsCard from "../cards/detailCard";
import { FiPlus } from "react-icons/fi";
import PaymentCard from "../cards/paymentCard";

const CheckoutSection = () => {
  return (
    <section className="background-grey section-pb top-section-pt">
      <div className="container">
        <div className="col-12 col-lg-10 mx-auto rounded-lg background-white p-4 p-md-5">
          {/* pricing div */}
          <div className="rounded-lg background-grey p-3 p-md-5 section-mb">
            <div className="d-flex justify-content-between mb-3">
              {/* price */}
              <p className="paragraph-text color-secondary mb-0">
                Sub Total (11 items)
              </p>
              <p className="paragraph-text color-secondary font-weight-bold mb-0">
                $29.60
              </p>
            </div>
            {/* shippment charge */}
            <div className="d-flex justify-content-between mb-3">
              <p className="paragraph-text color-secondary mb-0">
                Shipping Free
              </p>
              <p className="paragraph-text color-secondary font-weight-bold mb-0">
                $00.00
              </p>
            </div>
            {/* voucher */}
            <div className="d-flex flex-column flex-md-row align-items-start align-items-md-center justify-content-between mb-3">
              <p className="paragraph-text color-secondary mb-3 mb-md-0">
                Voucher
              </p>
              <InputWithButton
                placeholder="Enter Voucher Code here"
                buttonText="Apply"
              />
            </div>
            {/* total */}
            <div className="d-flex justify-content-between mb-3">
              <p className="paragraph-text color-secondary mb-0">Total</p>
              <p className="paragraph-text color-secondary font-weight-bold mb-0">
                $29.60
              </p>
            </div>
          </div>
          {/* pricing div end */}
          {/* Deliver schedule */}
          <PrimaryHeading
            classList="font-weight-bold color-secondary mb- px-3"
            text="Deliver schedule"
          />
          <div className="row mx-auto section-pb">
            <DetailsCard
              title="express-delivery"
              paragraph="90 min express delivery"
              active
              classList="col-12 col-md-6 col-lg-4 px-0 px-md-3 mt-3"
            />
            <DetailsCard
              title="8am-11am"
              paragraph="8.00 AM - 11.00 AM"
              classList="col-12 col-md-6 col-lg-4 px-0 px-md-3 mt-3"
            />
            <DetailsCard
              title="8am-11am"
              paragraph="8.00 AM - 11.00 AM"
              classList="col-12 col-md-6 col-lg-4 px-0 px-md-3 mt-3"
            />
            <DetailsCard
              title="8am-11am"
              paragraph="8.00 AM - 11.00 AM"
              classList="col-12 col-md-6 col-lg-4 px-0 px-md-3 mt-3"
            />
            <DetailsCard
              title="8am-11am"
              paragraph="8.00 AM - 11.00 AM"
              classList="col-12 col-md-6 col-lg-4 px-0 px-md-3 mt-3"
            />

            <DetailsCard
              title="8am-11am"
              paragraph="8.00 AM - 11.00 AM"
              classList="col-12 col-md-6 col-lg-4 px-0 px-md-3 mt-3"
            />
          </div>
          {/* Deliver schedule */}
          {/* address details */}
          <PrimaryHeading
            classList="font-weight-bold color-secondary mb- px-3"
            text="Delivery Address"
          />
          <div className="row mx-auto section-pb">
            <DetailsCard
              title="Primary"
              paragraph="27 Street, 2569 Heritage Road Visalia, CA 93291"
              active
              hover
              classList="col-12 col-md-6 col-lg-4 px-0 px-md-3 mt-3"
            />
            <DetailsCard
              title="Secondary"
              paragraph="27 Street, 2569 Heritage Road Visalia, CA 93291"
              hover
              classList="col-12 col-md-6 col-lg-4 px-0 px-md-3 mt-3"
            />
            <div className={`col-12 col-md-6 col-lg-4 px-0 px-md-3 mt-3`}>
              <SecondaryButton
                classList="h-100 rounded-lg color-primary"
                text="Add Address"
                // onPress={addEditAddressFunc}
              />
            </div>
          </div>
          {/* address details end */}
          {/* contact details */}
          <PrimaryHeading
            classList="font-weight-bold color-secondary mb- px-3"
            text="Contact Number"
          />
          <div className="row mx-auto section-pb">
            <DetailsCard
              title="Primary"
              paragraph="123 123 123"
              active
              hover
              classList="col-12 col-md-6 col-lg-4 px-0 px-md-3 mt-3"
              // editFunction={addEditContactFunc}
            />
            <DetailsCard
              title="Secondary"
              paragraph="123 123 123"
              hover
              classList="col-12 col-md-6 col-lg-4 px-0 px-md-3 mt-3"
              // editFunction={addEditContactFunc}
            />
            <div className={`col-12 col-md-6 col-lg-4 px-0 px-md-3 mt-3 `}>
              <SecondaryButton
                classList="h-100 rounded-lg color-primary"
                text="Add Contact"
                // onPress={addEditContactFunc}
              />
            </div>
          </div>
          {/* contact details end */}
          <hr className="background-grey" />
          {/* add credit card */}
          <PrimaryHeading
            classList="font-weight-bold color-secondary mb- px-3 section-pt"
            text="Payment Option"
          />
          <div className="d-flex justify-content-between align-items-center px-3">
            <p className="paragraph-sm color-primary font-weight-bold">
              Saved Cards
            </p>
            <p className="paragraph-sm color-primary font-weight-bold">
              <i className="mr-2">
                <FiPlus />
              </i>{" "}
              Add Cards
            </p>
          </div>
          {/* cards */}
          <div className="row mx-auto">
            <PaymentCard
              active
              imageUrl="/assets/images/paypal.png"
              classList="col-12 col-md-6 col-lg-4 px-0 px-md-3 mt-3"
            />
            <PaymentCard
              imageUrl="/assets/images/master-card.png"
              classList="col-12 col-md-6 col-lg-4 px-0 px-md-3 mt-3"
            />
            <PaymentCard
              imageUrl="/assets/images/visa.png"
              classList="col-12 col-md-6 col-lg-4 px-0 px-md-3 mt-3"
            />
          </div>
          {/* add credit card end */}
        </div>
      </div>
      <style jsx>{`
        section {
          height: 100% !important;
        }
      `}</style>
    </section>
  );
};

export default CheckoutSection;
