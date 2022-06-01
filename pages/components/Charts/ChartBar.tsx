import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    BarElement,
    Tooltip,
    Legend,
  } from 'chart.js'

ChartJS.register(
    CategoryScale,
    BarElement,
    Tooltip,
    Legend
)

import { Bar } from 'react-chartjs-2';

const dataBar = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Revenue",
        backgroundColor: "rgba(2,117,216,1)",
        borderColor: "rgba(2,117,216,1)",
        data: [4215, 5312, 6251, 7841, 9821, 14984],
      }
    ],
    options: {
      scales: {
        xAxes: [{
          time: {
            unit: 'month'
          },
          gridLines: {
            display: false
          },
          ticks: {
            maxTicksLimit: 6
          }
        }],
        yAxes: [{
          ticks: {
            min: 0,
            max: 15000,
            maxTicksLimit: 5
          },
          gridLines: {
            display: true
          }
        }],
      },
      legend: {
        display: false
      }
    }
};

const ChartBar = (props) => {
    return (
        <div>
            <Bar
                data={dataBar}
                width={props.width}
                height={props.height}
            />
        </div>
    )
}

export default ChartBar;

