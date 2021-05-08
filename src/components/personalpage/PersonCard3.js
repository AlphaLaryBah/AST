
import React from 'react';
import { Card, Badge,
  CardTitle, CardText } from 'reactstrap';
  import PopOverCalc from "../PopOverCalc"

const PersonCard3 = (props) => {
  return (
    <div>
      <Card body outline color="secondary" style={{ height:"800px"}}>
        <CardTitle tag="h5" className="text-center  text-success">NET INCOME</CardTitle>
        <CardText>
          <p>Net  <Badge color="info" className="text-info bg-dark">Info</Badge></p>
          <p>Estimated  <Badge color="info" className="text-info bg-dark">Info</Badge></p>
          <div className=""  style={{ marginTop:"400px"}}>
          <PopOverCalc  />

         </div>
        </CardText>
      </Card>
      {/* <Card body outline color="primary">
        <CardTitle tag="h5" className="text-center  text-success">Special Title Treatment</CardTitle>
        <CardText>          <p>Investments  <Badge color="info" className="text-info bg-dark">Info</Badge></p> 
</CardText>
      </Card>
      <Card body outline color="success">
        <CardTitle tag="h5" className="text-center  text-success">Special Title Treatment</CardTitle>
        <CardText>          <p>Investments  <Badge color="info" className="text-info bg-dark">Info</Badge></p> 
</CardText>
      </Card>
      <Card body outline color="info">
        <CardTitle tag="h5" className="text-center  text-success">Special Title Treatment</CardTitle>
        <CardText>          <p>Investments  <Badge color="info" className="text-info bg-dark">Info</Badge></p> 
</CardText>
      </Card>
      <Card body outline color="warning">
        <CardTitle tag="h5" className="text-center  text-success">Special Title Treatment</CardTitle>
        <CardText>          <p>Investments  <Badge color="info" className="text-info bg-dark">Info</Badge></p> 
</CardText> */}
      {/* </Card>
      <Card body outline color="danger">
        <CardTitle tag="h5" className="text-center  text-success">Special Title Treatment</CardTitle>
        <CardText>          <p>Investments  <Badge color="info" className="text-info bg-dark">Info</Badge></p> 
</CardText> */}
      {/* </Card> */}
    
    </div>
  );
};

export default PersonCard3;