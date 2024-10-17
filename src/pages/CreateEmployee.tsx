import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Alert from "react-bootstrap/Alert";
import "bootstrap/dist/css/bootstrap.min.css";
import { CreateEmployeeService } from "../api/employee.api";
import { Link } from "react-router-dom";
import axios from "axios";

const CreateEmployee = () => {
  const initialValues = {
    name: "",
    email: "",
    role: "",
    message: "",
    is_lgtb: false,
  };
  const [isSuccess, setIsSuccess] = useState(false);

  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email format").required("Required"),
    role: Yup.string().required("Required"),
    message: Yup.string().required("Required"),
    is_lgtb: Yup.boolean(),
  });

  const onSubmit = async (values: any) => {
    const response = await axios.post("http://localhost:3000/employee", values);
    if (response.status === 201) {
      setIsSuccess(true);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          <Form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <Field
                type="text"
                id="name"
                name="name"
                className="form-control"
              />
              <ErrorMessage
                name="name"
                component="div"
                className="text-danger"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <Field
                type="email"
                id="email"
                name="email"
                className="form-control"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-danger"
              />
            </div>

            <div className="form-group">
              <label htmlFor="role">Role</label>
              <Field as="select" id="role" name="role" className="form-control">
                <option value="" label="Select role" />
                <option value="developer" label="Developer" />
                <option value="designer" label="Designer" />
                <option value="manager" label="Manager" />
              </Field>
              <ErrorMessage
                name="role"
                component="div"
                className="text-danger"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <Field
                as="textarea"
                id="message"
                name="message"
                className="form-control"
              />
              <ErrorMessage
                name="message"
                component="div"
                className="text-danger"
              />
            </div>

            <div className="form-group form-check">
              <Field
                type="checkbox"
                id="is_lgtb"
                name="is_lgtb"
                className="form-check-input"
              />
              <label htmlFor="is_lgtb" className="form-check-label">
                LGTB
              </label>
            </div>

            <button type="submit" className="btn btn-primary mt-3">
              Submit
            </button>
            {isSuccess && (
              <div>
                <Alert variant="success">Employee created successfully</Alert>
                <Link to="/" className="btn btn-primary mt-3">
                  Back
                </Link>
              </div>
            )}
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default CreateEmployee;
