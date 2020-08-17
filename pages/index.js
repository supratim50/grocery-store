import Navbar from "../components/navbar/navbar";
import Header from "../components/header/header";
import DiscountSection from "../components/discount/discountSection";
import ProductList from "../components/products/productList";
import CartDrawer from "../components/carts/cartDrawer";
// import Cart from "../components/carts/cart";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <DiscountSection />
      <ProductList />
      {/* <Cart /> */}
      <CartDrawer />
    </>
  );
}
