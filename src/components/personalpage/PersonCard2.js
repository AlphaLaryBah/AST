import React from 'react';
import {
  Card, CardBody,
  CardTitle, CardSubtitle
} from 'reactstrap';


const PersonCard2 = (props) => {
  return (
    <div className="">
      <Card>
        <CardBody>
          <CardTitle tag="h5" className="text-center shadow-lg p-3 mb-5 bg-white rounded">GENERAL INFORMATION and CHARTS</CardTitle>
          {/* <hr /> */}
          <CardSubtitle tag="h6" className="mb-2 text-muted text-center ">Know Your Money</CardSubtitle>
        </CardBody>
        <CardBody >
          {props.generalInfo}
          {props.personalNavs}
        </CardBody>

      </Card>
    </div>
  );
};

export default PersonCard2;