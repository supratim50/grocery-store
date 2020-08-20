const PrimaryButton = ({ text, classList, onPress }) => {
  return (
    <div
      className={`button text-center text-capitalize paragraph-text font-weight-bold color-white background-primary ${classList}`}
      onClick={onPress}
    >
      {text}
      <style jsx>{`
        .button {
          border-radius: 8px;
          cursor: pointer;
          border: 1px solid rgb(0, 158, 127);
          transition: 0.5s;
        }
        .button:hover {
          background-color: transparent !important;
          color: rgb(0, 158, 127) !important;
        }
      `}</style>
    </div>
  );
};

export default PrimaryButton;
