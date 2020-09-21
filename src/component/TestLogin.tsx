import React from "react";
import { Formik } from "formik";
import { Button, FormGroup, Form, InputGroup, Col } from "react-bootstrap";
import * as Yup from "yup";
import { Modal } from "@fluentui/react";

const TestLogin = () => {
  const textAreaE1 = React.useRef<HTMLInputElement>(null);
  const [count, setCount] = React.useState(0);
  const [showModal, setShowModal] = React.useState(false);

  function handleBtnClick() {
    if (textAreaE1.current) {
      textAreaE1.current.value = "Enter the value";
      textAreaE1.current.focus();
    }
  }

  function setValue() {
    handleBtnClick();
    setCount(count + 1);
    setShowModal(!showModal);
  }
  const schema = Yup.object({
    firstName: Yup.string().required(),
    lastName: Yup.string().required(),
    username: Yup.string().required(),
    city: Yup.string().required(),
    state: Yup.string().required(),
    zip: Yup.string().required(),
    file: Yup.string().required(),
    terms: Yup.bool().required(),
  });

  return (
    <div style={{ height: 250, width: 250 }}>
      {showModal && (
        <Modal
          isOpen={showModal}
          onDismiss={() => setShowModal(false)}
          isBlocking={false}
        >
          <h1 style={{ padding: 50 }}>Submitted ✔️</h1>
        </Modal>
      )}
      <Formik
        validationSchema={schema}
        onSubmit={console.log}
        initialValues={{
          firstName: "",
          lastName: "",
          username: "",
          city: "",
          state: "",
          zip: "",
          file: "",
          terms: "",
        }}
      >
        {({
          handleSubmit,
          handleChange,
          handleBlur,
          values,
          touched,
          isValid,
          errors,
        }) => (
          <Form noValidate onSubmit={() => handleSubmit}>
            <Form.Row>
              <FormGroup as={Col} md="4" controlId="validationFormik101">
                <Form.Label>First name</Form.Label>
                <Form.Control
                  type="text"
                  name="firstName"
                  value={values.firstName}
                  onChange={handleChange}
                  isValid={touched.firstName && !errors.firstName}
                  ref={textAreaE1}
                />
                <Form.Control.Feedback tooltip>
                  Looks good!
                </Form.Control.Feedback>
              </FormGroup>
              <FormGroup as={Col} md="4" controlId="validationFormik102">
                <Form.Label>Last name</Form.Label>
                <Form.Control
                  type="text"
                  name="lastName"
                  value={values.lastName}
                  onChange={handleChange}
                  isValid={touched.lastName && !errors.lastName}
                />

                <Form.Control.Feedback tooltip>
                  Looks good!
                </Form.Control.Feedback>
              </FormGroup>
              <Form.Group as={Col} md="4" controlId="validationFormikUsername2">
                <Form.Label>Username</Form.Label>
                <InputGroup>
                  <InputGroup.Prepend>
                    <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                  </InputGroup.Prepend>
                  <Form.Control
                    type="text"
                    placeholder="Username"
                    aria-describedby="inputGroupPrepend"
                    name="username"
                    value={values.username}
                    onChange={handleChange}
                    isInvalid={!!errors.username}
                  />
                  <Form.Control.Feedback type="invalid" tooltip>
                    {errors.username}
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} md="6" controlId="validationFormik103">
                <Form.Label>City</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="City"
                  name="city"
                  value={values.city}
                  onChange={handleChange}
                  isInvalid={!!errors.city}
                />
                <Form.Control.Feedback type="invalid" tooltip>
                  {errors.city}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="3" controlId="validationFormik104">
                <Form.Label>State</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="State"
                  name="state"
                  value={values.state}
                  onChange={handleChange}
                  isInvalid={!!errors.state}
                />
                <Form.Control.Feedback type="invalid" tooltip>
                  {errors.state}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="3" controlId="validationFormik105">
                <Form.Label>Zip</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Zip"
                  name="zip"
                  value={values.zip}
                  onChange={handleChange}
                  isInvalid={!!errors.zip}
                />

                <Form.Control.Feedback type="invalid" tooltip>
                  {errors.zip}
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
            <Form.Group>
              <Form.File
                className="position-relative"
                required
                name="file"
                label="File"
                onChange={handleChange}
                isInvalid={!!errors.file}
                feedback={errors.file}
                id="validationFormik107"
                feedbackTooltip
              />
            </Form.Group>
            <Form.Group>
              <Form.Check
                required
                name="terms"
                label="Agree to terms and conditions"
                onChange={handleChange}
                isInvalid={!!errors.terms}
                feedback={errors.terms}
                id="validationFormik106"
                feedbackTooltip
              />
            </Form.Group>
            <p>Counter: {count}</p>
            {/* <Button onClick={() => setCount(count + 1)}>Increment</Button> */}
            <Button onClick={setValue}>Submit form</Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default TestLogin;
