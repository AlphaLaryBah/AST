import React from "react";
import Tab from "react-bootstrap/Tab";

import Tabs from "react-bootstrap/Tabs";

import StocksNavs from "./StocksNavs";
import StocksTable from "./StocksTable";


import "./StocksTabs.css";

export default function StocksTabs() {

  return (
    <div className="shadow-lg p-3 mb-4 bg-white rounded">
      <div className="ml-3 mr-3 text-dark mt-2 mb-5">
        <h1 className="text-dark text-center "> VALUE INNVESTING RULES</h1>


        <Tabs fill defaultActiveKey="profile" id="" className="shadow-lg p-1 mb-5 bg-white rounded">
          <Tab eventKey="leadership" title="BUFFET RULES" className="">
            <hr />

            <StocksNavs className=""
              navTittle="BUFFET RULES"
              navLink1="DEBT/EQUITY RATIO"
              content1={
                <div>
                  <hr />

                  <h5 className="text-center text-info shadow-lg p-2 mb-4 bg-white rounded">LEADERSHIP</h5>
                  <ul className="overFlow">
                    <hr />

                    <li>
                      An <strong className="text-info"> OBSERVANT</strong>{" "}
                    Leadership:{" "}
                      <em>
                        must be aware of the factors that may destroy a company.
                        The greatest danger to a company is an unhealthy amount of
                      Debt.{" "}
                      </em>
                    </li>
                    <hr />
                    <li>
                      <strong className="text-info">DEBT:</strong>{" "}
                      <em>
                        is a way for a business to speed up time and increase
                        productivity beyond its current means. However, the more
                        debt obligations a company holds, the less productive it
                        gets.
                    </em>
                    </li>
                    <hr />

                    <li>
                      <strong className="text-info">ASSESS DEBT: </strong>{" "}
                      <em>
                        by using the Debt to Equity Ratio and the Current Ratio.{" "}
                      </em>
                    </li>
                    <hr />

                    <li>
                      <strong className="text-info">LOCATE:</strong>{" "}
                      <em>
                        these numbers are found on the Balance sheet. Use the most
                      recent quarter.{" "}
                      </em>
                    </li>
                    <hr />
                    <li>
                      <strong className="text-info">FORMULA:</strong>{" "}
                      <em>Debt/Equity</em>
                    </li>
                    <hr />

                    <li>
                      <strong className="text-info">GOAL:</strong> Debt/Equity
                    Ratio: should be less than point fifty{" "}
                      <mark>
                        <strong className="text-danger">.50</strong>
                      </mark>
                      <ul>
                        <li>
                          <hr />

                          <strong>
                            So that every{" "}
                            <span className="text-success">$1 </span>of equity has
                          only <span className="text-success">50 cents</span> of
                          Debt.
                        </strong>
                        </li>
                        <hr />

                        <em>
                          <li>Add up all of your debts</li>
                          <hr />

                          <li> Add up all of your equity </li>
                          <hr />

                          <li> Then divide the Debt by the equity.</li>
                        </em>
                        <hr />
                      </ul>
                    </li>
                  </ul>
                </div>
              }
              navLink2="CURRENT RATIO"
              content2={
                <div>
                  <hr />

                  <h5 className="text-center text-info shadow-lg p-2 mb-4 bg-white rounded">LEADERSHIP:</h5>
                  <ul className="overFlow">
                    <hr />
                    <li>
                      <strong className="text-info">CURRENT RATIO:</strong>{" "}
                      <em>
                        Is to determine how will a company handle its debt in the
                        next 12 months. It compares the Total Current Assets to
                        the Total Current Liabilities.
                    </em>
                    </li>
                    <hr />

                    <li>
                      <strong className="text-info">LOCATE:</strong>{" "}
                      <em>
                        these numbers are found on the Balance sheet. Use the most
                      recent quarter.{" "}
                      </em>
                    </li>
                    <hr />
                    <li>
                      <strong className="text-info">FORMULA:</strong>{" "}
                      <em>Total Current Assets / Total Current Liabilities</em>
                    </li>
                    <hr />

                    <li>
                      <strong className="text-info">GOAL:</strong> It should be
                    greater than
                    <mark>
                        <strong className="text-danger">1.50</strong>
                      </mark>
                      <ul>
                        <hr />

                        <li>
                          <strong>
                            First, you want the Total Current Assets to be greater
                            than the Total Current Liabilities.
                        </strong>
                        </li>
                        <em>
                          <hr />

                          <li>
                            If it is <span className="text-success">1.00 </span>,
                          there is no equity because current debt and current
                          assets are identical. This is not good.
                        </li>
                          <hr />

                          <li>
                            {" "}
                          You do not want anything below{" "}
                            <span className="text-success">1.00</span> .
                        </li>
                          <hr />

                          <li>
                            {" "}
                          This means a business will need more debt since it has
                          no profits. .
                        </li>
                        </em>
                        <hr />
                      </ul>
                    </li>
                  </ul>
                </div>
              }
              navLink3="MARGIN OF SAFETY"
              content3={
                <div>
                  <hr />

                  <h5 className="text-center text-info shadow-lg p-2 mb-4 bg-white rounded">
                    (M.O.S) MARGIN OF SAFETY:
                </h5>
                  <ul className="overFlow">
                    <hr />
                    <StocksTable />
                    <hr />

                    <li>
                      <strong className="text-info ">REMEMBER:</strong>{" "}
                      <em>
                        <ul>
                          <li>
                            {" "}
                          To calculate the growth rate for the intervals of{" "}
                            <span className="text-danger">5 </span>years and{" "}
                            <span className="text-danger">1 </span> year also. In
                          order to compare the results to the{" "}
                            <span className="text-danger">10 </span> years, and to
                          make sure that the growth rate is not slowing down.
                        </li>
                          <hr />

                          <li>
                            Make sure that the rates are visibly stable over time,
                            and that they are easy to predict
                        </li>
                          <hr />

                          <li>
                            <strong className="text-info">R.O.I.C:</strong>{" "}
                            <em>
                              FOUND: in the Income Statement. It is the total
                              revenue that company returned from its sells.This
                              allows us to see if the sales are growing,
                              decreasing or staying the same.
                            <ul>
                                <li>
                                  {" "}
                                It meausres how well a company uses the money
                                it's borrowing or has.
                              </li>
                                <li>
                                  {" "}
                                It also informs if the management is looking out
                                for the business or if they are in it for
                                themselves
                              </li>
                                <li>
                                  {" "}
                                We want to see this rate going up or at the
                                least staying the same.
                              </li>
                                <li>
                                  <strong className="text-info">FORMULA:</strong>{" "}
                                ROIC= Invested Capital / NOPAT and NOPAT is the
                                Net operating profit after tax. ​{" "}
                                </li>
                              </ul>
                            </em>
                          </li>
                          <hr />

                          <li>
                            <strong className="text-info">SALES(REVENUE):</strong>{" "}
                            <em>
                              Is what a business gets in return from all of the
                              cash it has invested in itself each year.
                            <ul>
                                <li>
                                  {" "}
                                We want to see this rate going up or at the
                                least staying the same.
                              </li>
                                <li>
                                  <strong className="text-info">FORMULA:</strong>{" "}
                                Subtract the net sales of the prior period($300)
                                from that of the current period ($1000). Then,
                                divide the result by the net sales of the prior
                                period ($700 / $300 = 2.333). Multiply the
                                result by 100 to get the percent sales growth
                                (2.33 X 100= 233%)
                              </li>
                              </ul>
                            </em>
                          </li>
                          <hr />

                          <li>
                            <strong className="text-info">EQUITY BVPS:</strong>{" "}
                            <em>
                              BVPS is equity per a single share. Equity or BVPS
                              iis if you are to liquidate the entire business and
                              close shop. After you have paid off all of your
                              liabilities what is left is the equity or Book Value
                              Per Share. FOUND: on the Balance sheet. BVPS is
                              calculated by Equity / Shares Outstanding.
                            <ul>
                                <li>
                                  {" "}
                                We want to see this rate going up or at the
                                least staying the same. It needs to grow since
                                equity is the surplus or profits of a business,
                                so that the capital is reinvested into the
                                business, to finance growth beyond just
                                maintainace of liabilities.
                              </li>
                                <li>
                                  The closer the equity is to the Market price the
                                  safer is the inverstment. This is your margin of
                                  safety.
                              </li>
                                <li>
                                  <strong className="text-info">FORMULA:</strong>{" "}
                                N/A
                              </li>
                              </ul>
                            </em>
                          </li>
                          <hr />

                          <li>
                            <strong className="text-info">E.P.S:</strong>{" "}
                            <em>
                              Is what a business gets in eanrnings per individual
                              share.EPS is the Net Income / Shares Oustanding.
                              FOUND: in the Income Statement.
                            <ul>
                                <li>
                                  {" "}
                                We want to see this rate going up or at the
                                least staying the same.
                              </li>
                                <li>
                                  <strong className="text-info">FORMULA:</strong>{" "}
                                Subtract the initial EPS from the final EPS.
                                Divide the change in EPS by the initial EPS.
                                Multiply the result by 100 to calculate the EPS
                                growth rate as a percentage.
                              </li>
                              </ul>
                            </em>
                          </li>
                          <hr />

                          <hr />
                        </ul>
                      </em>
                    </li>
                    <hr />
                  </ul>
                </div>
              }
            />
            <hr />
          </Tab>
          {/* <Tab eventKey="stability" title="">
          {/* <StocksNavs navTittle="STABILITY" /> */}
          {/* </Tab> */}
          {/* <Tab eventKey="Longterm" title="LONG-TERM PROSPECT">
          <StocksNavs navTittle="LONG-TERM PROSPECT" />
        </Tab> */}
          <Tab eventKey="value" title="INTRINSIC VALUE">
            <StocksNavs navTittle="UNDER VALUED?"
              navLink1="Warren Buffett Quotes"

              content1={<di>
                <ul>
                  <li> <p>We simply attempt to be fearful when others are greedy and to be greedy only when others are fearful.</p>
                  </li>
                  <li>
                    <p>Price is what you pay. Value is what you get.</p>
                  </li>
                  <li>
                    <p>Someone's sitting in the shade today because someone planted a tree a long time ago.</p>
                  </li>
                  <li>
                    <p>Risk comes from not knowing what you're doing.</p>
                  </li>
                  <li>
                    <p>Beware of geeks bearing formulas.</p>
                  </li>
                  <li>
                    <p>I always knew I was going to be rich. I don't think I ever doubted it for a minute.</p>
                  </li>
                  <li>
                    <p>It's only when the tide goes out that you discover who's been swimming naked.</p>
                  </li>
                  <li>
                    <p>Our favorite holding period is forever.</p>
                  </li>
                  <li>
                    <p>Wide diversification is only required when investors do not understand what they are doing.</p>
                  </li>
                  <li>
                    <p>It's far better to buy a wonderful company at a fair price than a fair company at a wonderful price.</p>
                  </li>


                </ul>
              </di>}
            />
          </Tab>

          <Tab eventKey="notes" title="NOTES TO SELF">
            <StocksNavs
              navTittle="NOTES TO SELF"
              navLink1="ASSET"
              content1={
                <div>
                  <hr />

                  <h5 className="text-center shadow-lg p-2 mb-4 bg-white rounded">Asset:</h5>
                  <ul className="overFlow">
                    <hr />
                    <li>
                      An asset must not only hold its value over time. However, it
                      must also increase its value over time.
                  </li>
                    <hr />

                    <li>
                      {" "}
                    TYPES OF ASSETS
                    <hr />
                      <ul>
                        <li>
                          <strong className="text-info">TANGIBLE ASSETS: </strong>
                        Assets that hold a material existence that are tangible.
                        <span className="text-success">Examples:</span>{" "}
                          <em>
                            stocks, real estate, office supplies, equipment,
                          machinery, land, marketable securities...{" "}
                          </em>
                        </li>
                        <hr />

                        <li>
                          <strong className="text-info">
                            INTANGIBLE ASSETS:{" "}
                          </strong>
                        Assets that do not hold a material existence that are
                        intangible.{" "}
                          <span className="text-success">Examples:</span>{" "}
                          <em>
                            Goodwill, patents, copyrights, trade secrets, brand,
                          Intellectual property, permits....{" "}
                          </em>
                        </li>
                        <hr />

                        <li>
                          <strong className="text-info">
                            <u>CURRENT ASSET</u>:{" "}
                          </strong>
                        a short-term asset, anything listed as current asset is
                        very likely to be turned into cash within the next 12
                        months. Understood as liquid assets.{" "}
                          <span className="text-success">Examples:</span>{" "}
                          <em>
                            cash, stocks, marketable securities, and short-term
                          deposits...{" "}
                          </em>{" "}
                        </li>
                        <hr />

                        <li>
                          <strong className="text-info">
                            OPERATING ASSETS:{" "}
                          </strong>
                        Assets used to produce income and to sustain the daily
                        operation.{" "}
                          <span className="text-success">Examples:</span>{" "}
                          <em>
                            cash, office building or factory, machinery,
                          materials, copyright, goodwill, stock...{" "}
                          </em>
                        </li>
                        <hr />

                        <li>
                          <strong className="text-info">
                            FIXED/LONG-TERM ASSETS:{" "}
                          </strong>
                        Identified as hard assets and fixed assets, they cannot
                        easily be turned into cash or its equal value.
                        <span className="text-success"> Examples:</span>
                          <em>
                            property, machines, equipment, real estate, patents,
                          land trademarks...{" "}
                          </em>
                        </li>
                        <hr />

                        <li>
                          <strong className="text-info">
                            NON-OPERATING ASSETS:{" "}
                          </strong>
                        They are not used for the day-to-day operations; they
                        help produce vital income.
                        <span className="text-success"> Examples:</span>{" "}
                          <em>short-term investments, vacant land... </em>
                        </li>
                        <hr />
                      </ul>
                    </li>
                  </ul>
                </div>
              }
              navLink2="LIABILITIES"
              content2={
                <div>
                  <hr />

                  <h5 className="text-center shadow-lg p-2 mb-4 bg-white rounded">LIABILITIES:</h5>
                  <ul className="overFlow">
                    <hr />
                    <li>
                      A liability does not hold its value, it decreases its value
                      over time. However its cost to you may stay the same and or
                      increase over time.
                  </li>
                    <hr />

                    <li>
                      {" "}
                    TYPES OF LIABILITIES
                    <hr />
                      <ul>
                        <li>
                          <strong className="text-info">
                            <u> CURRENT LIABILITIES</u>:{" "}
                          </strong>
                        what must be paid within the next 12 months.
                        <span className="text-success">Examples:</span>{" "}
                          <em>Bills, business lenders, bank overdrafts...</em>
                        </li>
                        <hr />

                        <li>
                          <strong className="text-info">
                            {" "}
                          CONTINGENT LIABILITIES :{" "}
                          </strong>
                        These are the kinds of liabilities that may or may not
                        happen.
                        <span className="text-success">Examples:</span>{" "}
                          <em>
                            Warrant for loans, challenge against goods warranty,
                            and lawsuits...
                        </em>
                        </li>
                        <hr />

                        <li>
                          <strong className="text-info">
                            NON-CURRENT LIABILITIES :{" "}
                          </strong>
                        Are fixed liabilities, these payables are long-term
                        debts that usually are not considered for in a year.
                        These types of debts are used for expansion or for
                        acquiring fixed assets.
                        <span className="text-success">Examples:</span>{" "}
                          <em>long-term loans, payables, bonds...</em>{" "}
                        </li>
                        <hr />
                      </ul>
                    </li>
                  </ul>
                </div>
              }
            />
          </Tab>
        </Tabs>
      </div>
    </div>

  );
}
