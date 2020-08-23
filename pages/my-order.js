import Navbar from "../components/navbar/navbar";
import OrderDetails from "../components/orders/orderDetails";

const MyOrder = () => {
  return (
    <>
      <Navbar fill />
      <section className="top-section-pt">
        <div className="container px-0 px-md-3">
          <OrderDetails />
        </div>
      </section>
    </>
  );
};

export default MyOrder;
