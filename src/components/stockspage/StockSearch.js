import React from "react";
import { Input} from 'reactstrap';
const StockSearch = (props) => {
    return (<div  className="shadow-lg p-3 mb-5 bg-white rounded">
                <Input  type="search"
            className="search "
            placeholder={props.placeholder }
            onChange={props.handleChange}
            
            
            />
        
        </div>
    );

}
export default StockSearch;