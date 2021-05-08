import React from "react";
import Table from "react-bootstrap/Table";

export default function Tables(props) {
  return (
    <di>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>KEY GROWTH RATES</th>

            <th>EXPECTED YEARLY GROWTH RATE</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>(R.O.I.C) Return On Investment Capital</td>
            Greater than or equal to{" "}
            <mark>
              <strong className="text-danger">10%</strong>
            </mark>{" "}
            per year for 10 years{" "}
          </tr>
          <tr>
            <td>Revenue(Sales) Growth Rate</td>
            Greater than or equal to{" "}
            <mark>
              <strong className="text-danger">10%</strong>
            </mark>{" "}
            per year for 10 years{" "}
          </tr>
          <tr>
            <td>E.P.S Earnings Per Share</td>
            Greater than or equal to{" "}
            <mark>
              <strong className="text-danger">10%</strong>
            </mark>{" "}
            per year for 10 years{" "}
          </tr>
          <tr>
            <td>BV or BVPS or Equity Growth Rate</td>

            <td>
              {" "}
              Greater than or equal to{" "}
              <mark>
                <strong className="text-danger">10%</strong>
              </mark>{" "}
              per year for 10 years
            </td>
          </tr>
          <tr>
            <td>F.C.F. Free Cash Flow Growth Rate</td>
            Greater than or equal to{" "}
            <mark>
              <strong className="text-danger">10%</strong>
            </mark>{" "}
            per year for 10 years{" "}
          </tr>
        </tbody>
      </Table>
    </di>
  );
}
