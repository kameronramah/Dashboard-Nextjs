import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
)

import { Line } from 'react-chartjs-2';

const Chart = (props) => {
    return (
        <div>
            <Line
                data={props.data}
                width={'100%'}
                height={30}
            />
        </div>
    )
}

export default Chart;

