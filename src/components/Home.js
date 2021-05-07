import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Breadcrumb from "react-bootstrap/Breadcrumb";

import NavHeader from "./navigationfiles/NavHeader";
import "./Home.css";

export default function Home() {
  return (
    <div className="homebg " > 
    <div className="row  text-light"style={{ marginTop: 50 }} >
    <div className="col">
        <Breadcrumb>
        <Breadcrumb.Item><Link to="/home">Home</Link></Breadcrumb.Item>
        <Breadcrumb.Item active>Stocks</Breadcrumb.Item>
        </Breadcrumb>
        <hr />
    </div>
</div>
      <NavHeader />
      <Form className="form-signin ">
<h3 className="text-center"> A$'t Finance</h3>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" className="form-control"/>
          <Form.Text className="">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" className="form-control"/>
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          {/* <Form.Check type="checkbox" label="Check me out" /> */}
        </Form.Group>
        <Button variant="dark" type="submit" className="form-control mt-2">
          Sign In
        </Button>
      </Form>
    </div>
  );
}
