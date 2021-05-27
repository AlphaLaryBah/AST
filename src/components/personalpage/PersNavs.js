import React from "react";
import Tab from "react-bootstrap/Tab";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import DailyExpenses from "./DailyExpenses";
import WeeklyExpenses from "./WeeklyExpenses"
import MonthlyExpenses from "./MonthlyExpenses";

export default function PersNavs(props) {
  return (
    <div className="shadow-lg  mb-3 bg-white rounded">
      <hr />

      <h5 className="text-dark text-center shadow-lg p-1 mb-5 bg-white rounded"> LET'S DO THE MATH</h5>
      <hr />
      <Tab.Container className="shadow-lg mb-2 bg-white rounded"
        id="left-tabs-example"
        defaultActiveKey="first"

      >
        <Row className="shadow-lg p-1 mb-2 bg-white rounded">
          <Col sm={3}>
            <Nav variant="" className="flex-column shadow-lg p-1 mb-3 bg-white rounded">
              <Nav.Item className=" bg-primary shadow-lg p-1 mb-3 rounded ">
                <Nav.Link eventKey="one" className=" text-light text-center " >DAILY EXPENSES</Nav.Link>
              </Nav.Item>
              <Nav.Item className="bg-warning shadow-lg p-1 mb-3 rounded">
                <Nav.Link eventKey="two" className="text-light text-center " >WEEKLY EXPENSES</Nav.Link>
              </Nav.Item>
              <Nav.Item className="bg-danger shadow-lg p-1 mb-3  rounded">
                <Nav.Link eventKey="three" className=" text-light text-center"> MONTHLY EXPENSES</Nav.Link>
              </Nav.Item>

            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content className="shadow-lg p-1 mb-2 bg-white rounded" >
              <Tab.Pane eventKey="one" className="text-dark ">
                <DailyExpenses />
              </Tab.Pane>
              <Tab.Pane eventKey="two" className="text-dark ">
                <WeeklyExpenses />
              </Tab.Pane>
              <Tab.Pane eventKey="three" className="text-dark">
                <MonthlyExpenses />              </Tab.Pane>

            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
}
