import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const Quantity = ({ onPress }) => {
  const [quantity, setQuantity] = useState(0);
  //   decrease method
  const decrease = () => {
    if (quantity > 0) setQuantity(quantity - 1);
  };
  //   increase method
  const increase = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="quantity btn-group overflow-hidden">
      <button
        className="color-white p-2 paragraph-text border-0 background-primary"
        onClick={decrease}
      >
        <i>
          <FaMinus />
        </i>
      </button>
      <span
        className="color-white py-2 px-3 paragraph-text border-0 background-primary"
        onClick={onPress}
      >
        {quantity}
      </span>
      <button
        className="color-white p-2 paragraph-text border-0 background-primary"
        onClick={increase}
      >
        <i>
          <FaPlus />
        </i>
      </button>
      <style jsx>{`
        .quantity {
          border-radius: 20px !important;
        }
        button:focus {
          outline: none;
        }
      `}</style>
    </div>
  );
};

export default Quantity;
