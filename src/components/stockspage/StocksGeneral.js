import React, { Component } from "react";
import {
    Col, Table
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

class StocksGeneral extends Component {

    constructor(props) {
        super(props);
        this.state = {
            anualIncome: "",
            quarterNetIncome: "",
            eBit: "",
            company: ""

        };


    }
    componentDidMount() {
        this.fetchStocks();
    }


    fetchStocks() {
        const pointerToThis = this;

        const API_KEY = process.env.REACT_APP_API_KEY;
        let StockSymbol = "IBM";
        let API_Call = `https://www.alphavantage.co/query?function=INCOME_STATEMENT&symbol=${StockSymbol}&apikey=${API_KEY}`
        // let API_Call = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${StockSymbol}&outputsize=compact&apikey=${API_KEY}`;
        let income = [];
        let earningb4Tax = [];
        let stockName = [];
        let quatrInc = [];




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


                    console.log();
                    pointerToThis.setState({
                        anualIncome: income,
                        quarterNetIncome: quatrInc,
                        eBit: earningb4Tax,
                        company: stockName

                    });


                }

            )

    }


    render() {
        let curency = "$";
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-6 col-md-4 col-lg-2">
                        <StocksCard1

                            cardTitle={"KEY RATIOS of: " + this.state.company}

                            cardText={
                                <StocksList
                                    list1="ROIC"
                                    badge1=">=10% Anual"

                                    list2="EPS:"
                                    badge2=">=10% Anual"
                                    list3="B/V:"
                                    badge3=">=10% Anual"
                                    list4="P/E:"
                                    badge4="0"
                                    list5="P/BV:"
                                    badge5="0"
                                    list6="INTEREST RATES"
                                    badge6="1.60%"
                                />
                            } />
                    </div>

                    <div className="col-sm-6 col-md-7 col-lg-8">
                        <StocksCard2 />

                    </div>


                    <div className="col-sm-6 col-md-4 col-lg-2">

                        <StocksCard3
                            cardTitle={"KEY RATIOS of: " + this.state.company}

                            cardText={
                                <StocksList
                                    list1="Det/Equity:"
                                    badge1="0.50"

                                    list2="Current:"
                                    badge2="1.50"
                                    list3="FCF:"
                                    badge3=">=10% Anual"
                                    list4="Annual Net Income:"
                                    badge4={curency + " " + parseFloat(this.state.anualIncome).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
                                    list5="EBIT:"
                                    badge5={curency + " " + parseFloat(this.state.eBit).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
                                    list6="Interim Quarter Net Income"
                                    badge6={curency + " " + parseFloat(this.state.quarterNetIncome).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
                                />
                            }
                        />
                    </div>
                </div>


                <div className="col">

                </div>
                <hr />
                <h5 className="text-dark text-center"> Let's Do The Math</h5>

                <Tab.Container
                    id="left-tabs-example"
                    defaultActiveKey="first"
                    className="">
                    <Row>
                        <Col sm={3}>
                            <Nav variant="pills" className="flex-row ">
                                <Nav.Item className="">
                                    <Nav.Link eventKey="one" className="bg-dark text-light " >CAGR</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="two" className="bg-dark text-light  "> FV</Nav.Link>
                                </Nav.Item>
                                <Nav.Item className="">
                                    <Nav.Link eventKey="three" className="bg-dark text-light  " ></Nav.Link>
                                </Nav.Item>
                                <Nav.Item className="">
                                    <Nav.Link eventKey="four" className="bg-dark text-light  " ></Nav.Link>
                                </Nav.Item>
                                <Nav.Item className="">
                                    <Nav.Link eventKey="five" className="bg-dark text-light  " ></Nav.Link>
                                </Nav.Item>
                                <Nav.Item className="">
                                    <Nav.Link eventKey="six" className="bg-dark text-light  "></Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content>
                                <Tab.Pane eventKey="one" className="text-dark">
                                    <CagrCalc />

                                </Tab.Pane>
                                <Tab.Pane eventKey="two" className="text-dark ">
                                    <FvCalc />
                                </Tab.Pane>
                                <Tab.Pane eventKey="three" className="text-dark">
                                    <Table responsive>
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>Table heading</th>
                                                <th>Table heading</th>
                                                <th>Table heading</th>
                                                <th>Table heading</th>
                                                <th>Table heading</th>
                                                <th>Table heading</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">1</th>
                                                <td>Table cell</td>
                                                <td>Table cell</td>
                                                <td>Table cell</td>
                                                <td>Table cell</td>
                                                <td>Table cell</td>
                                                <td>Table cell</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">2</th>
                                                <td>Table cell</td>
                                                <td>Table cell</td>
                                                <td>Table cell</td>
                                                <td>Table cell</td>
                                                <td>Table cell</td>
                                                <td>Table cell</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">3</th>
                                                <td>Table cell</td>
                                                <td>Table cell</td>
                                                <td>Table cell</td>
                                                <td>Table cell</td>
                                                <td>Table cell</td>
                                                <td>Table cell</td>
                                            </tr>
                                        </tbody>
                                    </Table>



                                </Tab.Pane>
                                <Tab.Pane eventKey="four" className="text-dark"></Tab.Pane>
                                <Tab.Pane eventKey="five" className="text-dark"></Tab.Pane>
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