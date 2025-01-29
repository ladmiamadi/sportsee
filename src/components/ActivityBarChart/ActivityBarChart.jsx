import React from 'react';
import styles from './ActivityBarChart.module.scss';
import {
     Bar,
     BarChart,
     CartesianGrid,
     Legend,
     Rectangle,
     ResponsiveContainer,
     Tooltip,
     XAxis,
     YAxis,
} from 'recharts';

const ActivityBarChart = ({ data }) => {
     return (
          <div className={styles.barChart}>
               <h3>Activité quotidienne</h3>
               <ResponsiveContainer width={'100%'} height={300}>
                    <BarChart data={data} barGap={8}>
                         <CartesianGrid
                              strokeDasharray="2 3"
                              vertical={false}
                         />
                         <XAxis
                              dataKey="name"
                              stroke="rgba(155, 158, 172, 1)"
                              tickLine={false}
                              tickMargin={10}
                         />
                         <YAxis
                              yAxisId="poids"
                              dataKey="poids"
                              orientation="right"
                              padding={{ top: 34 }}
                              stroke="rgba(155, 158, 172, 1)"
                              domain={[60, 'auto']}
                              axisLine={false}
                              tickLine={false}
                              tickMargin={20}
                         />
                         <YAxis
                              yAxisId="calories"
                              dataKey="calories"
                              hide={true}
                         />

                         <Tooltip
                              separator=""
                              formatter={(value, name) => [
                                   `${value}${name === 'Poids (kg)' ? 'Kg' : 'Kcal'}`,
                              ]}
                              labelFormatter={() => ''}
                              contentStyle={{
                                   backgroundColor: 'rgba(230, 0, 0, 1)',
                                   fontSize: '7px',
                                   color: 'rgba(255, 255, 255, 1)',
                                   width: '39px',
                                   height: '63px',
                                   textAlign: 'center',
                                   border: 'none',
                              }}
                              itemStyle={{
                                   color: 'rgba(255, 255, 255, 1)',
                                   display: 'flex',
                                   flexDirection: 'column',
                                   alignItems: 'center',
                                   justifyContent: 'space-between',
                                   gap: '10px',
                              }}
                         />
                         <Legend
                              verticalAlign="top"
                              iconType="circle"
                              iconSize={8}
                              height={25}
                              width={277}
                              align="right"
                              wrapperStyle={{
                                   top: '-10px',
                                   right: '24px',
                                   fontSize: '14px',
                                   color: 'rgba(116, 121, 140, 1) !important',
                              }}
                         />
                         <Bar
                              dataKey="poids"
                              yAxisId="poids"
                              fill="rgba(40, 45, 48, 1)"
                              barSize={7}
                              radius={[3, 3, 0, 0]}
                              name="Poids (kg)"
                              activeBar={<Rectangle />}
                         />
                         <Bar
                              yAxisId="calories"
                              dataKey="calories"
                              fill="rgba(230, 0, 0, 1)"
                              barSize={7}
                              radius={[3, 3, 0, 0]}
                              name="Calories brûlées (kCal)"
                              activeBar={<Rectangle />}
                         />
                    </BarChart>
               </ResponsiveContainer>
          </div>
     );
};

export default ActivityBarChart;
