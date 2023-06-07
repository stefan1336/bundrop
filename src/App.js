import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./routes/Home";
import About from "./routes/About";
import Menu from "./routes/Menu";
import CheckOut from "./routes/CheckOut";
import Cart from "./routes/Cart";
import Summary from "./routes/Summary";

import NotFound from "./routes/NotFound";
import "../src/style/Navbar.css";
import "../src/style/Footer.css";
import "../src/style/Home.css";
import "../src/style/About.css";
import "../src/style/Menu.css";
import "../src/style/Cart.css";
import "../src/style/CheckOut.css";

// import "../src/style/Modal.css";

function App() {
  return (
    <div>
      <div id="main-content">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<CheckOut />} />
          <Route path="/summary" element={<Summary />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
