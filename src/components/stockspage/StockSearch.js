import React from "react";
import { Input} from 'reactstrap';
const StockSearch = (props) => {
    return (<div className="">
                <Input  type="search"
            className="search "
            placeholder={props.placeholder }
            onChange={props.handleChange}
            
            
            />
        
        </div>
    );

}
export default StockSearch;