import "./styles.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Category from "./pages/Category";
import WishList from "./pages/WishList";
import ProductDetail from "./pages/ProductDetail";

import { Link } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/"> Home </Link> ||
        <Link to="/category"> Category </Link> ||
        <Link to="/cart">Cart </Link> ||
        <Link to="/wishlist">WishList </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<Category />} />
        <Route path="/product/:productId" element={<ProductDetail />} />
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}
