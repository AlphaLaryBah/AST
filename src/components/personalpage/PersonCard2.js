import React from 'react';
import {
  Card, CardText, CardBody,
  CardTitle, CardSubtitle
} from 'reactstrap';


const PersonCard2 = (props) => {
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle tag="h5" className="text-center">GENERAL INFORMATION and CHARTS</CardTitle>
          <hr/>
          <CardSubtitle tag="h6" className="mb-2 text-muted text-center">Know Your Money</CardSubtitle>
          {/* <hr/> */}

        </CardBody>
        <CardBody>
          {props.generalInfo}
          {props.personalNavs}
          <CardText></CardText>
         
        </CardBody>
      </Card>
    </div>
  );
};

export default PersonCard2;