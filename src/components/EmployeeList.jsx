import axios from "axios"
import { useContext, useState ,useEffect} from "react";
import { Link } from "react-router-dom";

export const EmployeeList = () => {
  const [data,setdata]=useState([])
  useEffect(()=>{
    axios
      .get("http://localhost:8080/employee")
      .then(function (response) {
        // handle success
       // console.log(response);
        setdata([...response.data])
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });},[])
      console.log(data)
  return (
    <div className="list_container">
      {/* On clicking this card anywhere, user goes to user details */}
      {data.map((e)=>{
        return (
          <Link to={`/employee/${e.id}`} className="employee_card">
            <img className="employee_image" src={e.image} />
            <span className="employee_name">{e.employee_name}</span>
            <span className="employee_title">{e.title}</span>
          </Link>
        );
      })}
      
    </div>
  );
};
