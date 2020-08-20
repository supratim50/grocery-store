import ProductLink from "./productLink";
import Product from "./product";
import SecondaryBtn from "../buttons/buttonSecondary";

const ProductList = () => {
  const products = [
    {
      id: 1,
      image: "/assets/images/product-1.jpg",
      name: "Mix Vegetable Platter",
      price: 0.6,
      piece: "12 pc(s)",
      smallImages: [
        { id: 1, image: "/assets/images/product-1.jpg" },
        { id: 2, image: "/assets/images/product-1.jpg" },
        { id: 3, image: "/assets/images/product-1.jpg" },
        { id: 4, image: "/assets/images/product-1.jpg" },
        { id: 4, image: "/assets/images/product-1.jpg" },
      ],
      productDetails:
        "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.",
    },
    {
      id: 2,
      image: "/assets/images/product-2.jpg",
      name: "Cherry",
      price: 0.6,
      piece: "12 pc(s)",
      smallImages: [
        { id: 1, image: "/assets/images/product-2.jpg" },
        { id: 2, image: "/assets/images/product-2.jpg" },
        { id: 3, image: "/assets/images/product-2.jpg" },
        { id: 4, image: "/assets/images/product-2.jpg" },
        { id: 4, image: "/assets/images/product-2.jpg" },
      ],
      productDetails:
        "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.",
    },
    {
      id: 3,
      image: "/assets/images/product-3.jpeg",
      name: "Tata Sampann Unpolished Toor Dal (1 kg)",
      price: 0.6,
      piece: "12 pc(s)",
      smallImages: [
        { id: 1, image: "/assets/images/product-3.jpeg" },
        { id: 2, image: "/assets/images/product-3.jpeg" },
        { id: 3, image: "/assets/images/product-3.jpeg" },
        { id: 4, image: "/assets/images/product-3.jpeg" },
        { id: 4, image: "/assets/images/product-3.jpeg" },
      ],
      productDetails:
        "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.",
    },
    {
      id: 4,
      image: "/assets/images/product-4.jpeg",
      name: "Chana Dal (1 kg)",
      price: 0.6,
      piece: "12 pc(s)",
      smallImages: [
        { id: 1, image: "/assets/images/product-4.jpeg" },
        { id: 2, image: "/assets/images/product-4.jpeg" },
        { id: 3, image: "/assets/images/product-4.jpeg" },
        { id: 4, image: "/assets/images/product-4.jpeg" },
        { id: 4, image: "/assets/images/product-4.jpeg" },
      ],
      productDetails:
        "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.",
    },
    {
      id: 5,
      image: "/assets/images/product-5.jpg",
      name: "Strawberry",
      price: 0.6,
      piece: "12 pc(s)",
      smallImages: [
        { id: 1, image: "/assets/images/product-5.jpg" },
        { id: 2, image: "/assets/images/product-5.jpg" },
        { id: 3, image: "/assets/images/product-5.jpg" },
        { id: 4, image: "/assets/images/product-5.jpg" },
        { id: 4, image: "/assets/images/product-5.jpg" },
      ],
      productDetails:
        "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.",
    },
  ];
  return (
    <section className="section-py background-grey">
      <div className="container">
        <ProductLink />
        <div className="row mx-auto section-pt">
          {products.map((product) => (
            <div className="col-6 col-lg-3 px-1 px-sm-2 mt-3" key={product.id}>
              <Product
                imageUrl={product.image}
                title={product.name}
                price={product.price}
                piece={product.piece}
                smallImages={product.smallImages}
                productDetails={product.productDetails}
              />
            </div>
          ))}
        </div>
        <div className="d-flex justify-content-center section-pt">
          <SecondaryBtn
            text="Load More"
            classList="rounded-lg background-white color-primary"
          />
        </div>
      </div>
    </section>
  );
};

export default ProductList;
