import React from "react";
import { Pie } from "react-chartjs-2"


export default function Chart(props) {
    return (
        <div className="bg-dark rounded p-2 " style={{ height: 350 }}>
            <Pie className=""
                data={{
                    // at the bottom
                    labels: ['Croceries', 'Eating Out', 'Transportation', 'Online Purchases'],
                    datasets: [{
                        label: props.titel,
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
                width={100}
                height={100}
                options={{ maintainAspectRatio: false }}
            />
        </div>
    );
}