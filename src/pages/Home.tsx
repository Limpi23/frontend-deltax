import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import reactLogo from "../assets/react.svg";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { getEmployeesService } from "../api/employee.api";

const Home = () => {
  const [employee, setEmployee] = useState([]);

  useEffect(() => {
    fetchEmployee();
  }, []);

  const fetchEmployee = async () => {
    const response = await getEmployeesService();
    setEmployee(response);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 text-center">
          <img src={reactLogo} alt="React Logo" width="200" />
          {employee.length === 0 ? (
            <h1>No hay empleados</h1>
          ) : (
            <div className="row">
              {employee.map((employee: any) => (
                <div key={employee.id} className="col-md-12">
                  <div className="card mb-4">
                    <div className="card-body">
                      <h5 className="card-title">{employee.name}</h5>
                      <div className="d-flex justify-content-end">
                        <button className="btn btn-outline-primary">
                          <i className="fas fa-pen-to-square"></i>
                        </button>
                        <button className="btn btn-outline-danger">
                          <i className="fas fa-trash"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
          <h1 className="mt-5">Lista de empleados</h1>
          <Link to="/create" className="btn btn-primary btn-float">
            +
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
