import React from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "react-bootstrap/Breadcrumb";


import PersonCard1 from "./personalpage/PersonCard1";
import PersonCard2 from "./personalpage/PersonCard2";
import PersonCard3 from "./personalpage/PersonCard3";
import GeneralInfo from "./personalpage/GeneralInfo";
import PersNavs from "./personalpage/PersNavs"
import "./personal.css";


function Personal() {
  return (

    <div className=" bg-dark">
      <div className="row" style={{ marginTop: 53 }}>
        <div className="col bg-dark">
        <Breadcrumb>
            <Breadcrumb.Item>
              <Link className="text-light" to="/home">Home</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item className="text-light" active>
            <Link className="text-light" to="/personal">Personal</Link>
              </Breadcrumb.Item>
            

          </Breadcrumb>
          <hr />
        </div>
      </div>

    <div className="container-fluid" style={{ marginTop: 10 }}>
      <div className="row">
      <div className="col-sm-6 col-md-4 col-lg-2">
      
<PersonCard1 />
        </div>

        <div className="col-sm-12 col-md-7 col-lg-8">
            <PersonCard2
              generalInfo={<GeneralInfo />
              }
             
               personalNavs={
               <PersNavs />
              }
                />
              
          
        </div>
        <div className="col-sm-6 col-md-4 col-lg-2">
<PersonCard3 />
          
        </div>


        </div>
        </div>
        </div>

  );
}

export default Personal;