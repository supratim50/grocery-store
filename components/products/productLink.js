import Navitem from "../navbar/navitems";
import SecondaryBtn from "../buttons/buttonSecondary";

const ProductLink = () => {
  return (
    <div className="link-box d-flex justify-content-start justify-content-md-center align-items-center">
      <SecondaryBtn classList="rounded-pill mr-2" text="Fruits" />
      <SecondaryBtn classList="rounded-pill mr-2" text="Meat" />
      <SecondaryBtn classList="rounded-pill mr-2" text="Snacks" />
      <SecondaryBtn classList="rounded-pill mr-2" text="PetCare" />
      <SecondaryBtn classList="rounded-pill mr-2" text="Vegetables" />
      <SecondaryBtn classList="rounded-pill mr-2" text="Diary" />
      <SecondaryBtn classList="rounded-pill mr-2" text="Cooking" />
      <SecondaryBtn classList="rounded-pill mr-2" text="Breakfast" />
      <SecondaryBtn classList="rounded-pill mr-2" text="Beverage" />
      <SecondaryBtn classList="rounded-pill mr-2" text="Fish" />
      <style jsx>{`
        .link-box {
          overflow-x: auto;
        }
        .link-box::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default ProductLink;
