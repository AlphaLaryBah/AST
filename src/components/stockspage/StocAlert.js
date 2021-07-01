import React, {useState} from "react";
import Button from "react-bootstrap/Button";


import Alert from 'react-bootstrap/Alert'

function StocAlert() {
    const [show, setShow] =  useState(true);

    return (
        <div className="">
            <Alert show={show} variant="light">
                <Alert.Heading>How To Use</Alert.Heading>
                <ul>
                <li>The Stocks Page:</li>
                <ul>
                    <li>Please fill in the search inputs with a stock's symbol</li>
                    <li>The first search input will pull up a chart of "Daily adjusted prices" of the stock from the beginning of the current year.</li>
                    <li>The second search input will do some calculations</li>
                    <li>Click on the "Income statement" button to see some of the calculations. </li>
                    <li>The other results are visible on the page. </li>

                    </ul>
                </ul>
                <hr />
                <div className="d-flex justify-content-end">
                    <Button onClick={() => setShow(false)} variant="outline-success">
                        Close me !
                    </Button>
                </div>
            </Alert>

            {!show && <Button onClick={() => setShow(true)} variant="outline-light">How to Use This Page. Click Here</Button>}
        </div>
    );
}

export default StocAlert;