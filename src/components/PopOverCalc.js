/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React, { useState } from 'react';
import { Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap';

import Calculate from "./Calculate"

const Example = (props) => {
    const [popoverOpen, setPopoverOpen] = useState(false);
  
    const toggle = () => setPopoverOpen(!popoverOpen);
  
    return (
      <div >
        <Button id="Popover1" type="button" className="text-dark shadow-lg p-1 mb-3 bg-white rounded">
          CALCULATOR
        </Button>
        <Popover placement="auto" isOpen={popoverOpen} target="Popover1" toggle={toggle} >
          <PopoverHeader className="text-light bg-dark text-center">CALCULATOR</PopoverHeader>
                <PopoverBody className="shadow-lg p-1 mb-3 bg-white rounded">
                    <Calculate />
                </PopoverBody>
        </Popover>
      </div>
    );
  }
  
  export default Example;