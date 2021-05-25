import React from "react";
import { Badge } from 'reactstrap';




export default function Lists(props) {


  return (<div className="">
    <ul className="list-group ">
      <li className="list-group-item d-flex justify-content-between align-items-center p-2 ">
        {props.list1}
        <Badge color="info" className="text-dark bg-info">{props.badge1}</Badge>

      </li>
      <li className="list-group-item d-flex justify-content-between align-items-center p-2">
        {props.list2}
        <Badge color="info" className="text-dark bg-info">{props.badge2}</Badge>
      </li>
      <li className="list-group-item d-flex justify-content-between align-items-center p-2">
        {props.list3}
        <Badge color="info" className="text-dark bg-info">{props.badge3}</Badge>
      </li>
      <li className="list-group-item d-flex justify-content-between align-items-center p-2">
        {props.list4}
        <Badge color="info" className="text-dark bg-info">{props.badge4}</Badge>
      </li>
      <li className="list-group-item d-flex justify-content-between align-items-center p-2">
        {props.list5}
        <Badge color="info" className="text-dark bg-info">{props.badge5}</Badge>
      </li>
      <li className="list-group-item d-flex justify-content-between align-items-center p-2">
        {props.list6}
        <Badge color="info" className="text-dark bg-info">{props.badge6}</Badge>
      </li>
      <li className="list-group-item d-flex justify-content-between align-items-center p-2">
        {props.list7}
        <Badge color="info" className="text-dark bg-info">{props.badge7}</Badge>
      </li> <li className="list-group-item d-flex justify-content-between align-items-center p-2">
        {props.list8}
        <Badge color="info" className="text-dark bg-info">{props.badge8}</Badge>
      </li> <li className="list-group-item d-flex justify-content-between align-items-center p-2">
        {props.list9}
        <Badge color="info" className="text-dark bg-info">{props.badge9}</Badge>
      </li>
      <li className="list-group-item d-flex justify-content-between align-items-center p-2">
        {props.list10}
        <Badge color="info" className="text-dark bg-info">{props.badge10}</Badge>
      </li>
    </ul>
  </div>
  );
}