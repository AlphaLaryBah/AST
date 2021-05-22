import React from 'react';
import { Card, CardTitle, CardText,Badge } from 'reactstrap';


export default function PersonCard1(props){

    return (<div className="mb-2">
        <Card body outline color="secondary">
          <CardTitle tag="h5" className="text-center text-success">ASSETS/YEAR</CardTitle>
          <CardText className="text-left">
          <p>Income <Badge color="info" className="text-info bg-dark">$ {props.income }</Badge></p>
            <p> Estimated <Badge color="info" className="text-info bg-dark">$ {props.estimated }</Badge></p>
            <p>Investments  <Badge color="info" className="text-info bg-dark">$ {props.investments}</Badge></p>



          </CardText>
        </Card>
        <Card body outline color="primary">
          <CardTitle tag="h5" className="text-center text-success">LIABILITIES</CardTitle>
          <p>Debts  <Badge color="" className="text-danger h-3">$ {props.debts }</Badge></p>
        

          <CardText>
          </CardText>
        </Card>
       
      </div>
    );
  
}
