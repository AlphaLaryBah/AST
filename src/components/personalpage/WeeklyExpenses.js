import React, { Component } from 'react';
import { InputGroup,InputGroupAddon,
    Button, Form, FormGroup, Label, Input, Col,Table} from 'reactstrap';

    import ExpensesChart from "./ExpensesChart";


   
    class GeneralInfo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            groceries:"",
            eatingOut: "",
            transportation: "",
            onlinePurchases: ""
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
            const total = [];
            let weekly = this.props.finito;
            // CREATE A PROP TO PASS AS STATE FOR THE CHART

            let chartArr = this.props.chartArr;


        console.log('Current state is: ' + JSON.stringify(this.state));
            // alert('Current state is: ' + JSON.stringify(this.state));
            event.preventDefault();

            total.push(this.state.groceries);
            total.push(this.state.eatingOut);
            total.push(this.state.transportation);
            total.push(this.state.onlinePurchases);
            console.log(total);
            const weeklyLiabilities = total.map((i) => Number(i));
            const reducer = (accumulator, currentValue) => accumulator + currentValue;


         weekly=weeklyLiabilities.reduce(reducer)
            
         this.setState({weekly})
 //INPUT DATA ARRAY FRO THE CHART AND ITS STATE
 chartArr = weeklyLiabilities.map(chart => {
    return chart

});

this.setState({ chartArr})

         
            
        }
       
        render() {
    return(

                <div className="row row-content">
            <div className="col-12">
                <hr />
                        <h2 className="text-center bg-warning text-light rounded ">WEEKLY EXPENSES(Liabilities)</h2>
                <hr />
                <ExpensesChart data={this.state.chartArr} />

                    </div>
            <div className="col-md-10 mt-4">
            <hr />

                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup row className="mb-3">
                                <Label htmlFor="groceries" md={3}>Groceries</Label>
                                <Col md={9}>
                                    
                                <InputGroup>
                                <InputGroupAddon addonType="prepend">$</InputGroupAddon>
                                <Input  min={1}  type="number" step="1"
                                     id="groceries" name="groceries"
                                        placeholder="Your groceries"
                                        value={this.state.groceries}
                                        onChange={this.handleInputChange}
                                />
                                <InputGroupAddon addonType="append">.00</InputGroupAddon>
                            </InputGroup>
                                
                                </Col>
                            </FormGroup>
                            <FormGroup row className="mb-3">
                                <Label htmlFor="eatingOut" md={3}>Eating Out</Label>
                                <Col md={9}>
                                <InputGroup>
                                <InputGroupAddon addonType="prepend">$</InputGroupAddon>
                                <Input  min={1} type="number" step="1"
                                    id="eatingOut" name="eatingOut"
                                            placeholder="Eating Out"
                                            value={this.state.eatingOut}
                                            onChange={this.handleInputChange}
                               />
                            <InputGroupAddon addonType="append">.00</InputGroupAddon>
                        </InputGroup>
                                </Col>                        
                                </FormGroup>
                                <FormGroup row className="mb-3">
                                <Label htmlFor="transportation" md={3}>Transportation</Label>
                                <Col md={9}>
                                <InputGroup>
                            <InputGroupAddon addonType="prepend">$</InputGroupAddon>
                                <Input  min={1}  type="number" step="1"
                                    id="transportation" name="transportation"
                                    placeholder="Your Transportation"
                                    value={this.state.stocks}
                                    onChange={this.handleInputChange}                        />
                                <InputGroupAddon addonType="append">.00</InputGroupAddon>
                            </InputGroup>
                                </Col>
                            </FormGroup>
                            <FormGroup row className="mb-3">
                                <Label htmlFor="onlinePurchases" md={3}>Online Purchases</Label>
                                <Col md={9}>
                                <InputGroup>
                            <InputGroupAddon addonType="prepend">$</InputGroupAddon>
                                <Input  min={1}  type="number" step="1"
                            id="onlinePurchases" name="onlinePurchases"
                            placeholder="Your  online Purchases"
                            value={this.state.onlinePurchases}
                            onChange={this.handleInputChange}                        />
                                <InputGroupAddon addonType="append">.00</InputGroupAddon>
                            </InputGroup>
                                </Col>
                            </FormGroup>
                            
                          <FormGroup row className="mt-3">
                                <Col md={{size: 10, offset: 2}}>
                                    <Button type="submit" color="success">
                                        Calculate
                                    </Button>
                                </Col>
                            </FormGroup>
                </Form>
                <hr/>
            </div>
            <div className="mt-3 mb-3 bg-dark p-3 container-fluid">
                <div className="row">
                <div className="">              
    
<Table hover className="bg-light mt-2 rounded  ">
                            <thead>

                            <tr>
                                    <th className="text-success text-center">Daily Expenses</th>
                                    </tr>
                                    <tr>

                                    <th>Groceries</th>
                                    <td>{ this.state.groceries}</td>

                                    </tr>
                                    <tr>


                                    <th>EatingOut</th>
                                    <td>{this.state.eatingOut}</td>

                                    </tr>
                                    <tr>

                                    <th>Investments</th>
                                    <td>{this.state.transportation}</td>

                                    </tr>
                                    <tr>

                                    <th>On-line Purchases</th>
                                    <td>{this.state.onlinePurchases}</td>

                                    </tr>
                                    <tr>

                            <th>Total</th>
                            <td> =  {this.state.weekly}</td>


                            
                                    </tr>

                        </thead>
                       
</Table>

    
                
            </div>
                </div>
                </div>
                </div>

                
               
    );
    
   
        }
        
    }
    
    export default GeneralInfo;
