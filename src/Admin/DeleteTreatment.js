import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const DeleteTreatment = () => {
  const [treatment, setTreatment] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:4000/treatment`)
      .then((res) => {
        setTreatment(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  const deleteData = (tid) => {
    axios
      .delete(`http://localhost:4000/treatment/${tid}`)
      .then((res) => {
        alert("Treatment Deleted Succ...");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <div className="table-responsive">
        <table className="table table-bordered">
          <thead className="table-primary">
            <tr>
              <th>T.Name</th>
              <th>T.Desc</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {treatment.map((data) => {
              return (
                <tr>
                  <td>{data.tname}</td>
                  <td>{data.tdesc}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteData(data._id)}
                    >
                      Delete
                    </button>
                    <NavLink to={`/edittreatment/${data._id}`}>
                      <button className="btn btn-warning">Edit</button>
                    </NavLink>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DeleteTreatment;
