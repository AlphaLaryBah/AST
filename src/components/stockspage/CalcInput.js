import React from "react";
import { Input } from 'reactstrap';
const CalcInput = (props) => {
    return (<div className="">
        <Input type="search"
            className="search"
            placeholder={props.placeholder}s
            onChange={props.handleChange}


        />

    </div>
    );

}
export default CalcInput;