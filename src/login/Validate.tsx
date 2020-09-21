import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link } from "react-router-dom";
import "./login.css";
import Axios from "axios";

// interface IUser {
//   email: String;
//   password: any;
// }
const handleSubmit = (e: any) => {
  // e.preventDefault();
  const url = "https://apiuat.actingoffice.com/Auth/SignIn";

  const userObject = {
    userName: e.userName || "",
    password: e.password || "",
  };

  Axios.post(url, userObject)
    .then(function (response) {
      console.log("logged in");
      console.log(response);
    })

    .catch(function (error) {
      console.log(error);
    });
};

// function validateEmail(value) {
//   let error;

//   if (!value) {
//     error = "Required";
//   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
//     error = "Invalid email address";
//   }

//   return error;
// }

// function validatePassword(value) {
//   let error;

//   if (value === "admin") {
//     error = "Nice try!";
//   }

//   return error;
// }

const Validate = () => {
  const onSubmit = (values) => console.log(values);

  return (
    <div style={{ borderWidth: 10, borderColor: "#0078d4", border: 3 }}>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={onSubmit}
      >
        {({ errors, touched }) => (
          <Form
            onSubmit={(e: any) => {
              e.preventDefault();
              handleSubmit(e);
            }}
          >
            {/* <p>Email</p>
            <Field name="email" validate={validateEmail} />
            {errors.email && touched.email && errors.email}
            <p>Password</p>
            <Field
              type="password"
              name="password"
              validate={validatePassword}
            />
            {errors.password && touched.password && errors.password} */}

            <label htmlFor="userName">Email / UserName:</label>
            <Field id="userName" type="email" name="userName" />
            <ErrorMessage name="userName" className="errorMsg" component="p" />
            <label htmlFor="password">password:</label>
            <Field id="password" name="password" component="textarea" />
            <ErrorMessage name="password" className="errorMsg" component="p" />

            <button type="submit" onClick={(e: any) => handleSubmit(e)}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Validate;
