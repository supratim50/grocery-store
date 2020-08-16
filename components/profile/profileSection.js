import Input from "../form/input";
import PrimaryButton from "../buttons/primaryButton";
import DetailsCard from "../cards/detailCard";

const ProfileSection = () => {
  return (
    <section className="section-pb">
      <div className="container">
        <h1
          className="font-weight-bold color-secondary mb-4 mb-lg-5"
          style={{ fontSize: 25 }}
        >
          Your Profile
        </h1>
        <div className="row mx-auto section-pb">
          <div className="col-12 col-lg-5 px-0 px-lg-3 mt-3 mt-lg-0 border">
            <Input lebel="Name" />
          </div>
          <div className="col-12 col-lg-5 px-0 px-lg-3 mt-3 mt-lg-0 border">
            <Input lebel="Email" />
          </div>
          <div className="col-12 col-lg-2 px-0 px-lg-3 mt-3 mt-lg-0 border d-flex align-items-end">
            <PrimaryButton text="send" classList="w-100 align-items-end" />
          </div>
        </div>
        {/* contact details */}
        <h2 className="paragraph-text font-weight-bold color-secondary mb-4 text-capitalize">
          Contact Number
        </h2>
        <div className="row mx-auto">
          <div className="col-12 col-lg-4 px-0 px-lg-3 border">
            <DetailsCard title="Primary" />
          </div>
          <div className="col-12 col-lg-4 px-0 px-lg-3 border">
            <DetailsCard title="Secondary" />
          </div>
          <div className="col-12 col-lg-4 px-0 px-lg-3 border">
            <DetailsCard title="Primary" />
          </div>
        </div>
        {/* contact details end */}
      </div>
      <style jsx>{`
        section {
          padding-top: 150px !important;
        }
      `}</style>
    </section>
  );
};

export default ProfileSection;
