import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./InnerPages/Home";
import AboutUs from "./InnerPages/AboutUs";
import Treatments from "./InnerPages/Treatments";
import Appointment from "./InnerPages/Appointment";
import ContactUs from "./InnerPages/ContactUs";
import AddTreatments from "./Admin/AddTreatments";
import AdminLogin from "./Admin/AdminLogin";
import AdminDashboard from "./Admin/AdminDashboard";
import DeleteTreatment from "./Admin/DeleteTreatment";
import EditTreatment from "./Admin/EditTreatment";
import Signup from "./Admin/Signup";
import TreatmentDetails from "./InnerPages/TreatmentDetails";

const Routing = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/treatments" element={<Treatments />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/treatment_detail/:tid" element={<TreatmentDetails />} />
        <Route path="/admindashboard" element={<AdminDashboard />}>
          <Route path="" element={<AddTreatments />} />
          <Route path="deletetreatment" element={<DeleteTreatment />} />
        </Route>
        <Route path="/edittreatment/:tid" element={<EditTreatment />} />
      </Routes>
    </div>
  );
};

export default Routing;
