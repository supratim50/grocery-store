import { FiEdit2, FiX } from "react-icons/fi";

const DetailCard = ({ title, paragraph, hover, active, detailsClose }) => {
  return (
    <div
      className={`detailCard p-3 rounded-lg border h-100 background-grey ${
        hover ? "hover" : ""
      }`}
      style={{ transition: "0.5s" }}
    >
      <div className="d-flex justify-content-between align-items-center mb-2">
        <p className="title paragraph-sm font-weight-bold color-secondary mb-0">
          {title}
        </p>
        <div className="edit-box d-flex justify-content-center align-items-center">
          <div
            className="rounded-circle mr-2 border color-white font-weight-bold paragraph-sm d-flex justify-content-center align-items-center"
            style={{
              width: 25,
              height: 25,
              backgroundColor: "rgb(0, 158, 127)",
              cursor: "pointer",
            }}
          >
            <FiEdit2 />
          </div>
          <div
            className="rounded-circle border color-white font-weight-bold paragraph-sm d-flex justify-content-center align-items-center"
            style={{
              width: 25,
              height: 25,
              backgroundColor: "rgb(255, 91, 96)",
              cursor: "pointer",
            }}
            onClick={detailsClose}
          >
            <FiX />
          </div>
        </div>
      </div>

      <p className="paragraph-text color-grey mb-0">123 123 123</p>

      <style jsx>{`
        .edit-box {
          opacity: 0;
          visibility: hidden;
          transition: 0.3s;
        }
        .hover:hover .edit-box {
          opacity: 1 !important;
          visibility: visible !important;
        }
      `}</style>
    </div>
  );
};

export default DetailCard;
