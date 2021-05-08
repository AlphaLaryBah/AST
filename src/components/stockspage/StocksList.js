import React from "react";

  

  
export default function Lists(props){


  return(<div className="">
<ul className="list-group ">
  <li className="list-group-item d-flex justify-content-between align-items-center p-2 ">
   {props.list1} 
    <span className="badge badge-primary badge-pill ml-2">{props.badge1}</span>
 </li>
  <li className="list-group-item d-flex justify-content-between align-items-center p-2">
  {props.list2}
    <span className="badge badge-primary badge-pill ml-2">{props.badge2}</span>
  </li>
  <li className="list-group-item d-flex justify-content-between align-items-center p-2">
  {props.list3}
    <span className="badge badge-danger badge-pill ml-2">{props.badge3}</span>
    </li>
    <li className="list-group-item d-flex justify-content-between align-items-center p-2">
  {props.list4}
    <span className="badge badge-primary badge-pill ml-1">{props.badge4}</span>
  </li>
  <li className="list-group-item d-flex justify-content-between align-items-center p-2">
  {props.list5}
    <span className="badge badge-primary badge-pill ml-1">{props.badge5}</span>
  </li> 
  <li className="list-group-item d-flex justify-content-between align-items-center p-2">
  {props.list6}
    <span className="badge badge-primary badge-pill ml-1">{props.badge6}</span>
  </li> 
  <li className="list-group-item d-flex justify-content-between align-items-center p-2">
  {props.list7}
    <span className="badge badge-primary badge-pill ml-1">{props.badge7}</span>
  </li> <li className="list-group-item d-flex justify-content-between align-items-center p-2">
  {props.list8}
    <span className="badge badge-primary badge-pill ml-1">{props.badge8}</span>
  </li> <li className="list-group-item d-flex justify-content-between align-items-center p-2">
  {props.list9}
    <span className="badge badge-primary badge-pill ml-1">{props.badge9}</span>
  </li>
  <li className="list-group-item d-flex justify-content-between align-items-center p-2">
  {props.list10}
    <span className="badge badge-primary badge-pill ml-1">{props.badge10}</span>
  </li>
</ul>
</div>
  );
}