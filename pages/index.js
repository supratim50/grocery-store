import Navbar from "../components/navbar/navbar";
import Header from "../components/header/header";
import DiscountSection from "../components/discount/discountSection";
import ProductList from "../components/products/productList";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <DiscountSection />
      <ProductList />
    </>
  );
}
