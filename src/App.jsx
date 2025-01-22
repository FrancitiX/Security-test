import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./views/Login";
import Home from "./views/Home";
import Register from "./views/Register";
import Profile from "./views/Profile";
import Products from "./views/Products";
import Product from "./views/Product";
import About from "./views/About";
import Cart from "./views/Cart";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product" element={<Product />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/about" element={<About />} />
        <Route path="/my-cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default App;
