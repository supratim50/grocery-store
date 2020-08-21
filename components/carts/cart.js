import { FiShoppingBag } from "react-icons/fi";
import SecondaryBtn from "../buttons/buttonSecondary";

const Cart = ({ onPress }) => {
  return (
    <div
      className="cart py-1 px-3 p-md-3 rounded-lg background-primary d-flex flex-row flex-md-column justify-content-between align-items-center"
      onClick={onPress}
    >
      <p className="text-paragraph color-white mb-0">
        <i>
          <FiShoppingBag />
        </i>{" "}
        6 items
      </p>
      <SecondaryBtn
        text="$13.20"
        classList="background-white color-primary mt-md-3 border"
      />
      <style jsx>{`
        .cart {
          position: fixed;
          top: 50%;
          right: 0%;
          cursor: pointer;
        }
        @media screen and (max-width: 767px) {
          .cart {
            width: 95%;
            border-radius: 50px !important;
            top: 90%;
            right: 50%;
            transform: translateX(50%);
          }
        }
      `}</style>
    </div>
  );
};

export default Cart;
