import React from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import StocksTabs from "./stockspage/StocksTabs";
import StocksGeneral from "./stockspage/StocksGeneral";
import StocAlert from './stockspage/StocAlert'
import "./Stocks.css";

function Stocks() {
  return (
    <div className="shadow-lg  mb-3 bg-white rounded">
      <div className="row" style={{ marginTop: 53 }}>
        <div className="col bg-dark">

          <Breadcrumb>
            <Breadcrumb.Item>
              <Link className="text-light" to="/home">Home</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item className="text-light" active>
              <Link className="text-light" to="/personal">Personal</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item className="text-light" active>
              <Link className="text-light" to="/stocks">Stocks</Link>

            </Breadcrumb.Item>
            
          </Breadcrumb>
          <hr />
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <StocAlert />
      </div>
      <div className="container-fluid" style={{ marginTop: 10 }}>
        <div className="row">

          {/* <div className="col-sm-6 col-md-4 col-lg-2"> */}


          {/* </div> */}

          <div className="">
            <StocksGeneral />

          </div>

          <div className="">
            <hr />

            <StocksTabs />


          </div>


        </div>
      </div>
    </div>

  );
}

export default Stocks;