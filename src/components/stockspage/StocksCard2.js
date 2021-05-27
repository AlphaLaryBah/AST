import React from 'react';
import {
  Card, CardText, CardBody,
  CardTitle,
} from 'reactstrap';
import StocksApi from "./StocksApi";


const StocksCard2 = (props) => {
  return (
    <div className="">
      <Card className="">
        <CardBody>
          <CardTitle tag="h5" className="text-center">ADJUSTED DAILY PRICES</CardTitle>
          {/* <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle> */}
        </CardBody>
        <div class="row">
          <div class="col">

            <StocksApi />

          </div>
        </div>


        <CardBody>


          <CardText>{props.StocksTbas}
          </CardText>
          {/* <CardLink href="#">Card Link</CardLink>
          <CardLink href="#">Another Link</CardLink> */}
        </CardBody>
      </Card>
    </div>
  );
};

export default StocksCard2;