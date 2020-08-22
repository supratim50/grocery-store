const AdminSideItem = ({ icon, text, classList }) => {
  return (
    <div
      className={`nav-item p-3 ml-5 paragraph-text color-secondary font-weight-bold d-flex align-items-center ${
        classList ? classList : ""
      }`}
    >
      <i className={`mr-2`}>{icon}</i> {text}
      <style jsx>{`
        .nav-item {
          border-radius: 30px 0 0 30px;
          transition: 0.5s;
          cursor: pointer;
        }
        .nav-item:hover {
          background-color: rgb(243, 243, 243) !important;
          color: rgb(0, 158, 127) !important;
        }
        .active {
          background-color: rgb(243, 243, 243) !important;
          color: rgb(0, 158, 127) !important;
        }
      `}</style>
    </div>
  );
};

export default AdminSideItem;
