import React, { useState } from "react";
import adminStyles from "./admin.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(email);
    console.log(password);
    axios
      .post(`http://localhost:4000/login`, { email, password })
      .then((res) => {
        if (res.data == "Valid") {
          navigate("/admindashboard");
        } else {
          alert("Invalid Credentials");
        }
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
              <h5>Admin Login</h5>
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
                    name="email"
                    placeholder="UserName"
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
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AdminLogin;
