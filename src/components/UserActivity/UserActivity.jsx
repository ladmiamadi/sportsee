import React, { useEffect, useState } from 'react';
import { getUserActivity } from '../../api/userService.js';
import Loader from '../Loader/Loader.jsx';
import ActivityBarChart from '../ActivityBarChart/ActivityBarChart.jsx';
import styles from './UserActivity.module.scss';

const UserActivity = ({ id }) => {
     const [chartData, setChartData] = useState(null);
     const [isLoading, setIsLoading] = useState(true);
     const [error, setError] = useState(null);

     useEffect(() => {
          setIsLoading(true);
          async function fetchData() {
               try {
                    const response = await getUserActivity(id);
                    setChartData(
                         response.sessions.map((session, index) => ({
                              name: index + 1,
                              poids: session.kilogram,
                              calories: session.calories,
                         })),
                    );
               } catch (error) {
                    setError(true);
               } finally {
                    setIsLoading(false);
               }
          }

          fetchData();
     }, []);

     if (error) {
          return <span></span>;
     }

     if (isLoading) {
          return <Loader />;
     }

     return (
          <div className={styles.container}>
               <ActivityBarChart data={chartData} />
          </div>
     );
};

export default UserActivity;
