import React, { useState } from "react";
import adminStyles from "./admin.module.css";
import axios from "axios";
const AddTreatments = () => {
  const [tname, setTname] = useState("");
  const [tdesc, setTdesc] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post("https://mern4pmbackend.onrender.com/treatment", { tname, tdesc })
      .then((res) => {
        alert("Treatment added succe");
        setTname("");
        setTdesc("");
      })
      .catch((err) => {
        alert("unable to add treatement");
      });
  };
  return (
    <main>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <form className={adminStyles.bx_shadow} onSubmit={submitHandler}>
                <div className="mb-4">
                  <input
                    type="text"
                    className="form-control"
                    name="tname"
                    placeholder="Treatment Name"
                    value={tname}
                    onChange={(e) => setTname(e.target.value)}
                  />
                </div>
                <div className="mb-4">
                  <textarea
                    className="form-control"
                    name="tdesc"
                    placeholder="Treatment Description"
                    value={tdesc}
                    onChange={(e) => setTdesc(e.target.value)}
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AddTreatments;
