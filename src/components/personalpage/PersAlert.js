import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Alert from 'react-bootstrap/Alert'

function PersAlert() {
    const [show, setShow] = useState(true);

    return (
        <div className="">
            <Alert show={show} variant="light">
                <Alert.Heading>How To Use</Alert.Heading>
                <ul>
                        <li>The Personal Page: </li>
                        <ul>
                            <li>Please fill in the forms </li>
                            <li>Click the Calculate button</li>
                            <li>The data will show up in the form of a Pie Chart</li>
                            <li>The data and results will also show up in the tables below the forms and other areas on the page.</li>
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

export default PersAlert;