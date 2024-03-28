import React, { useEffect, useState } from "react";
import banner from "./banner.png";
import innerStyles from "./innerpage.module.css";
import axios from "axios";
import { NavLink } from "react-router-dom";
const Home = () => {
  const [treatment, setTreatment] = useState([]);

  useEffect(() => {
    axios
      .get(`https://mern4pmbackend.onrender.com/treatment`)
      .then((res) => {
        setTreatment(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <main>
      <section>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 p-0">
              <img src={banner} alt="Banner" />
            </div>
          </div>
        </div>
      </section>
      <section className="py-4">
        <div className="container">
          <div className="row">
            <h1 className={innerStyles.title}>Treatments</h1>
            <div className="row">
              {treatment.map((data) => {
                return (
                  <div className="col-md-3">
                    <div className={innerStyles.tshadow}>
                      <NavLink to={`/treatment_detail/${data._id}`}>
                        <h6>{data.tname}</h6>
                      </NavLink>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
