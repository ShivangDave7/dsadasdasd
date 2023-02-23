import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const SignUpOne = React.lazy(() => import("pages/SignUpOne"));
const LoginOne = React.lazy(() => import("pages/LoginOne"));
const Checkout = React.lazy(() => import("pages/Checkout"));
const MyAccount = React.lazy(() => import("pages/MyAccount"));
const Wishlist = React.lazy(() => import("pages/Wishlist"));
const Login = React.lazy(() => import("pages/Login"));
const Shop = React.lazy(() => import("pages/Shop"));
const Contact = React.lazy(() => import("pages/Contact"));
const AboutUs = React.lazy(() => import("pages/AboutUs"));
const SignUp = React.lazy(() => import("pages/SignUp"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/login" element={<Login />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/myaccount" element={<MyAccount />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/loginone" element={<LoginOne />} />
          <Route path="/signupone" element={<SignUpOne />} />
          <Route path="/dhiwise-dashboard" element={<Home />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
