import React from "react";
import { Pie } from "react-chartjs-2"

export default function Chart(props) {
    return (<div className="shadow-lg p-1 mb-3 bg-white rounded">
        <div className="bg-dark rounded shadow-lg p-3 mb-5 rounded">
            <Pie className=""
                data={{
                    // at the bottom
                    labels: ['Income', 'Estimated Income', 'Investments', 'Debts',],
                    datasets: [{
                        label: 'GENERAL INFORMATION',
                        data: props.data,

                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 1
                    }]

                }}
                width={400}
                height={600}
                options={{ maintainAspectRatio: false }}
            />
        </div>
<h4 className="text-center"> Assets and liabilities Calculation's chart.</h4>
    </div>
    );
}