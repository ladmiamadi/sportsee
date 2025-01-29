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
     const translations = {
          cardio: 'Cardio',
          energy: 'Énergie',
          endurance: 'Endurance',
          strength: 'Force',
          speed: 'Vitesse',
          intensity: 'Intensité',
     };

     return (
          <>
               <ResponsiveContainer width="100%" height="100%">
                    <RadarChart
                         outerRadius="60%"
                         data={data}
                         style={{
                              backgroundColor: 'rgba(40, 45, 48, 1)',
                              borderRadius: '5px',
                         }}
                    >
                         <PolarGrid />
                         <PolarAngleAxis
                              dataKey="subject"
                              tickFormatter={(value) =>
                                   translations[value] || value
                              }
                              tick={{
                                   color: 'rgba(255, 255, 255, 1) !important',
                                   fontSize: '12px',
                                   fontWeight: 'bold',
                              }}
                         />
                         <PolarRadiusAxis
                              angle={30}
                              domain={[0, 150]}
                              tick={false}
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
