import React from "react";
import { Input } from 'reactstrap';
const CalcInput = (props) => {
    return (<div className="shadow-lg p-2 mb-3 bg-white rounded">
        <Input type="search"
            className="search"
            placeholder={props.placeholder}s
            onChange={props.handleChange}


        />

    </div>
    );

}
export default CalcInput;