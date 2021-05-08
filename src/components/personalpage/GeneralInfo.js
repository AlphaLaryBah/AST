import React, { Component } from 'react';
import { InputGroup,InputGroupAddon,
    Button, Form, FormGroup, Label, Input, Col,Table} from 'reactstrap';
import Chart from "../Chart"

    class GeneralInfo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            income:"",
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

        console.log('Current state is: ' + JSON.stringify(this.state));
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

            // ADD UP TOTAL 
            const reducer = (accumulator, currentValue) => accumulator + currentValue;

            finito= estimatedIncome.reduce(reducer)
        //    SET STATE FOR FINITO SO THAT I CAN CALL IT IN THE TABLE RENDER
            this.setState({finito})
           

        }

        render() {
            return (<div>

                <Chart  data1={ this.state.income }
                
                   />
    
                 

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
                                <Label htmlFor="debts" md={3}>Debts</Label>
                                <Col md={9}>
                                <InputGroup>
                            <InputGroupAddon addonType="prepend">$</InputGroupAddon>
                                <Input  min={1}  type="number" step="1"
                            id="debts" name="debts"
                            placeholder="Your  Debts"
                            value={this.state.debts}
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
            <div className="mt-3 mb-3 bg-dark p-3 ">
                  <Table hover className="bg-light mt-2 rounded p-3">
  
                            <thead>
    
                                <tr>
                                    <th className="text-success text-center">General Information</th>
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

    );
    
   
        }
        
    }
    
    export default GeneralInfo;
