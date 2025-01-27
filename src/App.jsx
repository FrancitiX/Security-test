import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./views/Login";
import Home from "./views/Home";
import Register from "./views/Register";
import Profile from "./views/Profile";
import Products from "./views/Products";
import Product from "./views/Product";
import About from "./views/About";
import Cart from "./views/Cart";
import Filter from "./views/Filter";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:productName" element={<Product />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/about" element={<About />} />
        <Route path="/my-cart" element={<Cart />} />
        <Route path="/filter/:category/:filtro" element={<Filter />} />
      </Routes>
    </Router>
  );
}

export default App;
