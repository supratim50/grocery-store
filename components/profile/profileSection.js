import { useState } from "react";
import { FiPlus } from "react-icons/fi";

import Input from "../form/input";
import PrimaryButton from "../buttons/primaryButton";
import SecondaryButton from "../buttons/buttonSecondary";
import DetailsCard from "../cards/detailCard";
import EnterDetails from "../details/enterDetails";
import PaymentCard from "../cards/paymentCard";

const ProfileSection = () => {
  const [addEditContact, setAddEditContact] = useState(false);
  const [addEditAddress, setAddEditAddress] = useState(false);

  const addEditContactFunc = () => {
    setAddEditContact(!addEditContact);
  };
  const addEditAddressFunc = () => {
    setAddEditAddress(!addEditAddress);
  };

  return (
    <>
      <section className="section-pb top-section-pt">
        <div className="container">
          <h1
            className="font-weight-bold color-secondary mb-4 mb-lg-5 px-3"
            style={{ fontSize: 25 }}
          >
            Your Profile
          </h1>
          <div className="row mx-auto section-pb">
            <div className="col-12 col-md-5 px-0 px-md-3 mt-3 mt-md-0">
              <Input
                lebel="Name"
                placeholder="Name"
                inputClass="py-3 px-4 background-grey"
              />
            </div>
            <div className="col-12 col-md-5 px-0 px-md-3 mt-3 mt-md-0">
              <Input
                lebel="Email"
                placeholder="Email"
                inputClass="py-3 px-4 background-grey"
              />
            </div>
            <div className="col-12 col-md-2 px-0 px-md-3 mt-3 mt-md-0 d-flex align-items-end">
              <PrimaryButton
                text="send"
                classList="w-100 align-items-end px-4 py-3"
              />
            </div>
          </div>
          {/* contact details */}
          <h2 className="paragraph-text font-weight-bold color-secondary mb-4 text-capitalize px-3">
            Contact Number
          </h2>
          <div className="row mx-auto section-pb">
            <DetailsCard
              title="Primary"
              paragraph="123 123 123"
              active
              hover
              editFunction={addEditContactFunc}
            />
            <DetailsCard
              title="Secondary"
              paragraph="123 123 123"
              hover
              editFunction={addEditContactFunc}
            />
            <div className={`col-12 col-md-4 px-0 px-md-3 mt-3 `}>
              <SecondaryButton
                classList="h-100 rounded-lg color-primary"
                text="Add Contact"
                onPress={addEditContactFunc}
              />
            </div>
          </div>
          {/* contact details end */}
          {/* address details */}
          <h2 className="paragraph-text font-weight-bold color-secondary mb-4 text-capitalize px-3">
            Contact Number
          </h2>
          <div className="row mx-auto section-pb">
            <DetailsCard
              title="Primary"
              paragraph="27 Street, 2569 Heritage Road Visalia, CA 93291"
              active
              hover
            />
            <DetailsCard
              title="Secondary"
              paragraph="27 Street, 2569 Heritage Road Visalia, CA 93291"
              hover
            />
            <div className={`col-12 col-md-4 px-0 px-md-3 mt-3`}>
              <SecondaryButton
                classList="h-100 rounded-lg color-primary"
                text="Add Address"
                onPress={addEditAddressFunc}
              />
            </div>
          </div>
          {/* address details end */}
          {/* add credit card */}
          <h2 className="paragraph-text font-weight-bold color-secondary mb-4 text-capitalize px-3">
            Payment Option
          </h2>
          <div className="d-flex justify-content-between align-items-center px-3">
            <p className="paragraph-sm color-primary font-weight-bold">
              Saved Cards
            </p>
            <p
              className="paragraph-sm color-primary font-weight-bold"
              style={{ cursor: "pointer" }}
            >
              <i className="mr-2">
                <FiPlus />
              </i>{" "}
              Add Cards
            </p>
          </div>
          {/* cards */}
          <div className="row mx-auto">
            <PaymentCard active imageUrl="/assets/images/paypal.png" />
            <PaymentCard imageUrl="/assets/images/master-card.png" />
            <PaymentCard imageUrl="/assets/images/visa.png" />
          </div>
          {/* add credit card end */}
        </div>
      </section>
      {/* for editing and enter popup form  */}
      {/* edit contact */}
      {addEditContact ? (
        <EnterDetails show input onPress={addEditContactFunc} />
      ) : (
        ""
      )}
      {/* edit address */}
      {addEditAddress ? (
        <EnterDetails show input textarea onPress={addEditAddressFunc} />
      ) : (
        ""
      )}
    </>
  );
};

export default ProfileSection;
