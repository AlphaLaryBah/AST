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
            eBit: "",
            ebitDa: ""

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



        fetch(API_Call)
            .then(
                function (response) {
                    return response.json();
                }
            )
            .then(
                function (data) {
                    income.push(data.annualReports[0].netIncome);

                    console.log(data.annualReports[0].ebit);
                    console.log(data.annualReports[0].netIncome);
                    console.log(data.annualReports[0].ebitda);


                }
                //           pointerToThis.setState({
                //                 stockChartXValue: stockChartXValueFuction,
                //                 stockChartYValue: stockChartYValueFuction

                //             });
                // }
            )

    }


    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-6 col-md-4 col-lg-2">
                        <StocksCard1

                            cardTitle="KEY RATIOS"

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
                            }


                        />
                    </div>

                    <div className="col-sm-6 col-md-7 col-lg-8">
                        <StocksCard2 />

                    </div>


                    <div className="col-sm-6 col-md-4 col-lg-2">

                        <StocksCard3
                            cardTitle="KEY RATIOS"

                            cardText={
                                <StocksList
                                    list1="Det/Equity:"
                                    badge1="0.50"

                                    list2="Current:"
                                    badge2="1.50"
                                    list3="FCF:"
                                    badge3=">=10% Anual"
                                    list4="Icome:"
                                    badge4={this.state.anualIncome}
                                // list5="P/BV:"
                                // badge5="0"
                                // list6="INTEREST RATES"
                                // badge6="1.60%"
                                />
                            }
                        />
                    </div>
                </div>


                <div className="col">

                </div>

                <h5 className="text-dark text-center"> Let's Do The Math</h5>

                <Tab.Container
                    id="left-tabs-example"
                    defaultActiveKey="first"
                    className=""
                >
                    <Row>
                        <Col sm={3}>
                            <Nav variant="pills" className="flex-column ">
                                <Nav.Item className="">
                                    <Nav.Link eventKey="one" >CAGR</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="two"> FV</Nav.Link>
                                </Nav.Item>
                                <Nav.Item className="">
                                    <Nav.Link eventKey="three" >Anual Report</Nav.Link>
                                </Nav.Item>
                                <Nav.Item className="">
                                    <Nav.Link eventKey="four" ></Nav.Link>
                                </Nav.Item>
                                <Nav.Item className="">
                                    <Nav.Link eventKey="five" ></Nav.Link>
                                </Nav.Item>
                                <Nav.Item className="">
                                    <Nav.Link eventKey="six"></Nav.Link>
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