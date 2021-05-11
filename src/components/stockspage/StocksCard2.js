import React from 'react';
import {
  Card, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle
} from 'reactstrap';
import StocksApi from "./StocksApi";


const StocksCard2 = (props) => {
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle tag="h5">Card title</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
        </CardBody>
        <StocksApi />

        {/* <img width="100%" src="https://components.smartsparrow.com/uploads/widget-carousel/pie-chart1.png" alt="charts" /> */}
        <CardBody>
          

          <CardText>{props.StocksTbas}
</CardText>
          <CardLink href="#">Card Link</CardLink>
          <CardLink href="#">Another Link</CardLink>
        </CardBody>
      </Card>
    </div>
  );
};

export default StocksCard2;