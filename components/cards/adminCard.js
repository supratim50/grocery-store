import Link from "next/link";
import { FiArrowUp, FiArrowDown } from "react-icons/fi";

const AdminCard = ({
  title,
  subTitle,
  numbers,
  details,
  status,
  statusTitle,
  icon,
  color,
}) => {
  return (
    <div className="background-white shadow-sm p-4 rounded-lg">
      <div
        className="d-flex justify-content-between align-items-center"
        style={{ marginBottom: 50 }}
      >
        <div className="mr-2">
          <p className="paragraph-text font-weight-bold color-secondary mb-2">
            {title}
          </p>
          <p className="paragraph-sm color-secondary mb-0">{subTitle}</p>
        </div>
        <div
          className={`icon-box d-flex justify-content-center align-items-center ${
            color ? color : ""
          }`}
        >
          <i className="secondary-heading">{icon}</i>
        </div>
      </div>
      <div style={{ marginBottom: 50 }}>
        <h2 className="secondary-heading color-secondary font-weight-bold mb-2">
          {numbers}
        </h2>
        <p className="paragraph-sm color-secondary">
          <span
            className={`text-capitalize font-weight-bold ${
              status ? status : ""
            }`}
          >
            {status == "error" ? <FiArrowDown /> : <FiArrowUp />} {statusTitle}{" "}
            &nbsp;
          </span>
          {details}
        </p>
      </div>
      <Link href="/">
        <a className="text-decoration-none color-blue text-capitalize paragraph-sm">
          Full details
        </a>
      </Link>
      <style jsx>{`
        .icon-box {
          width: 50px;
          height: 50px;
          border-radius: 20px !important;
        }
        .yellow {
          background-color: rgba(255, 229, 112, 0.5) !important;
          color: rgb(255, 187, 0) !important;
        }
        .pink {
          background-color: rgba(255, 82, 137, 0.5) !important;
          color: #ff0051 !important;
        }
        .sky {
          background-color: rgba(46, 112, 250, 0.1) !important;
          color: rgb(46, 112, 250) !important;
        }
        .orange {
          background-color: rgba(255, 134, 69, 0.5) !important;
          color: #ff5900 !important;
        }
        .success {
          color: #03d3b5 !important;
        }
        .error {
          color: #ff0051 !important;
        }
      `}</style>
    </div>
  );
};

export default AdminCard;
