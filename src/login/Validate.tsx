import React from "react";
import {
  Formik,
  Form,
  Field,
  ErrorMessage,
  setNestedObjectValues,
} from "formik";
import axios from "axios";
import "./login.css";
import history from "../history";

const Validate = (props: any) => {
  const [values, setValues] = React.useState({});
  return (
    <div>
      <Formik
        initialValues={{
          userName: "",
          password: "",
        }}
        onSubmit={async (values) => setValues(values)}
      >
        {(props) => {
          const { values, isSubmitting, handleChange } = props;

          return (
            <Form
              onSubmit={() =>
                axios
                  .post("https://apiuat.actingoffice.com/Auth/SignIn", values)

                  .then(function (response) {
                    console.log(response);
                    const history :any[]= [];
                    history.push("http://localhost:3000/Dashboard");
                    if (response) {
                    } else alert(JSON.stringify(response));
                  })
                  .catch(function (error) {
                    console.log(error);
                  })
              }
            >
              <label htmlFor="userName">Email </label>
              <input
                placeholder="Email address"
                type="userName"
                name="userName"
                value={values.userName}
                onChange={handleChange}
                required
              />
              <ErrorMessage
                name="userName"
                className="errorMsg"
                component="p"
              />
              <label htmlFor="password">password:</label>
              <input
                placeholder="Password"
                type="password"
                name="password"
                value={values.password}
                onChange={handleChange}
                required
              />
              <ErrorMessage
                name="password"
                className="errorMsg"
                component="p"
              />

              <button disabled={isSubmitting} type="submit">
                Submit
              </button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default Validate;
