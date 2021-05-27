import React from "react";
import { Input} from 'reactstrap';
const StockSearch = (props) => {
    return (<div  className="shadow-lg p-1 mb-3 bg-white rounded">
                <Input  type="search"
            className="search "
            placeholder={props.placeholder }
            onChange={props.handleChange}
            
            
            />
        
        </div>
    );

}
export default StockSearch;