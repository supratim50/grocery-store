const PrimaryButton = ({ text, classList }) => {
  return (
    <div
      className={`button py-3 px-4 border text-center text-capitalize paragraph-text font-weight-bold color-white background-primary ${classList}`}
    >
      {text}
      <style jsx>{`
        .button {
          border-radius: 8px;
        }
      `}</style>
    </div>
  );
};

export default PrimaryButton;
