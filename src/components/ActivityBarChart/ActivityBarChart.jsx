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
               <ResponsiveContainer width="100%" height={320}>
                    <BarChart
                         data={data}
                         barGap={8}
                         barSize={8}
                         margin={{
                              top: 60,
                              right: 50,
                              left: 45,
                              bottom: 50,
                         }}
                    >
                         <CartesianGrid strokeDasharray="1" vertical={false} />
                         <XAxis
                              dataKey="name"
                              tickLine={false}
                              tickMargin={10}
                              stroke="#DEDEDE"
                         />
                         <YAxis
                              yAxisId="poids"
                              dataKey="poids"
                              orientation="right"
                              padding={{ top: 34 }}
                              stroke="rgba(155, 158, 172, 1)"
                              domain={[60, 'dataMax']}
                              axisLine={false}
                              tickLine={false}
                              tickMargin={45}
                              minTickGap={27}
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
                              width="auto"
                              align="right"
                              wrapperStyle={{
                                   top: '10px',
                                   right: '20px',
                                   fontSize: '14px',
                                   color: 'rgba(116, 121, 140, 1) !important',
                                   display: 'flex',
                                   justifyContent: 'space-between',
                                  padding: '0 10px'
                              }}
                              formatter={(value, entry) => (
                                   <span
                                        style={{
                                             color: 'rgba(116, 121, 140, 1)',
                                        }}
                                   >
                                        {value}
                                   </span>
                              )}
                              margin={{
                                   top: 0,
                                   right: 0,
                                   bottom: 0,
                                   left: 20,
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
                         <text
                              className="graphTitle"
                              x={32}
                              y={24}
                              width={147}
                              height={48}
                              fill="#20253A"
                              style={{ fontWeight: 600 }}
                         >
                              {' '}
                              Activité quotidienne
                         </text>
                    </BarChart>
               </ResponsiveContainer>
          </div>
     );
};

export default ActivityBarChart;
