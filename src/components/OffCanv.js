import React, { useState } from "react";
import { Button, Offcanvas, Spinner } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import PogresComponent from "./Pogres";

function OffCanvComponent() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button style={{marginLeft: "50rem"  }} variant="primary" onClick={handleShow}>
        Vtip za stovku 
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Vtip za stovku</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>

            Vtip se načítá
          <PogresComponent/>
          <Spinner style={{marginLeft: "10rem", marginTop: "1rem"}} animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner> 
    
    
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
export default OffCanvComponent;
