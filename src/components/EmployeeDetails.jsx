import axios from "axios";
import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
export const EmployeeDetails = () => {
  const [data, setdata] = useState(false);
  const {id}=useParams()
  useEffect(() => {
    axios
      .get(`http://localhost:8080/employee/${id}`)
      .then(function (response) {
        // handle success
         console.log(response.data);
        setdata({...response.data});
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }, []);
  //console.log(data);
  return (
    <div className="user_details">
      <img className="user_image" src={data.image} />
      <h4 className="user_name">{data.employee_name}</h4>
      <span className="user_salary">${data.salary}</span>
      <span className="tasks">
        <li className="task">{data.tasks}</li>
      </span>
      Status: <b className="status">{data.status}</b>
      Title: <b className="title">{data.title}</b>
      {/* Show this button only if user is not already terminated (users status is working) */}
      <button className="fire">Fire Employee</button>
      {/* Show this button only if user is not already team lead or terminated */}
      <button className="promote">promote</button>
    </div>
  );
};
