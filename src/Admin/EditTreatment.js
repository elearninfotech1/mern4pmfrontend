import React, { useEffect, useState } from "react";
import adminStyles from "./admin.module.css";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditTreatment = () => {
  const [tname, setTname] = useState("");
  const [tdesc, setTdesc] = useState("");
  const { tid } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`http://localhost:4000/treatment/${tid}`)
      .then((res) => {
        setTname(res.data.tname);
        setTdesc(res.data.tdesc);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:4000/treatment/${tid}`, { tname, tdesc })
      .then((res) => {
        alert("Data Updated Succ..");
        navigate("/admindashboard/deletetreatment");
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
              <h5>Edit Treatment</h5>
            </div>
          </div>
        </div>
      </section>
      <section className="py-5">
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
                  Update
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default EditTreatment;
