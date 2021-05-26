import React from "react";
import Tab from "react-bootstrap/Tab";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";

export default function StocksNavs(props) {
  return (
    <div className="shadow-lg p-3 mb-5 bg-white rounded">
      <h5 className="text-dark text-center"> {props.navTittle}</h5>

      <Tab.Container
        id="left-tabs-example"
        defaultActiveKey="first"
        // className="shadow-lg p-3 mb-3 bg-white rounded"
      >
        <Row>
          <Col sm={3}>
            <Nav variant="pills" className="flex-column shadow-lg p-3 mb-5 bg-white rounded">
              <Nav.Item className="shadow-lg p-3 mb-3 bg-white rounded">
                <Nav.Link eventKey="one" >{props.navLink1}</Nav.Link>
              </Nav.Item>
              <Nav.Item className="shadow-lg p-3 mb-3 bg-white rounded">
                <Nav.Link eventKey="two" >{props.navLink2}</Nav.Link>
              </Nav.Item>
              <Nav.Item className="shadow-lg p-3 mb-3 bg-white rounded">
                <Nav.Link eventKey="three" >{props.navLink3}</Nav.Link>
              </Nav.Item>
              {/* <Nav.Item className="shadow-lg p-3 mb-3 bg-white rounded">
                <Nav.Link eventKey="four" >{props.navLink4}</Nav.Link>
              </Nav.Item>
              <Nav.Item className="shadow-lg p-3 mb-3 bg-white rounded">
                <Nav.Link eventKey="five" >{props.navLink5}</Nav.Link>
              </Nav.Item>
              <Nav.Item className="shadow-lg p-3 mb-3 bg-white rounded">
                <Nav.Link eventKey="six">{props.navLink6}</Nav.Link>
              </Nav.Item> */}
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="one" className="text-dark">{props.content1}</Tab.Pane>
              <Tab.Pane eventKey="two" className="text-dark ">{props.content2}</Tab.Pane>
              <Tab.Pane eventKey="three" className="text-dark">{props.content3}</Tab.Pane>
              <Tab.Pane eventKey="four" className="text-dark">{props.content4}</Tab.Pane>
              <Tab.Pane eventKey="five" className="text-dark">{props.content5}</Tab.Pane>
              <Tab.Pane eventKey="six" className="text-dark">{props.content6}</Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
}
