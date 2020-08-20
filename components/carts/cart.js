import { FiShoppingBag } from "react-icons/fi";

const Cart = () => {
  return (
    <div className="cart py-5 px-4 background-primary">
      <p className="text-paragraph color-white">
        <i>
          <FiShoppingBag />
        </i>{" "}
        6 items
      </p>
      <style jsx>{`
        .cart {
            position: fixed;
            top: -50%
            left: 0%;
        }
      `}</style>
    </div>
  );
};

export default Cart;
