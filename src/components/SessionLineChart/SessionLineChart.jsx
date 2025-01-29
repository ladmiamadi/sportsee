import React from 'react';
import {
     Area,
     AreaChart,
     ResponsiveContainer,
     Tooltip,
     XAxis,
     YAxis,
} from 'recharts';

const SessionLineChart = ({ data }) => {
     return (
          <>
               <h3>Durée moyenne des sessions</h3>
               <ResponsiveContainer width={258} height={150}>
                    <AreaChart data={data}>
                         <defs>
                              <linearGradient
                                   id="strokeGradient"
                                   x1="0"
                                   y1="0"
                                   x2="1"
                                   y2="0"
                              >
                                   <stop
                                        offset="1.19%"
                                        stopColor="rgba(255, 255, 255, 0.4)"
                                   />
                                   <stop offset="81.27%" stopColor="#FFFFFF" />
                              </linearGradient>
                         </defs>

                         <XAxis
                              dataKey="day"
                              tick={{
                                   fill: 'white',
                                   opacity: 0.5,
                              }}
                              axisLine={false}
                              tickLine={false}
                              padding={{ right: 10, left: 10 }}
                         />
                         <YAxis hide={true} />
                         <Tooltip
                              formatter={(value, name) => [
                                   `${value} min ${(name = '')}`,
                              ]}
                              labelFormatter={() => ''}
                         />
                         <Area
                              type="monotone"
                              dataKey="duration"
                              stroke="url(#strokeGradient)"
                              strokeWidth={2}
                              fill="rgba(255, 0, 0, 1)"
                         />
                    </AreaChart>
               </ResponsiveContainer>
          </>
     );
};

export default SessionLineChart;
