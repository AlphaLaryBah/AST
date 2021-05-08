import React from 'react';
import { Card, CardTitle, CardText,Badge } from 'reactstrap';
// import PopOverCalc from "../PopOverCalc"

const PersonCard1= (props) => {
  return (
    <div>
      <Card body outline color="secondary">
        <CardTitle tag="h5"  className="text-center text-success">ASSETS/YEAR</CardTitle>
        <CardText className="text-left">
          <p>Income <Badge color="info" className="text-info bg-dark">info</Badge></p>
          <p> Estimated <Badge color="info" className="text-info bg-dark">Info</Badge></p>
          <p>Investments  <Badge color="info" className="text-info bg-dark">Info</Badge></p> 

          <p>Assets Value  <Badge color="info" className="text-info bg-dark">Info</Badge></p> 


        </CardText>
      </Card>
      <Card body outline color="primary">
        <CardTitle tag="h5" className="text-center text-success">LIABILITIES</CardTitle>
        <p>Debts  <Badge color="info" className="text-info bg-dark">Info</Badge></p>
        

        <CardText>
        </CardText>
      </Card>
      {/* <Card body outline color="success" className="">
        <CardTitle tag="h5"></CardTitle>
        <CardText>
          
          <PopOverCalc />

        </CardText>
      </Card> */}
      <Card body outline color="info">
        <CardTitle tag="h5" className="text-center text-success">DAILY EXPENSES</CardTitle>
        <CardText>          <p>Liabilities  <Badge color="info" className="text-info bg-dark">Info</Badge></p> 
</CardText>
      </Card>
      <Card body outline color="warning">
        <CardTitle tag="h5" className="text-center text-success">WEEKLY EXPENSES</CardTitle>
        <CardText>          <p>Liabilities  <Badge color="info" className="text-info bg-dark">Info</Badge></p> 
</CardText>
      </Card>
      <Card body outline color="danger">
        <CardTitle tag="h5"  className="text-center text-success">MONTHLY EXPENSES</CardTitle>
        <CardText>          <p>Liabilities  <Badge color="info" className="text-info bg-dark">Info</Badge></p> 
</CardText>
      </Card>
    </div>
  );
};

export default PersonCard1;