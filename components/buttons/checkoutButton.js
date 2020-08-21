import SecondaryBtn from "./buttonSecondary";

const CheckoutButton = ({ classList, roundedPill, text, subText }) => {
  return (
    <div
      className={`p-1 d-flex justify-content-between align-items-center background-primary ${
        roundedPill ? "rounded-pill" : ""
      } ${classList ? classList : ""}`}
      style={{ cursor: "pointer" }}
    >
      <p className="px-3 paragraph-text color-white font-weight-bold mb-0">
        {text}
      </p>
      <SecondaryBtn
        text={subText}
        classList={`background-white color-primary ${
          roundedPill ? "rounded-pill" : ""
        }`}
      />
    </div>
  );
};

export default CheckoutButton;
