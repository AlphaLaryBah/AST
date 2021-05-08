import React from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "react-bootstrap/Breadcrumb";


import StocksCard1 from "./stockspage/StocksCard1";
import StocksCard2 from "./stockspage/StocksCard2";
import StocksCard3 from "./stockspage/StocksCard3";
import StocksList from "./stockspage/StocksList";
import StocksTabs from "./stockspage/StocksTabs";
import "./Stocks.css";

function Stocks() {
  return (
    <div className="">
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
      <div className="container-fluid" style={{ marginTop: 10 }}>
      <div className="row">
      <div className="col-sm-6 col-md-4 col-lg-2">
      
            <StocksCard1

              cardTitle="KEY RATIOS"

              cardText={
                <StocksList 
                  list1="Price:"
                  badge1="$10"

                  list2="EPS:"
                  badge2="$2"
                  list3="B/V:"
                  badge3="0.7000"
                  list4="P/E:"
                  badge4="5"
                  list5="P/BV:"
                  badge5="14.3"
                  list6="INTEREST RATES"
                  badge6="2.04"
                />
              }


            />
        </div>

        <div className="col-sm-12 col-md-7 col-lg-8">
            <StocksCard2/>
            <StocksTabs />

            



          
        </div>
        <div className="col-sm-6 col-md-4 col-lg-2">
<StocksCard3 />
          
        </div>


        </div>
        </div>
        </div>

  );
}

export default Stocks;