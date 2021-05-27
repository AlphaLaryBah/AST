import React, { Component } from "react";
import {
    Col, Table, InputGroup, Form, FormGroup, Badge, Button, Label
} from 'reactstrap';

import Tab from "react-bootstrap/Tab";
import Row from "react-bootstrap/Row";
import Nav from "react-bootstrap/Nav";
import StocksCard1 from "./StocksCard1";
import StocksCard2 from "./StocksCard2";
import StocksCard3 from "./StocksCard3";
import StocksList from "./StocksList";
import FvCalc from "./FvCalc";
import CagrCalc from "./CagrCalc";
import CalcInput from "./CalcInput";
import { BsSearch } from "react-icons/bs";
import Rule72 from "./Rule72";
import { Finance } from 'financejs';



class StocksGeneral extends Component {

    constructor(props) {
        super(props);
        this.state = {
            anualIncome: "",
            quarterNetIncome: "",
            eBit: "",
            company: "",
            search: 'IBM',
            anualGrowth: {
                year5: "",
                year4: "",
                year3: "",
                year2: "",
                year1: ""

            },
            balanceSheet: {
                sharesOutStanding: "",
                shareHoldersEquity: ""


            }

        };




    }


    handleSearch = () => {
        this.fetchStocks(this.state.search)

    };
    componentWillMount() {

        window.localStorage.getItem('STocksGen');
        this.setState({
            STocksGen: JSON.parse(window.localStorage.getItem('STocksGen'))

        })
    }
    componentDidMount() {

        if (!window.localStorage.setItem('STocksGen', JSON.stringify(this.state))) {
            this.fetchStocks();


        } else {


            console.log("using data from local storage")
            console.log(window.localStorage.getItem('STocksGen'))

        }

    }

    componentWillUpdate(nextProps, nextState) {

        window.localStorage.setItem('STocksGen', JSON.stringify(this.state));

    }
    fetchStocks() {
        // console.log('Current state is: ' + JSON.stringify(this.state));

        let look = this.props.look;
        look = this.state.search;


        const pointerToThis = this;

        const API_KEY = process.env.REACT_APP_API_KEY;
        let StockSymbol = look;
        let API_Call = `https://www.alphavantage.co/query?function=INCOME_STATEMENT&symbol=${StockSymbol}&apikey=${API_KEY}`;
        let API_CALL2 = `https://www.alphavantage.co/query?function=BALANCE_SHEET&symbol=${StockSymbol}&apikey=${API_KEY}`;

        // STATES ARRAY
        let income = [];
        let earningb4Tax = [];
        let stockName = [];
        let quatrInc = [];

        // YEARLY  INCOME ARRAY

        let firstY = [];
        let secondY = [];
        let thirdY = [];
        let fourthY = [];
        let fithY = [];

        fetch(API_Call)
            .then(
                function (response) {
                    return response.json();
                }
            )
            .then(
                function (data) {

                    income.push(data.annualReports[0].netIncome);
                    earningb4Tax.push(data.annualReports[0].ebit);
                    stockName.push(data.symbol);
                    quatrInc.push(data.quarterlyReports[0].netIncome);

                    // YEARLY ANNual INCOME ARRAY from most current to old column
                    firstY.push(data.annualReports[4].netIncome);
                    secondY.push(data.annualReports[3].netIncome);
                    thirdY.push(data.annualReports[2].netIncome);
                    fourthY.push(data.annualReports[1].netIncome);
                    fithY.push(data.annualReports[0].netIncome);

                    pointerToThis.setState({
                        anualIncome: income,
                        quarterNetIncome: quatrInc,
                        eBit: earningb4Tax,
                        company: stockName,

                        // YEARLY  Net INCOME ARRAY
                        anualGrowth: {
                            year5: fithY,
                            year4: fourthY,
                            year3: thirdY,
                            year2: secondY,
                            year1: firstY
                        }

                    });
                }
            )

        let sharesOut = [];
        let shareEquity = [];

        fetch(API_CALL2)
            .then(
                function (response) {
                    return response.json();
                }
            )
            .then(
                function (data) {
                    sharesOut.push(data.quarterlyReports[0].commonStockSharesOutstanding);
                    shareEquity.push(data.quarterlyReports[0].totalShareholderEquity);

                    pointerToThis.setState({
                        balanceSheet: {
                            sharesOutStanding: sharesOut,
                            shareHoldersEquity: shareEquity
                        }
                    });
                }
            )
    }

