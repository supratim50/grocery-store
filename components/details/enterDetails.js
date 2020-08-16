import { FiX } from "react-icons/fi";
import Input from "../form/input";
import Textarea from "../form/textarea";
import PrimaryBtn from "../buttons/primaryButton";

const EnterDetails = ({ show, onPress, input, textarea }) => {
  return (
    <>
      <div
        className={`w-100 h-100 background ${show ? "show" : ""}`}
        onClick={onPress}
      >
        <div className="paragraph-text font-weight-bold cross d-flex justify-content-center align-items-center background-white rounded-circle">
          <FiX />
        </div>
      </div>
      {/* input div */}
      <div
        className={`enter-details-box p-4 background-white rounded-lg ${
          show ? "show" : ""
        }`}
      >
        <h2 className="secondary-heading font-weight-bold color-secondary text-capitalize mb-3">
          add new contact
        </h2>
        {input ? (
          <Input placeholder="Enter a phone number" classList="mb-3" />
        ) : (
          ""
        )}
        {textarea ? (
          <Textarea placeholder="Enter a phone number" classList="mb-3" />
        ) : (
          ""
        )}
        <PrimaryBtn text="Save Contact" />
      </div>
      <style jsx>{`
        .background {
          position: fixed;
          top: 0;
          left: 0;
          background-color: rgba(0, 0, 0, 0.7);
          transition: 0.5s;
          z-index: 9999;

          opacity: 0;
          visibility: hidden;
        }
        .enter-details-box {
          width: 95%;
          max-width: 360px;
          position: fixed;
          top: 50%;
          left: 50%;
          box-shadow: 4px 4px 50px rgba(21, 45, 105, 0.2s);
          transform: translate(-50%, -50%);
          transition: 0.5s;
          z-index: 9999;

          opacity: 0;
          visibility: hidden;
        }
        .cross {
          width: 30px;
          height: 30px;
          position: fixed;
          top: 20px;
          right: 20px;
          cursor: pointer;
          z-index: 9999;
        }

        .show {
          opacity: 1 !important;
          visibility: visible !important;
        }
      `}</style>
    </>
  );
};

export default EnterDetails;
