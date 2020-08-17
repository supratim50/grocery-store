const SecondaryHeading = ({ classList, text }) => {
  return (
    <h2
      className={`secondary-heading text-capitalize ${
        classList ? classList : ""
      }`}
    >
      {text}
    </h2>
  );
};

export default SecondaryHeading;
