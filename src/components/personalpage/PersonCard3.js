
import React from 'react';
import { Card, Badge,
  CardTitle, CardText } from 'reactstrap';
  import PopOverCalc from "../PopOverCalc"

const PersonCard3 = (props) => {
  return (
    <div className="mt-2">
      <Card body outline color="secondary" >
        <CardTitle tag="h5" className="text-center  text-success">NET INCOME</CardTitle>
        <CardText>
          <p>Net Profit <Badge color="info" className="text-info bg-dark mt-5">$ { props.netIncome}</Badge></p>
          <div className=""  style={{ marginTop:"250px"}}>
          <PopOverCalc  />

         </div>
        </CardText>
      </Card>
      
    
    </div>
  );
};

export default PersonCard3;