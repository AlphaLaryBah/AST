import React from 'react';
import {
  Card, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle
} from 'reactstrap';


const PersonCard2 = (props) => {
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle tag="h5">Card title</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
        </CardBody>
        {/* <img width="100%" src="https://components.smartsparrow.com/uploads/widget-carousel/pie-chart1.png" alt="charts" /> */}
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