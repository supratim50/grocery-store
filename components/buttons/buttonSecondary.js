import { FaShoppingCart } from "react-icons/fa";
const ButtonSecondary = ({ onPress, classList }) => {
  return (
    <div
      className={`button px-3 py-2 color-primary border d-flex justify-content-center align-items-center ${
        classList ? classList : ""
      }`}
      onClick={onPress}
    >
      <i className="mr-2" style={{ marginTop: -4 }}>
        <FaShoppingCart />
      </i>
      <p className="paragraph-text font-weight-bold mb-0">Cart</p>
      <style jsx>{`
        .button {
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
