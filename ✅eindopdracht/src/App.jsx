import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Menu from "./components/Menu";
import CartDrawer from "./components/CartDrawer";
import Order from "./components/Order";
import AboutUs from "./components/AboutUs";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/cart-drawer" element={<CartDrawer />} />
        <Route path="/order" element={<Order />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
    </>
  );
}
