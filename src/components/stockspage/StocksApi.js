import React from "react";
import { InputGroup, Form, FormGroup, Label, Col,Card, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle,Button} from 'reactstrap';
import Plot from 'react-plotly.js';
import StockSearch from "./StockSearch";
import { BsSearch} from "react-icons/bs";
import {Pie} from "react-chartjs-2"








class StocksApi extends React.Component {
   
    constructor(props) {
        super(props);

        this.state = {
            stockChartXValue: [],
            stockChartYValue: [],
            searchField: ''
        };

    }
    
    
    handleSearch = () => {
         this.fetchStocks(this.state.searchField)
    
    };
    componentDidMount() {
        this.fetchStocks();
    }
    fetchStocks(event) {
        let query = this.props.query;
        query = this.state.searchField;
        console.log(query)


        const pointerToThis = this;
        // console.log(pointerToThis)
        const API_KEY = process.env.REACT_APP_API_KEY;
        let StockSymbol =query ;
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
       
        

    return(<div className="">
            <Card>
                  <CardBody>
                        <CardTitle tag="h5"></CardTitle>
                        <Form onSubmit={e => { e.preventDefault() }}>
                            <FormGroup row className="mb-3">
                        <Label htmlFor="income" md={3}>Stock Symbol: {this.state.searchField}</Label>
                        <hr />
                        
                                <Col md={6}>
                                    
                                    <InputGroup>
                                    <FormGroup>

                            <StockSearch
                                    placeholder="Enter Stock Name"
                                    handleChange={(e) => this.setState({ searchField: e.target.value })}/> 
                          
                            </FormGroup>
                         
                                        <Button className="" outline color="dark" onClick={this.handleSearch}><BsSearch /></Button>{' '}


                        </InputGroup>

                                </Col>
                            </FormGroup>
                           </Form>

                    <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
            <div className="container">
                <div className="row">
                    <div className="col-sm-6">
                         
                           
                            <Plot className=""
                             
                                data={[
                                    {
                                        x: this.state.stockChartXValue,
                                        y: this.state.stockChartYValue,
                                        type: 'scatter',
                                        mode: 'lines+markers',
                                        marker: { color: 'red' },
                                    },
                                   
                                    
                                    //   {type: 'bar', x: [1, 2, 3], y: [2, 5, 3]},
                                ]}
           
    
                                layout={{width: 600, height: 400, title: 'Daily Stock Prices'}}

  

           
            />
                        
                </div>

            </div>


                
            </div>
            </CardBody>

        <CardBody>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <CardLink href="#">Card Link</CardLink>
          <CardLink href="#">Another Link</CardLink>
        </CardBody>
      </Card>
               

                </div>
                


        );
    }
}

export default StocksApi;