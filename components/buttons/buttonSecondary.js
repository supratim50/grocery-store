const ButtonSecondary = ({
  onPress,
  classList,
  text,
  icon,
  textClass,
  iconClass,
}) => {
  return (
    <div
      className={`button px-3 py-2 border d-flex justify-content-center align-items-center ${
        classList ? classList : ""
      }`}
      onClick={onPress}
    >
      {icon && (
        <i
          className={`mr-md-2 ${iconClass ? iconClass : ""}`}
          style={{ marginTop: -4 }}
        >
          {icon}
        </i>
      )}
      <p
        className={`paragraph-text font-weight-bold mb-0 ${
          textClass ? textClass : ""
        }`}
      >
        {text}
      </p>
      <style jsx>{`
        .button {
          border-radius: 8px;
          transition: 0.5s;
          cursor: pointer;
        }
        .button:hover {
          background-color: rgb(0, 158, 127);
          color: #fff !important;
        }
      `}</style>
    </div>
  );
};

export default ButtonSecondary;
