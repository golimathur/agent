import React from 'react';
import { Button, Jumbotron, Breadcrumb, Modal } from "react-bootstrap";
import Padding from "./Padding";

const Alert = () => {
    const [modalVisible, setShowModal]  = React.useState(true);
    return(
        <div style = {layoutMain}>
            <Padding>
            <Modal
          size="sm"
          show={modalVisible}
          onHide={() => setShowModal(false)}
          aria-labelledby="example-modal-sizes-title-sm"
        >
                      <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-sm">
              Hey There !!
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>React Concept Showcase</Modal.Body>
        </Modal>
                </Padding>
            </div>
    )
}

const layoutMain = {
    margin: "auto",
    padding: 10,
  }


  export default Alert;