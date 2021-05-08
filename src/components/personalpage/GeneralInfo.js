import React, { Component } from 'react';
import { InputGroup,InputGroupAddon,
    Button, Form, FormGroup, Label, Input, Col,Table} from 'reactstrap';


function Final(props) {
    return (<div>
        <p>The total is {props.fin} </p>
        </div>
    );
    
}
// let Finito = [];
    class GeneralInfo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            income:"",
            estimate: "",
            investments: "",
            gifts: ""
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
        // const total = []
        // total.push(this.state.income);
        //      total.push(this.state.estimate);
        //      total.push(this.state.investments);
        //      total.push(this.state.gifts);
        //     console.log(total);
        // const estimatedIncome = total.map((i) => Number(i));
        //     console.log(estimatedIncome);
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

            total.push(this.state.income);
            total.push(this.state.estimate);
            total.push(this.state.investments);
            total.push(this.state.gifts);
            console.log(total);
            const estimatedIncome = total.map((i) => Number(i));
            console.log(estimatedIncome);
            const reducer = (accumulator, currentValue) => accumulator + currentValue;

            console.log(estimatedIncome.reduce(reducer));

           let finito= estimatedIncome.reduce(reducer)
            console.log(finito)
             return (
              {finito}
             );
            


        }

        render() {
            return (


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
            <div className="mt-3 mb-3 bg-dark p-3 ">
<Table hover className="bg-light mt-2 rounded p-3">
  <thead>
    <tr>
                            <th className="text-success">General Information</th>
                            <th>Income</th>

      <th>Estimate</th>
                            <th>Investment</th>
                            <th>Gifts</th>
                            <th>Total</th>


                            
    </tr>
  </thead>
  <tbody>
    <tr>
                            <th scope="row"></th>

                            <td>{ this.state.income}</td>
                            <td>{this.state.estimate}</td>
                            <td>{this.state.investments}</td>
                            <td>{this.state.gifts}</td>
                            <td> =         <handleSubmit finito />
</td>


    </tr>
   
  </tbody>
</Table>

    
                
            </div>
                </div>
                
               
    );
    
   
        }
        
    }
    
    export default GeneralInfo;
    // export {Estimated};
