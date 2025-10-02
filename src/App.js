import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import CheckoutScreen from "./pages/Checkout";
import PaymentScreen from "./pages/PaymentScreen";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Help from "./pages/Help";

const App = () => {
  return (
    <div className="overflow-hidden">
      <Router>
        <Header />
        <Routes>
          <Route
            path="/RactzStore"
            element={<Home />}
          />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/checkout" element={<CheckoutScreen />} />
          <Route path="/payment" element={<PaymentScreen />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/help" element={<Help />} />
        </Routes>
        <Sidebar />
        <Footer />
      </Router>
    </div>
  );
};

export default App;
