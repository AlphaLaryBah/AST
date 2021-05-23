import React, { Component } from "react";
import {
    InputGroup, InputGroupAddon,
    Button, Form, FormGroup, Label, Input, Col, Card, CardHeader, CardTitle, CardBody, CardFooter
} from 'reactstrap';

import { Finance } from 'financejs'

class CagrCalc extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cagrNum1: "",
            cagrNum2: "",
            cagrYear: ""


        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleInputChange(event) {
        const target = event.target;
        const name = target.name;
        const value = target.type === 'checkbox' ? target.checked : target.value;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        let finance = new Finance();
        let cagrReseults = this.props.cagrReseults;

        console.log('Current state is: ' + JSON.stringify(this.state));
        event.preventDefault();

        cagrReseults = finance.CAGR(this.state.cagrNum1, this.state.cagrNum2, this.state.cagrYear);

        this.setState({ cagrReseults })

        console.log(cagrReseults)
    }

    render() {
        return (<div>

            <Card>
                <CardHeader className="text-center">CAGR: Coumpounded Annual Growth Rate</CardHeader>
                <CardBody>
                    <CardTitle className="text-center" tag="h5">Compound Annual Growth Rate (CAGR) is the year-over-year growth rate of an investment over a specified period of time</CardTitle>

                    <Form onSubmit={this.handleSubmit}>
                        <FormGroup row className="mb-3">
                            <Label htmlFor="Begining" md={3}>Beginning Value</Label>
                            <Col md={9}>

                                <InputGroup>
                                    <InputGroupAddon addonType="prepend">$</InputGroupAddon>
                                    <Input min={1} type="number" step="1"
                                        id="cagrtNum1" name="cagrNum1"
                                        placeholder="First Number"
                                        value={this.state.cagrNum1}
                                        onChange={this.handleInputChange}
                                    />
                                    <InputGroupAddon addonType="append">.00</InputGroupAddon>
                                </InputGroup>

                            </Col>
                        </FormGroup>
                        <FormGroup row className="mb-3">
                            <Label htmlFor="ending" md={3}>Ending Value</Label>
                            <Col md={9}>
                                <InputGroup>
                                    <InputGroupAddon addonType="prepend">$</InputGroupAddon>
                                    <Input min={1} type="number" step="1"
                                        id="cagrNum2" name="cagrNum2"
                                        placeholder="Second Number"
                                        value={this.state.cagrNum2}
                                        onChange={this.handleInputChange}
                                    />
                                    <InputGroupAddon addonType="append">.00</InputGroupAddon>
                                </InputGroup>
                            </Col>
                        </FormGroup>
                        <FormGroup row className="mb-3">
                            <Label htmlFor="Years" md={3}>Number of Periods</Label>
                            <Col md={9}>
                                <InputGroup>
                                    <InputGroupAddon addonType="prepend">$</InputGroupAddon>
                                    <Input min={1} type="number" step="1"
                                        id="cagrYear" name="cagrYear"
                                        placeholder="How Many Years"
                                        value={this.state.cagrYear}
                                        onChange={this.handleInputChange}
                                    />
                                    <InputGroupAddon addonType="append">.00</InputGroupAddon>
                                </InputGroup>
                            </Col>
                        </FormGroup>

                        <FormGroup row className="mt-3">
                            <Col md={{ size: 10, offset: 2 }}>
                                <Button type="submit" color="success">
                                    Calculate
                                                              </Button>
                            </Col>
                        </FormGroup>
                    </Form>

                </CardBody>
                <CardFooter>CAGR =  {this.state.cagrReseults} % </CardFooter>
            </Card>

        </div>


        );
    }
}
export default CagrCalc;