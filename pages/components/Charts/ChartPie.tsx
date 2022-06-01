import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    ArcElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js'

ChartJS.register(
    CategoryScale,
    ArcElement,
    Title,
    Tooltip,
    Legend
)

import { Pie } from 'react-chartjs-2';


const dataPie = {
    labels: ["Blue", "Red", "Yellow", "Green"],
    datasets: [
      {
        data: [12.21, 15.58, 11.25, 8.32],
        backgroundColor: ['#007bff', '#dc3545', '#ffc107', '#28a745']
      }
    ],
    options: {
      responsive: true
    }
};
  
const ChartPie = (props) => {
    return (
        <div>
            <Pie
                data={dataPie}
                width={props.width}
                height={props.height}
            />
        </div>
    )
}

export default ChartPie;

