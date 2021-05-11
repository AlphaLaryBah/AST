import React from "react";
import { InputGroup,InputGroupAddon,
    Button, Form, FormGroup, Label, Input, Col,Table} from 'reactstrap';
import Plot from 'react-plotly.js';

class StocksApi extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            stockChartXValue: [],
            stockChartYValue: [],
            query:""

        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleInputChange(event) {
        const target = event.target;
        const query = target.name;
        const value = target.type === 'checkbox' ? target.checked : target.value;
    
        this.setState({
            [query]: value
        });
    }
    handleSubmit(event) {
       
    console.log( JSON.stringify(this.state));
        // alert('Current state is: ' + JSON.stringify(this.state));
        event.preventDefault();

       
     
        
    }
    componentDidMount() {
        this.fetchStocks();
    }
    fetchStocks() {
        const pointerToThis = this;
        console.log(pointerToThis)
        const API_KEY = "MIEQEUMMRJ3IRC6P";
        let StockSymbol = this.state.query;
        let API_Call = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${StockSymbol}&outputsize=compact&apikey=${API_KEY}`;

        let stockChartXValueFuction = [];
        let stockChartYValueFuction = [];




        // fetch(API_Call)

        //     .then(
        //         function (response) {
        //             return response.json();
        //         }
        //     )
        //     .then(
        //         function (data) {
        //             console.log(data);
        //             for (var key in data['Time Series (Daily)']) {
        //                 stockChartXValueFuction.push(key);
        //                 stockChartYValueFuction.push(data['Time Series (Daily)'][key]['1. open']);

        //             }
        //             // console.log(stockChartXValueFuction)
        //             pointerToThis.setState({
        //                 stockChartXValue : stockChartXValueFuction,
        //                 stockChartYValue : stockChartYValueFuction
    
        //             });
        //         }
        //     )

    }
    render() {
        return (<div>
            <Form onSubmit={this.handleSubmit}>
                            <FormGroup row className="mb-3">
                                <Label htmlFor="income" md={3}>Search Stock By Symbols</Label>
                                <Col md={9}>
          
                                  <Input id="symbol" name="symbol"
                                        placeholder="Search By Symbol"
                                        value={this.state.query}
                                        onChange={this.handleInputChange}/>
          <Button color="secondary">To the Right!</Button>
                    </Col>
                    </FormGroup>

                        </Form>


                                {/* <Input    
                                />
                                
                </FormGroup>
                <FormGroup row className="mt-3">
                                <Col md={{size: 10, offset: 2}}>
                                    <Button type="submit" color="success">
                                        Search
                                    </Button>
                                </Col> */}
                            {/* </FormGroup> */}
            
            
            
            <Plot
            data={[
              {
                x: this.state.stockChartXValue,
                y: this.state.stockChartYValue,
                type: 'scatter',
                mode: 'lines+markers',
                marker: {color: 'red'},
              },
            //   {type: 'bar', x: [1, 2, 3], y: [2, 5, 3]},
            ]}
            layout={ {width: 600, height: 440, title: 'Daily Stock Prices'} }
          /> </div>
        );
    }
}
export default StocksApi;