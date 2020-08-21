import Navbar from "../components/navbar/navbar";
import OrderDetails from "../components/orders/orderDetails";

const MyOrder = () => {
  return (
    <>
      <Navbar fill />
      <section className="top-section-pt">
        <div className="container border">
          <OrderDetails />
        </div>
      </section>
    </>
  );
};

export default MyOrder;
