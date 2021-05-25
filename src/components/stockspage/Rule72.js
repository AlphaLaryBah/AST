import React, { Component } from "react";
import {
    InputGroup, InputGroupAddon,
    Button, Form, FormGroup, Label, Input, Col, Card, CardHeader, CardTitle, CardBody, CardFooter
} from 'reactstrap';
import { Finance } from 'financejs'


class Rule72 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            AnnualRate: ""


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
        let r72 = this.props.r72;
        console.log(this.state.rate)
        console.log('Current state is: ' + JSON.stringify(this.state));
        event.preventDefault();

        r72 = finance.R72(this.state.AnnualRate);

        this.setState({ r72 })

        console.log(r72)
    }


    render() {
        return (
            <Card>
                <CardHeader className="text-center">Rule 72</CardHeader>
                <CardBody>
                    <CardTitle className="text-center" tag="h5">Rule of 72 (R72) is a rule stating that in order to find the number of years required to double your money at a given interest rate, you divide the compound return into 72.</CardTitle>

                    <Form onSubmit={this.handleSubmit}>
                        <FormGroup row className="mb-3">
                            <Label htmlFor="rate" md={3}> Annual Rate</Label>
                            <Col md={9}>

                                <InputGroup>
                                    <InputGroupAddon addonType="prepend">Percent</InputGroupAddon>
                                    <Input type="number" step="1"
                                        id="AnnualRate" name="AnnualRate"
                                        placeholder="Annual Rate"
                                        value={this.state.AnnualRate}
                                        onChange={this.handleInputChange}
                                    />
                                    <InputGroupAddon addonType="append">%</InputGroupAddon>
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
                <CardFooter>Number of Years: {this.state.r72} </CardFooter>
            </Card>

        );
    }
}
export default Rule72;