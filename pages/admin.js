import Navbar from "../components/navbar/navbar";
import AdminCard from "../components/cards/adminCard";
import { FiShoppingCart } from "react-icons/fi";

const Admin = () => {
  return (
    <>
      <Navbar fill />
      <section className="top-section-pt">
        <div className="container">
          <div className="row mx-auto">
            <div className="col-12 col-md-6 col-lg-4 col-xl-3 mt-3 mt-xl-0">
              <AdminCard
                title="Total Revenue"
                subTitle="(Last 30 days)"
                icon={<FiShoppingCart />}
                color="yellow"
                numbers="$15,000"
                status="success"
                statusTitle="Revenue Up"
                details="(pevious 30 days)"
              />
            </div>
            <div className="col-12 col-md-6 col-lg-4 col-xl-3 mt-3 mt-xl-0">
              <AdminCard
                title="Total Revenue"
                subTitle="(Last 30 days)"
                icon={<FiShoppingCart />}
                color="pink"
                numbers="15,000"
                status="error"
                statusTitle="Order down"
                details="(pevious 30 days)"
              />
            </div>
            <div className="col-12 col-md-6 col-lg-4 col-xl-3 mt-3 mt-xl-0">
              <AdminCard
                title="Total Revenue"
                subTitle="(Last 30 days)"
                icon={<FiShoppingCart />}
                color="sky"
                numbers="15,000"
                status="error"
                statusTitle="Order down"
                details="(pevious 30 days)"
              />
            </div>
            <div className="col-12 col-md-6 col-lg-4 col-xl-3 mt-3 mt-xl-0">
              <AdminCard
                title="Total Revenue"
                subTitle="(Last 30 days)"
                icon={<FiShoppingCart />}
                color="orange"
                numbers="15,000"
                status="error"
                statusTitle="Order down"
                details="(pevious 30 days)"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Admin;
