import React from "react";
import { Jumbotron, Container } from 'reactstrap';

import "./Home.css";
export default function Home() {
  return (
    <div className="homebg " >
      <div className="row  text-light " style={{ marginTop: 53 }} >
        <Jumbotron className="homeJumbo text-center " fluid Style={{}}>
          <Container fluid className="shadow-lg p-3 mb-5  rounded">
            <h1 className="display-4"> A$'t Finance</h1>
            <p className="lead">Know Your Money.</p>
          </Container>
        </Jumbotron>
      </div>
    </div>
  );
}
