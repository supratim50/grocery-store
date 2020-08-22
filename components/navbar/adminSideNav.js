import { FaQuestionCircle } from "react-icons/fa";
import AdminSideItem from "./adminSideItem";

const AdminSideNav = () => {
  return (
    <div className="admin-side-nav background-white d-flex flex-column">
      <div className="top-section-pt section-pb flex-fill d-flex flex-column">
        {/* nav link */}
        <AdminSideItem icon={<FaQuestionCircle />} text="Dashboard" />
        <AdminSideItem icon={<FaQuestionCircle />} text="Products" />
        <AdminSideItem icon={<FaQuestionCircle />} text="Category" />
        <AdminSideItem icon={<FaQuestionCircle />} text="Orders" />
        <AdminSideItem
          icon={<FaQuestionCircle />}
          text="Logout"
          classList="mt-auto"
        />
        {/* nav link end */}
      </div>
      <style jsx>{`
        .admin-side-nav {
          position: fixed !important;
          width: 260px;
          height: 100vh;
        }
        @media screen and (max-width: 1199px) {
          .admin-side-nav {
            opacity: 0;
            visibility: hidden;
          }
        }
      `}</style>
    </div>
  );
};

export default AdminSideNav;
