const ButtonSecondary = ({ onPress, classList, text, icon }) => {
  return (
    <div
      className={`button px-3 py-2 border d-flex justify-content-center align-items-center ${
        classList ? classList : ""
      }`}
      onClick={onPress}
    >
      {icon ? (
        <i className="mr-2" style={{ marginTop: -4 }}>
          {icon}
        </i>
      ) : (
        ""
      )}
      <p className="paragraph-text font-weight-bold mb-0">{text}</p>
      <style jsx>{`
        .button {
          border-radius: 8px;
          transition: 0.5s;
          cursor: pointer;
        }
        .button:hover {
          border: 1px solid rgb(0, 158, 127) !important;
          background-color: rgb(0, 158, 127) !important;
          color: #fff !important;
        }
      `}</style>
    </div>
  );
};

export default ButtonSecondary;
