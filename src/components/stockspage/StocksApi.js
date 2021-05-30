import React from "react";
import {
    InputGroup, Form, FormGroup, Col, Card, CardText, CardBody,
    CardTitle, Badge, Button, Label
} from 'reactstrap';
import Plot from 'react-plotly.js';
import StockSearch from "./StockSearch";
import { BsSearch } from "react-icons/bs";


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
    // LOCAL STORAGE
    componentWillMount() {
        window.localStorage.getItem('STocksApI');
        this.setState(JSON.parse(window.localStorage.getItem('STocksApI')));
    }
    componentWillUpdate(nextProps, nextState) {
        window.localStorage.setItem('STocksApI', JSON.stringify(nextState));
    }

    // componentDidMount() {
    //     this.fetchStocks();
    // }

    // FETCH DATA
    fetchStocks(event) {
        let query = this.props.query;
        query = this.state.searchField;

        const pointerToThis = this;
        const API_KEY = process.env.REACT_APP_API_KEY;
        let StockSymbol = query;
        let API_Call = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${StockSymbol}&outputsize=compact&apikey=${API_KEY}`;
        let stockChartXValueFuction = [];
        let stockChartYValueFuction = [];

        fetch(API_Call)

            .then(
                function (response) {
                    return response.json();
                }
            )
            .then(
                function (data) {
                    console.log(data);
                    for (var key in data['Time Series (Daily)']) {
                        stockChartXValueFuction.push(key);
                        stockChartYValueFuction.push(data['Time Series (Daily)'][key]['1. open']);

                    }
                    // console.log(stockChartXValueFuction)
                    pointerToThis.setState({
                        stockChartXValue: stockChartXValueFuction,
                        stockChartYValue: stockChartYValueFuction

                    });
                }
            )

    }
    render() {
        return (<div className="">
            <Card>
                <CardBody>
                    <CardTitle tag="h5"></CardTitle>
                    <Form onSubmit={e => { e.preventDefault() }} className="shadow-lg p-1 mb-3 bg-white rounded">
                        <FormGroup row className=" d-flex justify-content-center shadow-lg  p-1 mb-3 bg-white rounded">
                            <Button className="bg-dark" >
                                Stock Symbol: <Badge className="text-danger bg-light "> <span className="h2">{this.state.searchField}</span></Badge>
                            </Button>
                            <hr />
                            <Col md={6}>
                                <Label htmlFor="" >Searh By Stock Symbol</Label>
                                <InputGroup>
                                    <FormGroup className="">
                                        <StockSearch
                                            placeholder="Enter Stock Symbol"
                                            handleChange={(e) => this.setState({ searchField: e.target.value })} />
                                    </FormGroup>
                                    <Button className="text-center  shadow-lg p-2 mb-3 bg-white rounded" outline color="dark" onClick={this.handleSearch}><BsSearch /></Button>{' '}
                                </InputGroup>
                            </Col>
                        </FormGroup>
                    </Form>
                    <hr />
                    <div className="container overflow-auto  clearfix ">
                        <div className="row ">
                            <div className="col-sm-6 ">
                                <Plot className=" mr-5"
                                    data={[
                                        {
                                            x: this.state.stockChartXValue,
                                            y: this.state.stockChartYValue,
                                            type: 'scatter',
                                            mode: 'lines+markers',
                                            marker: { color: 'red' },
                                        },
                                    ]}
                                    layout={{ title: 'Daily Adjusted Stock Prices' }}
                                />
                            </div>
                        </div>
                    </div>
                </CardBody>
                <CardBody className="">
                    <CardText className="text-center">This chart displays the adjusted daily prices of a stock for the current year.</CardText>
                </CardBody>
            </Card>
        </div>
        );
    }
}

export default StocksApi;