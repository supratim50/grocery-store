import DiscountCard from "../cards/discountCard";

const DiscountSection = () => {
  return (
    <section className="section-py">
      <div className="container-fluid">
        <div className="row mx-auto px-0">
          <div className="col-12 col-md-6 col-lg-4">
            <DiscountCard
              classList="mt-3 mt-lg-0"
              imageUrl="/assets/images/Discount-1.png"
            />
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <DiscountCard
              classList="mt-3 mt-lg-0"
              imageUrl="/assets/images/Discount-2.png"
            />
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <DiscountCard
              classList="mt-3 mt-lg-0"
              imageUrl="/assets/images/Discount-3.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscountSection;
