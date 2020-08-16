import Navitem from "../navbar/navitems";

const ProductLink = () => {
  return (
    <div className="link-box d-flex justify-content-start justify-content-md-center align-items-center">
      <Navitem classList="text-center" text="Fruits" />
      <Navitem classList="text-center" text="Meat" />
      <Navitem classList="text-center" text="Snacks" />
      <Navitem classList="text-center" text="Pet Care" />
      <Navitem classList="text-center" text="Vegetables" />
      <Navitem classList="text-center" text="Diary" />
      <Navitem classList="text-center" text="Cooking" />
      <Navitem classList="text-center" text="Breakfast" />
      <Navitem classList="text-center" text="Beverage" />
      <Navitem classList="text-center" text="Fish" />
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
