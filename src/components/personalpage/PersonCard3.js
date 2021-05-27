
import React from 'react';
import {
  Card, Badge,
  CardTitle, CardText
} from 'reactstrap';
import PopOverCalc from "../PopOverCalc"

const PersonCard3 = (props) => {
  return (
    <div className="">
      <Card body outline color="secondary" className="shadow-lg p-1 mb-5 bg-white rounded" >
        <CardTitle tag="h5" className="text-center  text-success">NET INCOME</CardTitle>
        <CardText>
          <p>Net Profit <Badge color="info" className="text-info bg-dark mt-5">$ {props.netIncome}</Badge></p>
          <div className="shadow-lg p-1 mb-5 bg-white rounded" style={{ marginTop: "250px" }}>
            <PopOverCalc />
          </div>
        </CardText>
      </Card>


    </div>
  );
};

export default PersonCard3;