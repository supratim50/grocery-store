import { useState } from "react";

import { FiShoppingBag, FiX } from "react-icons/fi";
import CartItem from "./cartItem";
import InputWithButton from "../form/inputWithButton";

const CartDrawer = () => {
  const products = [
    {
      id: 1,
      imageUrl: "/assets/images/product-1.jpg",
      title: "Brussels Sprout",
      price: "4",
      piece: "1 x 1 lb",
    },
    {
      id: 2,
      imageUrl: "/assets/images/product-2.jpg",
      title: "Brussels Sprout",
      price: "4",
      piece: "1 x 1 lb",
    },
    {
      id: 3,
      imageUrl: "/assets/images/product-3.jpeg",
      title: "Brussels Sprout",
      price: "4",
      piece: "1 x 1 lb",
    },
    {
      id: 4,
      imageUrl: "/assets/images/product-4.jpeg",
      title: "Brussels Sprout",
      price: "4",
      piece: "1 x 1 lb",
    },
    {
      id: 5,
      imageUrl: "/assets/images/product-1.jpg",
      title: "Brussels Sprout",
      price: "4",
      piece: "1 x 1 lb",
    },
    {
      id: 6,
      imageUrl: "/assets/images/product-5.jpg",
      title: "Brussels Sprout",
      price: "4",
      piece: "1 x 1 lb",
    },
    {
      id: 7,
      imageUrl: "/assets/images/product-4.jpeg",
      title: "Brussels Sprout",
      price: "4",
      piece: "1 x 1 lb",
    },
    {
      id: 8,
      imageUrl: "/assets/images/product-3.jpeg",
      title: "Brussels Sprout",
      price: "4",
      piece: "1 x 1 lb",
    },
    {
      id: 9,
      imageUrl: "/assets/images/product-2.jpg",
      title: "Brussels Sprout",
      price: "4",
      piece: "1 x 1 lb",
    },
    {
      id: 10,
      imageUrl: "/assets/images/product-5.jpg",
      title: "Brussels Sprout",
      price: "4",
      piece: "1 x 1 lb",
    },
  ];

  const [showVoucher, setshowVoucher] = useState(false);
  const [show, setShow] = useState(false);

  const showVoucherFunc = () => {
    setshowVoucher(!showVoucher);
  };
  const showFunc = () => {
    setShow(!show);
  };

  return (
    <>
      <div className="cart py-4 px-4 background-primary" onClick={showFunc}>
        <p className="text-paragraph color-white mb-0">Cart</p>
      </div>

      {/* hide oart */}
      <div
        className={`background w-100 h-100 ${show ? "show" : ""}`}
        onClick={showFunc}
      ></div>
      <div
        className={`cart-drawer w-100 background-white d-flex flex-column ${
          show ? "show" : ""
        }`}
        style={{ height: "100vh" }}
      >
        {/* heading */}
        <div className="p-3 d-flex justify-content-between align-items-center border-bottom">
          <div className="d-flex align-items-center">
            <i
              className="secondary-heading color-primary font-weight-bold mr-2"
              style={{ marginTop: -5 }}
            >
              <FiShoppingBag />
            </i>
            <p className="paragraph-text color-primary font-weight-bold mb-0">
              5 Items
            </p>
          </div>
          <div>
            <i
              className="paragraph-text color-secondary"
              style={{ cursor: "pointer" }}
              onClick={showFunc}
            >
              <FiX />
            </i>
          </div>
        </div>
        {/* heading end */}
        <div className="flex-fill" style={{ overflowX: "auto" }}>
          {products.map((product) => (
            <CartItem
              key={product.id}
              classList="py-3 border-bottom"
              imageUrl={product.imageUrl}
              title={product.title}
              price={product.price}
              piece={product.piece}
            />
          ))}
        </div>

        <div className="checkout-box p-3 w-100 background-white">
          {showVoucher ? (
            <InputWithButton
              placeholder="Enter Voucher Code here"
              buttonText="Apply"
              classList="shadow-lg"
            />
          ) : (
            <p
              className="paragraph-text color-primary font-weight-bold text-capitalize text-center"
              style={{ cursor: "pointer" }}
              onClick={showVoucherFunc}
            >
              Do you have a voucher ?
            </p>
          )}
        </div>
      </div>
      <style jsx>{`
        .background {
          position: fixed;
          top: 0;
          left: 0;
          z-index: 9999;
          background-color: rgba(0, 0, 0, 0.5);
          transition: 0.5s;

          opacity: 0;
          visibility: hidden;
        }
        .cart-drawer {
          max-width: 460px;
          position: fixed;
          top: 0;
          right: 0;
          z-index: 9999;
          transition: 0.5s;

          opacity: 0;
          visibility: hidden;
          transform: translateX(100%);
        }
        .show {
          opacity: 1;
          visibility: visible;
          transform: translateX(0);
        }

        .cart {
          position: fixed;
          top: 50%;
          right: 0%;
           {
            /* transform: translate(50%, 50%); */
          }
        }
      `}</style>
    </>
  );
};

export default CartDrawer;
