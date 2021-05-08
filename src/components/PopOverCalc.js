/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React, { useState } from 'react';
import { Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap';

import Calculate from "./Calculate"

const Example = (props) => {
    const [popoverOpen, setPopoverOpen] = useState(false);
  
    const toggle = () => setPopoverOpen(!popoverOpen);
  
    return (
      <div >
        <Button id="Popover1" type="button" className="bg-dark">
          CALCULATOR
        </Button>
        <Popover placement="auto" isOpen={popoverOpen} target="Popover1" toggle={toggle} >
          <PopoverHeader className="bg-dark text-light text-center">CALCULATOR</PopoverHeader>
                <PopoverBody className="bg-dark">
                    <Calculate />
                </PopoverBody>
        </Popover>
      </div>
    );
  }
  
  export default Example;