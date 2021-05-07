import React from "react";
import PersonCard1 from "./personalpage/PersonCard1";
import PersonCard2 from "./personalpage/PersonCard2";
import PersonCard3 from "./personalpage/PersonCard3";
import GeneralInfo from "./personalpage/GeneralInfo";
function Personal() {
  return (
    <div className="container-fluid" style={{ marginTop: 20 }}>
      <div className="row">
      <div className="col-sm-6 col-md-4 col-lg-2">
      
<PersonCard1 />
        </div>

        <div className="col-sm-12 col-md-7 col-lg-8">
          <PersonCard2
            generalInfo={
              
              <GeneralInfo />
            }
/>
          
        </div>
        <div className="col-sm-6 col-md-4 col-lg-2">
<PersonCard3 />
          
        </div>


        </div>
        </div>

  );
}

export default Personal;