import { useState } from "react";
import { FiEdit2, FiX } from "react-icons/fi";

const DetailCard = ({
  title,
  paragraph,
  hover,
  active,
  editFunction,
  classList,
}) => {
  const [close, setClose] = useState(false);

  const closeFunc = () => {
    setClose(true);
  };

  return (
    <div className={`${classList ? classList : ""} ${close ? "d-none" : ""}`}>
      <div
        className={`detailCard py-2 px-3 rounded-lg h-100 background-grey ${
          active ? "active" : ""
        } ${hover ? "hover" : ""}`}
        style={{ transition: "0.5s" }}
      >
        <div className="d-flex justify-content-between align-items-center mb-1">
          <p className="title paragraph-sm font-weight-bold color-secondary mb-0">
            {title}
          </p>
          <div className="edit-box d-flex justify-content-center align-items-center">
            <div
              className="rounded-circle mr-2 color-white font-weight-bold paragraph-sm d-flex justify-content-center align-items-center"
              style={{
                width: 25,
                height: 25,
                backgroundColor: "rgb(0, 158, 127)",
                cursor: "pointer",
              }}
              onClick={editFunction && editFunction}
            >
              <FiEdit2 />
            </div>
            <div
              className="rounded-circle color-white font-weight-bold paragraph-sm d-flex justify-content-center align-items-center"
              style={{
                width: 25,
                height: 25,
                backgroundColor: "rgb(255, 91, 96)",
                cursor: "pointer",
              }}
              onClick={closeFunc}
            >
              <FiX />
            </div>
          </div>
        </div>

        <p className="paragraph-text color-grey mb-0">{paragraph}</p>
      </div>
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
        .active {
          background-color: #fff !important;
          border: 1px solid rgb(0, 158, 127) !important;
        }
      `}</style>
    </div>
  );
};

export default DetailCard;
