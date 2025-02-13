import React from 'react';
import styles from '../ActivityBarChart/ActivityBarChart.module.scss';
import {
     Legend,
     RadialBar,
     RadialBarChart,
     ResponsiveContainer,
     Tooltip,
} from 'recharts';

const ScoreRadialChart = ({ data }) => {
     return (
          <ResponsiveContainer>
               <RadialBarChart
                    width="100%"
                    height="100%"
                    innerRadius="80%"
                    outerRadius="90%"
                    data={data}
                    startAngle={-180}
                    endAngle={-270}
                    style={{ borderRadius: '10px' }}
               >
                    <RadialBar
                         minAngle={30}
                         background
                         clockWise={false}
                         dataKey="score"
                         fill="rgba(255, 0, 0, 1)"
                         barSize={10}
                         cornerRadius={10}
                    />
                    <text
                         x="50%"
                         y="50%"
                         textAnchor="middle"
                         dominantBaseline="middle"
                         fontSize="26"
                         fontWeight="500"
                         fill="rgba(40, 45, 48, 1)"
                    >
                         {data[0].score} %
                    </text>
                    <text
                         x="50%"
                         y="60%"
                         textAnchor="middle"
                         dominantBaseline="middle"
                         fontSize="16"
                         fontWeight="500"
                         fill="rgba(116, 121, 140, 1)"
                    >
                         de votre
                    </text>
                    <text
                         x="50%"
                         y="70%"
                         textAnchor="middle"
                         dominantBaseline="middle"
                         fontSize="16"
                         fontWeight="500"
                         fill="rgba(116, 121, 140, 1)"
                    >
                         objectif
                    </text>

                    <text
                         x="15%"
                         y="10%"
                         textAnchor="middle"
                         dominantBaseline="middle"
                         fontSize="15"
                         fontWeight="500"
                         fill="rgba(32, 37, 58, 1)"
                    >
                         Score
                    </text>
               </RadialBarChart>
          </ResponsiveContainer>
     );
};

export default ScoreRadialChart;
