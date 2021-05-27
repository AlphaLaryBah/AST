import React from 'react';
import { Card, CardTitle, CardText } from 'reactstrap';
import PopOverCalc from "../PopOverCalc"
const StocksCard1 = (props) => {
  return (
    <div className="shadow-lg  mb-3 bg-white rounded">
      <Card body outline color="secondary" className="shadow-lg mb-2 bg-white rounded">
        <CardTitle tag="h5" className="text-center text-success">{props.cardTitle}
        </CardTitle>
        <CardText>            {props.cardText}</CardText>
        {props.children}

      </Card>
      {/* <Card body outline color="primary">
        <CardTitle tag="h5">CURRENT Income</CardTitle>
        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
      </Card> */}
      <Card body outline color="success">
        <CardTitle tag="h5"></CardTitle>
        <CardText>

          <PopOverCalc />


        </CardText>
      </Card>
      {/* <Card body outline color="info">
        <CardTitle tag="h5">Special Title Treatment</CardTitle>
        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
      </Card>
      <Card body outline color="warning">
        <CardTitle tag="h5">Special Title Treatment</CardTitle>
        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
      </Card>
      <Card body outline color="danger">
        <CardTitle tag="h5">Special Title Treatment</CardTitle>
        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
      </Card> */}
    </div>
  );
};

export default StocksCard1;