import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Login from "./views/Login";
import Home from "./views/Home";
import Register from "./views/Register";
import Profile from "./views/Profile";
import Product from "./views/Product";
import About from "./views/About";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/about" element={<About />} />

      </Routes>
    </Router>
  )
}

export default App
