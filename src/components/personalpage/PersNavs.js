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
    <div className="mt-5 ml-3 ">
      <hr/>

      <h5 className="text-dark text-center"> LET'S DO THE MATH</h5>
<hr/>
      <Tab.Container
        id="left-tabs-example"
        defaultActiveKey="first"
        
      >
        <Row className=" ">
          <Col sm={3}>
            <Nav variant="" className="flex-column bg-dark p-3 rounded ">
              <Nav.Item className=" bg-primary rounded m-1">
                <Nav.Link eventKey="one"className=" text-light text-center" >DAILY EXPENSES</Nav.Link>
              </Nav.Item>
              <Nav.Item className="bg-warning rounded m-1"> 
                <Nav.Link eventKey="two"className="text-light text-center " >WEEKLY EXPENSES</Nav.Link>
              </Nav.Item>
              <Nav.Item className="bg-danger rounded m-1">
                <Nav.Link eventKey="three" className=" text-light text-center"> MONTHLY EXPENSES</Nav.Link>
              </Nav.Item>
              
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
                          <Tab.Pane eventKey="one" className="text-dark">
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
