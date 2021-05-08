import React from 'react';
import { Card, CardTitle, CardText } from 'reactstrap';
// import GeneralInfo, { Estimated } from "./GeneralInfo";

const PersonCard1= (props) => {
  return (
    <div>
      <Card body outline color="secondary">
        <CardTitle tag="h5"  className="text-center text-success">ASSETS</CardTitle>
        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
      </Card>
      <Card body outline color="primary">
        <CardTitle tag="h5">Simple Interest</CardTitle>
        <CardText>Simple Interest: i = p*r*t <br/>
i is the interest, in $<br/>
p is the principal, in $<br/>
r is the interest rate in decimal form, <br/>
t is the term (time in years). </CardText>
      </Card>
      <Card body outline color="success">
        <CardTitle tag="h5">ESTIMATED Income</CardTitle>
        <CardText></CardText>
      </Card>
      <Card body outline color="info">
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
      </Card>
    </div>
  );
};

export default PersonCard1;