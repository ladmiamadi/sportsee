import React from 'react';
import styles from './SessionLineChart.module.scss';

import {
     ResponsiveContainer,
     LineChart,
     Line,
     Tooltip,
     XAxis,
     YAxis,
     CartesianGrid,
     Rectangle,
} from 'recharts';

const SessionLineChart = ({ data }) => {
     const modifiedData = [
          { day: '', duration: 0 },
          ...data,
          { day: '', duration: 0 },
     ];
     const CustomTooltip = ({ active, payload }) => {
          if (active && payload && payload.length) {
               return (
                    <div className="custom-tooltip2">
                         <p className={styles.tooltip}>
                              {`${payload[0].value}` + ` `}min
                         </p>
                    </div>
               );
          }

          return null;
     };

     const CustomCursor = ({ points }) => {
          return (
               <Rectangle
                    fill="#000000"
                    opacity={0.09}
                    x={points[1].x}
                    width={1000}
                    height={400}
               />
          );
     };
     return (
          <>
               <ResponsiveContainer width="100%" height={263}>
                    <LineChart data={modifiedData} margin={{ top: 120, right: -10, left: -68, bottom: 50 }} >
                         <defs>
                              <linearGradient
                                   id="gradientColor"
                                   x1="1"
                                   y1="1"
                                   x2="0"
                                   y2="1"
                              >
                                   <stop
                                        offset="20%"
                                        stopColor="#FFFFFF"
                                        stopOpacity={0.9}
                                   />
                                   <stop
                                        offset="100%"
                                        stopColor="#FFFFFF"
                                        stopOpacity={0.4}
                                   />
                              </linearGradient>
                         </defs>
                         <CartesianGrid vertical={false} horizontal={false} />
                         <XAxis
                              dataKey="day"

                              tickLine={false}
                              fillOpacity={0.5}
                              style={{

                              }}
                              tick={{
                                   fill: '#FFFFFF',
                                   fontWeight: 600,
                                   fontSize: 12,
                              }}
                              tickMargin={14}
                              dy={25}
                              axisLine={false}
                              interval="preserveStartEnd"
                              tickFormatter={(value) => (value === '' ? '' : value)}
                         />

                         <YAxis
                              axisLine={false}
                              tickLine={false}
                              tick={false}
                         />
                         <Tooltip
                              content={<CustomTooltip />}
                              cursor={<CustomCursor />}
                         />

                         <Line
                              type="natural"
                              dataKey="duration"
                              dot={false}
                              strokeWidth={2.5}
                              stroke="url(#gradientColor)"
                         ></Line>
                         <text
                              x="15%"
                              y="15%"
                              width={147}
                              height={48}
                              fill="#FFFFFF"
                              style={{ fontWeight: 500, opacity: 0.6 }}
                         >
                              {' '}
                              Durée moyenne des
                         </text>

                         <text
                              x="15%"
                              y="27%"
                              width={147}
                              height={48}
                              fill="#FFFFFF"
                              style={{ fontWeight: 500, opacity: 0.6 }}
                         >
                              {' '}
                              sessions
                         </text>
                    </LineChart>
               </ResponsiveContainer>
          </>
     );
};

export default SessionLineChart;
