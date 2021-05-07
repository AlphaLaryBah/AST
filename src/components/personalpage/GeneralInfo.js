import React, { Component } from 'react';
import { InputGroup,InputGroupAddon,
    Button, Form, FormGroup, Label, Input, Col } from 'reactstrap';

    class GeneralInfo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            income: '',
            estimate: '',
            investments: '',
            gifts: ''
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
        const total =[]
        console.log('Current state is: ' + JSON.stringify(this.state));
        alert('Current state is: ' + JSON.stringify(this.state));
            total.push(this.state);
            console.log(total);


        event.preventDefault();
    }
        render() {
    return(

                <div className="row row-content">
            <div className="col-12">
                <hr />
                        <h2 className="text-center">GENERAL INFORMATION</h2>
                        <hr />
                    </div>
                    <div className="col-md-10">
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup row className="mb-3">
                                <Label htmlFor="income" md={3}>Your Income</Label>
                                <Col md={9}>
                                    
                                <InputGroup>
                                <InputGroupAddon addonType="prepend">$</InputGroupAddon>
                                <Input  min={1}  type="number" step="1"
                                     id="income" name="income"
                                        placeholder="Your Income"
                                        value={this.state.income}
                                        onChange={this.handleInputChange}
                                />
                                <InputGroupAddon addonType="append">.00</InputGroupAddon>
                            </InputGroup>
                                
                                </Col>
                            </FormGroup>
                            <FormGroup row className="mb-3">
                                <Label htmlFor="estimate" md={3}>Estimated Income</Label>
                                <Col md={9}>
                                <InputGroup>
                                <InputGroupAddon addonType="prepend">$</InputGroupAddon>
                                <Input  min={1} type="number" step="1"
                                    id="estimate" name="estimate"
                                            placeholder="Your Estimate"
                                            value={this.state.estimate}
                                            onChange={this.handleInputChange}
                               />
                            <InputGroupAddon addonType="append">.00</InputGroupAddon>
                        </InputGroup>
                                </Col>                        
                                </FormGroup>
                                <FormGroup row className="mb-3">
                                <Label htmlFor="investments" md={3}>Investments</Label>
                                <Col md={9}>
                                <InputGroup>
                            <InputGroupAddon addonType="prepend">$</InputGroupAddon>
                                <Input  min={1}  type="number" step="1"
                                    id="investments" name="investments"
                                    placeholder="Your Investments"
                                    value={this.state.stocks}
                                    onChange={this.handleInputChange}                        />
                                <InputGroupAddon addonType="append">.00</InputGroupAddon>
                            </InputGroup>
                                </Col>
                            </FormGroup>
                            <FormGroup row className="mb-3">
                                <Label htmlFor="gifts" md={3}>Gifts</Label>
                                <Col md={9}>
                                <InputGroup>
                            <InputGroupAddon addonType="prepend">$</InputGroupAddon>
                                <Input  min={1}  type="number" step="1"
                            id="gifts" name="gifts"
                            placeholder="Your  Gifts"
                            value={this.state.gifts}
                            onChange={this.handleInputChange}                        />
                                <InputGroupAddon addonType="append">.00</InputGroupAddon>
                            </InputGroup>
                                </Col>
                            </FormGroup>
                            
                          <FormGroup row className="mt-3">
                                <Col md={{size: 10, offset: 2}}>
                                    <Button type="submit" color="success">
                                        Submit
                                    </Button>
                                </Col>
                            </FormGroup>
                </Form>
                <hr/>

                    </div>
                </div>
                

        );
    }
}
export default GeneralInfo;