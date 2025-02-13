import React from 'react';
import {
     PolarAngleAxis,
     PolarGrid,
     PolarRadiusAxis,
     Radar,
     RadarChart,
     ResponsiveContainer,
} from 'recharts';

const PerformanceRadarChart = ({ data }) => {
     const CustomPolarTick = (props) => {
          const { payload, x, y, textAnchor } = props;

          const translations = {
               cardio: 'Cardio',
               energy: 'Énergie',
               endurance: 'Endurance',
               strength: 'Force',
               speed: 'Vitesse',
               intensity: 'Intensité',
          };

          const translatedValue = translations[payload.value] || payload.value;

          let newY = y;
          if (payload.value === 'endurance') {
               newY = y + 10;
          } else if (payload.value === 'intensity') {
               newY = y - 10;
          }

          return (
               <text
                    x={x}
                    y={newY}
                    textAnchor={textAnchor}
                    fill="rgba(255, 255, 255, 1)"
                    fontSize="12px"
                    fontWeight="bold"
               >
                    {translatedValue}
               </text>
          );
     };
     return (
          <>
               <ResponsiveContainer width="100%" height="100%">
                    <RadarChart
                         outerRadius={window.innerWidth <= 1024 ? '45%' : '73%'}
                         data={data}
                         style={{
                              backgroundColor: 'rgba(40, 45, 48, 1)',
                              borderRadius: '5px',
                         }}
                         innerRadius="20%"
                    >
                         <PolarGrid />
                         <PolarAngleAxis
                              dataKey="subject"
                              tick={CustomPolarTick}
                              tickLine={false}
                         />
                         <PolarRadiusAxis
                              angle={30}
                              domain={[0, 150]}
                              tick={false}
                              axisLine={false}
                         />
                         <Radar
                              name="chart"
                              dataKey="value"
                              stroke="rgba(255, 1, 1, 0.7)"
                              fill="rgba(255, 1, 1, 0.7)"
                         />
                    </RadarChart>
               </ResponsiveContainer>
          </>
     );
};

export default PerformanceRadarChart;
