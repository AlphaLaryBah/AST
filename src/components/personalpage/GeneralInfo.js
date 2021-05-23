import React, { Component } from 'react';
import {
    InputGroup, InputGroupAddon,
    Button, Form, FormGroup, Label, Input, Col, Table
} from 'reactstrap';
import ChartGenearal from "./ChartGenearal"
import PersonCard1 from "./PersonCard1";
import PersonCard3 from "./PersonCard3";



class GeneralInfo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            income: "",
            estimate: "",
            investments: "",
            debts: ""
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
        // CREATE AN ARRAY TO TO HOLD INPUT
        const total = [];
        // CREATE A PROP TO PASS AS STATE FOR THE TABLE
        let finito = this.props.finito;
        // CREATE A PROP TO PASS AS STATE FOR THE CHART

        let chartArr = this.props.chartArr;


        // console.log('Current state is: ' + JSON.stringify(this.state));
        // alert('Current state is: ' + JSON.stringify(this.state));

        // PREVENT REFRESH DEFAULT ON SUBMIT
        event.preventDefault();


        // GETTING INPUT VALUE AND PUSHING INTO THE ARRAY OBJECT TOTAL
        total.push(this.state.income);
        total.push(this.state.estimate);
        total.push(this.state.investments);
        total.push(this.state.debts);



        // TURNING ARRAY OBJECT TOTAL INTO NUMBE
        const estimatedIncome = total.map((i) => Number(i));


        // EXTRACT DEBTS INPUT TURN TO NUMBER TO SUBSTRACT FROM TOTAL
        let debt = Number(this.state.debts);


        // ADD UP TOTAL 
        const reducer = (accumulator, currentValue) => accumulator + currentValue;

        finito = estimatedIncome.reduce(reducer) - (debt) * 2;

        //    SET STATE FOR FINITO SO THAT I CAN CALL IT IN THE TABLE RENDER
        this.setState({ finito })


        //INPUT DATA ARRAY FRO THE CHART AND ITS STATE
        chartArr = estimatedIncome.map(chart => {
            return chart

        });

        this.setState({ chartArr })
    }

    render() {
        return (<div className="comtainer-fluid ">
            <div className="row">
                <div className="col-sm-6 col-md-4 col-lg-2">
                    <PersonCard1
                        income={this.state.income}
                        estimated={this.state.estimate}
                        investments={this.state.investments}
                        value={this.state.finito}
                        debts={this.state.debts}

                    />

                </div>

                <div className="col-sm-6 col-md-7 col-lg-8">
                    <ChartGenearal data={this.state.chartArr} />

                </div>
                <div className="col-sm-6 col-md-4 col-lg-2">
                    <PersonCard3
                        netIncome={this.state.finito}

                    />

                </div>

                <div className=" col-sm-6 col-md-12 col-lg-12 ">
                    <hr />

                    <Form onSubmit={this.handleSubmit} className="">
                        <div style={{ flexDirection: 'row', alignItems: 'center' }}>

                            <h2 className="text-center text-muted"><u> ASSETS <spam className="text-dark"> and</spam> LIABILITIES</u></h2>
                            <hr />

                            <FormGroup row className="mb-3 ">
                                <Label htmlFor="income" md={3}>Your Income</Label>
                                <Col >

                                    <InputGroup>
                                        <InputGroupAddon addonType="prepend">$</InputGroupAddon>
                                        <Input min={1} type="number" step="1"
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
                                <Col >
                                    <InputGroup>
                                        <InputGroupAddon addonType="prepend">$</InputGroupAddon>
                                        <Input min={1} type="number" step="1"
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
                                <Col >
                                    <InputGroup>
                                        <InputGroupAddon addonType="prepend">$</InputGroupAddon>
                                        <Input min={1} type="number" step="1"
                                            id="investments" name="investments"
                                            placeholder="Your Investments"
                                            value={this.state.stocks}
                                            onChange={this.handleInputChange} />
                                        <InputGroupAddon addonType="append">.00</InputGroupAddon>
                                    </InputGroup>
                                </Col>
                            </FormGroup>
                            <FormGroup row className="mb-3">
                                <Label htmlFor="debts" md={3}>Debts</Label>
                                <Col >
                                    <InputGroup>
                                        <InputGroupAddon addonType="prepend">$</InputGroupAddon>
                                        <Input min={1} type="number" step="1"
                                            id="debts" name="debts"
                                            placeholder="Your  Debts"
                                            value={this.state.debts}
                                            onChange={this.handleInputChange} />
                                        <InputGroupAddon addonType="append">.00</InputGroupAddon>
                                    </InputGroup>
                                </Col>
                            </FormGroup>

                            <FormGroup row className="mt-3 ">
                                <Col md={{ size: 10, offset: 2 }}>
                                    <Button type="submit" color="success" className=''>
                                        Submit
                                    </Button>
                                </Col>
                            </FormGroup>
                            </div>
                   </Form>
                        <hr />

                     </div>
                    <div className="w-60  ">
                        <div className="mt-3 mb-3 bg-dark p-3  ">
                            <Table hover className="bg-light mt-2 rounded p-3">

                                <thead>
                                    <tr>
                                        <th className="text-success text-center">ASSETS and LIABILITIES</th>
                                    </tr>
                                    <tr>
                                        <th>Income</th>
                                        <td>{this.state.income}</td>
                                    </tr>
                                    <tr>
                                        <th>Estimate</th>
                                        <td>{this.state.estimate}</td>
                                    </tr>
                                    <tr>
                                        <th>Investment</th>
                                        <td>{this.state.investments}</td>
                                    </tr>
                                    <tr>
                                        <th>debts</th>
                                        <td>{this.state.debts}</td>
                                    </tr>
                                    <tr>
                                        <th>Total</th>
                                        <td> =     {this.state.finito}</td>
                                    </tr>
                                </thead>
                            </Table>
                        </div>

                    </div>



                </div>
            </div>
                // </div>





        );


    }

}

export default GeneralInfo;
