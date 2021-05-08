import React, { Component } from 'react';
import { InputGroup,InputGroupAddon,
    Button, Form, FormGroup, Label, Input, Col,Table} from 'reactstrap';



   
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
        
        // const total = []
        // total.push(this.state.groceries);
        //      total.push(this.state.eatingOut);
        //      total.push(this.state.transportation);
        //      total.push(this.state.onlinePurchases);
        //     console.log(total);
        // const eatingOutdgroceries = total.map((i) => Number(i));
        //     console.log(eatingOutdgroceries);
        //      const reducer = (accumulator, currentValue) => accumulator + currentValue;


        
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
        console.log('Current state is: ' + JSON.stringify(this.state));
            alert('Current state is: ' + JSON.stringify(this.state));
            event.preventDefault();

            total.push(this.state.groceries);
            total.push(this.state.eatingOut);
            total.push(this.state.transportation);
            total.push(this.state.onlinePurchases);
            console.log(total);
            const eatingOutdgroceries = total.map((i) => Number(i));
            console.log(eatingOutdgroceries);
            const reducer = (accumulator, currentValue) => accumulator + currentValue;

            console.log(eatingOutdgroceries.reduce(reducer));

         let final= this.props.eatingOutdgroceries.reduce(reducer)
            // return (
            //     <h3>Total is: {eatingOutdgroceries.reduce(reducer) }</h3>
            // );
            
         
            
        }
       
        render() {
    return(

                <div className="row row-content">
            <div className="col-12">
                <hr />
                        <h2 className="text-center">DAILY EXPENSES(Liabilities)</h2>
                        <hr />
                    </div>
                    <div className="col-md-10">
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
                <div className="col-sm-6">              
    
<Table hover className="bg-light mt-2 rounded p-3 ">
                            <thead>

                            <tr>
                            <th className="text-success">Daily Expenses</th>
                            <th>groceries</th>

                            <th>eatingOut</th>
                            <th>Investment</th>
                            <th>onlinePurchases</th>
                            <th>Total</th>


                            
                                    </tr>

                        </thead>
                        <tbody>
                            <tr>
                            <th scope="row"></th>

                            <td>{ this.state.groceries}</td>
                            <td>{this.state.eatingOut}</td>
                            <td>{this.state.transportation}</td>
                            <td>{this.state.onlinePurchases}</td>
                            <td> = </td>


    </tr>
   
  </tbody>
</Table>

    
                
            </div>
                </div>
                </div>
                </div>

                
               
    );
    
   
        }
        
    }
    
    export default GeneralInfo;
    // export {eatingOutd};