    render() {
        let curency = "$";
        // COMPOUND ANNUAL GROWTH RATE
        let finance = new Finance();
        // year 1 is five years ago
        let y1 = finance.CAGR(this.state.anualGrowth.year4, this.state.anualGrowth.year5, 1);
        let y2 = finance.CAGR(this.state.anualGrowth.year3, this.state.anualGrowth.year4, 1);
        let y3 = finance.CAGR(this.state.anualGrowth.year2, this.state.anualGrowth.year3, 1);
        let y4 = finance.CAGR(this.state.anualGrowth.year1, this.state.anualGrowth.year2, 1);
        let fiveYears = finance.CAGR(this.state.anualGrowth.year1, this.state.anualGrowth.year5, 5);
        // EPS  net income/sharesoutstanding
        let ePs = (this.state.anualGrowth.year5) / (this.state.balanceSheet.sharesOutStanding);
        let earningsPS = ePs.toFixed(2);
        // BV shareholder equity/sharesoutstanding
        let bookV = (this.state.balanceSheet.shareHoldersEquity) / (this.state.balanceSheet.sharesOutStanding);
        let BV = bookV.toFixed(2);
        return (
            <div className="container-fluid shadow-lg  mb-3 bg-white rounded">
                <div className="row">
                    <div className="col-sm-6 col-md-2 col-lg-2">
                        <StocksCard1

                            cardTitle={"KEY RATIOS of: " + this.state.company}

                            cardText={
                                <StocksList
                                    list1="CAGR 5yrs:"
                                    badge1={fiveYears + "%"}
                                    list2="EPS:"
                                    badge2={"$" + " " + earningsPS}
                                    list3="B/V:"
                                    badge3={"$" + " " + BV}
                                    list4={this.state.company + "'s Shares"}
                                    badge4={this.state.balanceSheet.sharesOutStanding}
                                />
                            } />
                    </div>

                    <div className="col-sm-6 col-md-5 col-lg-8">
                        <StocksCard2 />

                    </div>


                    <div className="col-sm-6 col-md-4 col-lg-2">

                        <StocksCard3
                            cardTitle={"KEY RATIOS of: " + this.state.company}

                            cardText={
                                <StocksList

                                    list1="Year's Net Income :"
                                    badge1={curency + " " + parseFloat(this.state.anualIncome).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
                                    list2="EBIT:"
                                    badge2={curency + " " + parseFloat(this.state.eBit).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
                                    list3="Interim Quarter Net Income"
                                    badge3={curency + " " + parseFloat(this.state.quarterNetIncome).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
                                />
                            }
                        />
                    </div>
                </div>

                <hr />
                <div className="shadow-lg  mb-3 bg-white rounded">


                    <h5 className="text-dark text-center"> Let's Do The Math</h5>
                    <h3 className="text-center">Know Your Stock</h3>
                </div>
                <Form onSubmit={e => { e.preventDefault() }} className="shadow-lg p-1 mb-3 bg-white rounded">
                    <FormGroup row className=" d-flex justify-content-center   ">
                        <Button className="bg-dark" >
                            Stock Symbol: <Badge className="text-danger bg-light"><span className="h4"> {this.state.search}</span></Badge>
                        </Button>
                        <hr />
                        <Col md={6}>
                            <Label htmlFor="">Searh By Stock Symbol</Label>
                            <InputGroup className="shadow-lg  mb-2 bg-white rounded ">
                                <FormGroup className="">
                                    <CalcInput
                                        placeholder="Enter Stock Symbol"
                                        handleChange={(e) => this.setState({ search: e.target.value })} />
                                </FormGroup>
                                <Button className="text-center shadow-lg p-2 mb-3 bg-white rounded" outline color="dark" onClick={this.handleSearch}><BsSearch /></Button>{' '}
                            </InputGroup>
                        </Col>
                    </FormGroup>
                </Form>
                <Tab.Container
                    id="left-tabs-example"
                    defaultActiveKey="first"
                    className="">
                    <Row>
                        <Col sm={3}>
                            <Nav variant="" className="flex-row shadow-lg p-1 mb-2 bg-white rounded">
                                <Nav.Item className="shadow-lg p-1 mb-2 bg-white rounded">
                                    <Nav.Link eventKey="one" className=" text-dark bg-warning shadow-lg p-3 mb-3 rounded " >CAGR</Nav.Link>
                                </Nav.Item>
                                <Nav.Item className="shadow-lg p-1 mb-2 bg-white rounded">
                                    <Nav.Link eventKey="two" className="bg-dark text-light shadow-lg p-3 mb-3  rounded "> FV</Nav.Link>
                                </Nav.Item>
                                <Nav.Item className="shadow-lg p-1 mb-2 bg-white rounded">
                                    <Nav.Link eventKey="three" className="bg-info text-dark shadow-lg p-3 mb-3 rounded " >Rule 72</Nav.Link>
                                </Nav.Item>
                                <Nav.Item className="shadow-lg p-1 mb-2 bg-white rounded">
                                    <Nav.Link eventKey="four" className="bg-dark text-light shadow-lg p-3 mb-3  rounded "> Income Statement</Nav.Link>
                                </Nav.Item>

                                <Nav.Item className="shadow-lg p-1 mb-2 bg-white rounded">
                                    <Nav.Link eventKey="five" className="bg-info text-dark shadow-lg p-3 mb-3 bg-white rounded " >Balance Sheet</Nav.Link>
                                </Nav.Item>
                                {/* <Nav.Item className="">
                                    <Nav.Link eventKey="six" className="bg-dark text-light  "></Nav.Link>
                                </Nav.Item> */}
                            </Nav>
                        </Col>
                        <Col sm={9} >
                            <Tab.Content>
                                <Tab.Pane eventKey="one" className="text-dark" >
                                    <hr />

                                    <CagrCalc />

                                </Tab.Pane>
                                <Tab.Pane eventKey="two" className="text-dark ">
                                    <hr />

                                    <FvCalc />
                                </Tab.Pane>
                                <Tab.Pane eventKey="three" className="text-dark">
                                    <hr />
                                    <Rule72 />

                                </Tab.Pane>
                                <Tab.Pane eventKey="four" className="text-dark">
                                    <hr />
                                    <Table responsive className="shadow-lg p-1 mb-3 bg-white rounded">
                                        <thead >
                                            <tr>
                                                <th className="shadow-lg p-2 mb-2 bg-white rounded">Company Name</th>
                                                <th className="shadow-lg p-2 mb-2 bg-white rounded">Annual Net Income</th>
                                                <th className="shadow-lg p-2 mb-2 bg-white rounded">Latest Quater Net Income</th>
                                                <th className="shadow-lg p-2 mb-2 bg-white rounded">EBIT</th>

                                            </tr>

                                        </thead>
                                        <tbody >
                                            <tr >
                                                <th scope="row" className="text-center text-success">{this.state.company}</th>
                                                <td>{curency + " " + parseFloat(this.state.anualIncome).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</td>
                                                <td>{curency + " " + parseFloat(this.state.quarterNetIncome).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</td>
                                                <td>{curency + " " + parseFloat(this.state.eBit).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</td>

                                            </tr>
                                        </tbody>
                                    </Table>
                                    {/* <hr /> */}
                                    <h3 className="text-center text-danger shadow-lg p-3 mb-5 bg-white rounded"> <u>CAGR for {this.state.company}</u></h3>
                                    <Table responsive>
                                        <thead  >
                                            <tr>
                                                <th className="shadow-lg p-2 mb-2 bg-white rounded">Company Name</th>
                                                <th className="shadow-lg p-2 mb-2 bg-white rounded">Year One</th>
                                                <th className="shadow-lg p-2 mb-2 bg-white rounded">Year Two</th>
                                                <th className="shadow-lg p-2 mb-2 bg-white rounded">Year Three</th>
                                                <th className="shadow-lg p-2 mb-2 bg-white rounded">Year Four </th>
                                                <th className="shadow-lg p-2 mb-2 bg-white rounded">Current Year</th>
                                                <th className="shadow-lg p-3 mb-5 bg-white rounded">Growth Rate 5yrs</th>
                                            </tr>

                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row" className="text-center text-success">{this.state.company}</th>
                                                <td>{0 + "%"}</td>
                                                <td>{y1 + "%"}</td>
                                                <td>{y2 + "%"}</td>
                                                <td>{y3 + "%"}</td>
                                                <td>{y4 + "%"}</td>
                                                <td>{fiveYears + "%"}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row" className="shadow-lg p-3 mb-5 bg-white rounded">5yrs Net Income</th>
                                                <td>{curency + " " + parseFloat(this.state.anualGrowth.year1).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</td>
                                                <td>{curency + " " + parseFloat(this.state.anualGrowth.year2).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</td>
                                                <td>{curency + " " + parseFloat(this.state.anualGrowth.year3).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</td>
                                                <td>{curency + " " + parseFloat(this.state.anualGrowth.year4).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</td>
                                                <td>{curency + " " + parseFloat(this.state.anualGrowth.year5).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                    <hr />
                                </Tab.Pane>
                                <Tab.Pane eventKey="five" className="text-dark">
                                    <hr />
                                    <h3 className="text-center text-danger"> <u>Blance Sheet of: {this.state.company}</u></h3>

                                    <Table responsive>
                                        <thead>
                                            <tr>
                                                <th>Company Name</th>
                                                <th>shares Out-Standing</th>
                                                <th>share Holders' Equity</th>

                                            </tr>

                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">{this.state.company}</th>

                                                <td>{curency + " " + parseFloat(this.state.balanceSheet.sharesOutStanding).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</td>
                                                <td>{curency + " " + parseFloat(this.state.balanceSheet.shareHoldersEquity).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</td>

                                            </tr>
                                        </tbody>
                                    </Table>
                                    <hr />
                                </Tab.Pane>
                                <Tab.Pane eventKey="six" className="text-dark"></Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </div>

        );
    }
}
export default StocksGeneral;