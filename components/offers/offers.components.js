const Offers = ({ classList, title, subTitle, date, imageUrl }) => {
  return (
    <div className={`${classList ? classList : ""}`}>
      <div className="row mx-auto px-0 card-upper p-3 rounded-lg">
        <div className="col-7 px-0">
          <h2 className="card-heading color-white font-weight-bold text-uppercase mb-2">
            {title}
          </h2>
          <p className="paragraph-text color-white mb-5 text-capitalize">
            {subTitle}
          </p>
          <p className="paragraph-text color-white text-capitalize">{date}</p>
        </div>
        <div className="col-5 px-0 d-flex justify-content-end align-items-end">
          <img src={imageUrl} className="offer-img img-fluid" />
        </div>
      </div>
      <div className="copy-main-box px-3">
        <div className="copy-box p-3 background-white d-flex justify-content-between">
          <p className="paragraph-text text-uppercase color-secondary mb-0">
            summer15
          </p>
          <p className="paragraph-text text-capitalize color-primary mb-0">
            copy
          </p>
        </div>
      </div>
      <style jsx>{`
        .card-upper {
          background: linear-gradient(to right, #ff7988, #ff9973);
          max-height: 240px !important;
        }
        .card-heading {
          font-size: 30px;
        }
        @media screen and (max-width: 767px) {
          .card-heading {
            font-size: 25px;
          }
        }
        .offer-img {
          max-height: 90px !important;
        }
        .copy-box {
          border-radius: 0 0 8px 8px;
        }
      `}</style>
    </div>
  );
};

export default Offers;
