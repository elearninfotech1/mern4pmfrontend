import React, { useState } from "react";
import adminStyles from "./admin.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:4000/signup`, {
        name,
        email,
        password,
        cpassword,
        phone,
        address,
      })
      .then((res) => {
        alert("User is Added Succ...");
        navigate("/admin");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <main>
      <section className={adminStyles.bread}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h5>Signup</h5>
            </div>
          </div>
        </div>
      </section>
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <form className={adminStyles.bx_shadow} onSubmit={submitHandler}>
                <div className="mb-4">
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    placeholder="UserName"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="text"
                    className="form-control"
                    name="email"
                    placeholder="Email ID"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="password"
                    className="form-control"
                    name="cpassword"
                    placeholder="Confirm Password"
                    value={cpassword}
                    onChange={(e) => setCpassword(e.target.value)}
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="text"
                    className="form-control"
                    name="phone"
                    placeholder="Phone No."
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="test"
                    className="form-control"
                    name="address"
                    placeholder="Address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Signup
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Signup;
