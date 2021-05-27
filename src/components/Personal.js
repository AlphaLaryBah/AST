import React from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import PersonCard2 from "./personalpage/PersonCard2";
import GeneralInfo from "./personalpage/GeneralInfo";
import PersNavs from "./personalpage/PersNavs"
import "./personal.css";


function Personal() {
  return (<div className="shadow-lg mb-3 bg-white rounded">
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
  
        <div className="">
            <PersonCard2
              generalInfo={<GeneralInfo />
              }
             
               personalNavs={
               <PersNavs />
              }
                />     
        </div>
        </div>
        </div>
        </div>

  );
}

export default Personal;