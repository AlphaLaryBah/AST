import React, { Component } from "react";
import {
    InputGroup, InputGroupAddon,
    Button, Form, FormGroup, Label, Input, Col, Card, CardHeader, CardTitle, CardBody, CardFooter
} from 'reactstrap';
import { Finance } from 'financejs'


class FvCalc extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rate: "",
            cashFlow: "",
            time: ""

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
        let FvResults = this.props.FvResults;
console.log(this.state.rate)
        console.log('Current state is: ' + JSON.stringify(this.state));
        event.preventDefault();

        FvResults = finance.FV(this.state.rate, this.state.cashFlow, this.state.time);

        this.setState({ FvResults })

        console.log(FvResults)
    }


    render() {
        return (
            <Card  className="shadow-lg p-1 mb-3 bg-white rounded">
                <CardHeader className="text-center bg-dark text-light">FV: Future Value</CardHeader>
                <CardBody>
                    <CardTitle className="text-center" tag="h5">Future Value (FV) is the value of an asset or cash at a specified date in the future that is equivalent in value to a specified sum today.</CardTitle>

                    <Form onSubmit={this.handleSubmit}>
                        <FormGroup row  className="shadow-lg p-3 mb-3 bg-white rounded">
                            <Label htmlFor="rate" md={3}>Rate</Label>
                            <Col md={9}>
                                <InputGroup >
                                    <InputGroupAddon addonType="prepend">$</InputGroupAddon>
                                    <Input type="number" step="1"
                                        id="rate" name="rate"
                                        placeholder="Rate"
                                        value={this.state.rate}
                                        onChange={this.handleInputChange}
                                    />
                                    <InputGroupAddon addonType="append">.00</InputGroupAddon>
                                </InputGroup>

                            </Col>
                        </FormGroup>
                        <FormGroup row  className="shadow-lg p-3 mb-3 bg-white rounded">
                            <Label htmlFor="cashFlow" md={3}>Cash Flow</Label>
                            <Col md={9}>
                                <InputGroup>
                                    <InputGroupAddon addonType="prepend">$</InputGroupAddon>
                                    <Input type="number" step="1"
                                        id="cashFlow" name="cashFlow"
                                        placeholder="Cash Flow"
                                        value={this.state.cashFlow}
                                        onChange={this.handleInputChange}
                                    />
                                    <InputGroupAddon addonType="append">.00</InputGroupAddon>
                                </InputGroup>
                            </Col>
                        </FormGroup>
                        <FormGroup row  className="shadow-lg p-3 mb-3 bg-white rounded">
                            <Label htmlFor="time" md={3}>Number of Periods</Label>
                            <Col md={9}>
                                <InputGroup>
                                    <InputGroupAddon addonType="prepend">$</InputGroupAddon>
                                    <Input type="number" step="1"
                                        id="time" name="time"
                                        placeholder="How Many Years"
                                        value={this.state.time}
                                        onChange={this.handleInputChange}
                                    />
                                    <InputGroupAddon addonType="append">.00</InputGroupAddon>
                                </InputGroup>
                            </Col>
                        </FormGroup>

                        <FormGroup row className="mt-3">
                            <Col md={{ size: 10, offset: 2 }}>
                                <Button type="submit" color="success"  className="shadow-lg p-3 mb-2 rounded">
                                    Calculate
                             </Button>
                            </Col>
                        </FormGroup>
                    </Form>

                </CardBody>
                <CardFooter>Future Value = $ {this.state.FvResults} </CardFooter>
            </Card>

        );
    }
}
export default FvCalc;