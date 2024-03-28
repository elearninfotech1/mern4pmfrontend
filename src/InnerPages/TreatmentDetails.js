import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import innerStyles from "./innerpage.module.css";
import axios from "axios";
const TreatmentDetails = () => {
  const [treatment, setTreatment] = useState("");
  const { tid } = useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:4000/treatment/${tid}`)
      .then((res) => {
        setTreatment(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  return (
    <main>
      <section className={innerStyles.bread}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h5>{treatment.tname}</h5>
            </div>
          </div>
        </div>
      </section>
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <p>{treatment.tdesc}</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default TreatmentDetails;
