import React, { useEffect, useState } from 'react';
import { getUserPerformance } from '../../api/userService.js';
import Loader from '../Loader/Loader.jsx';
import PerformanceRadarChart from '../PerformanceRadarChart/PerformanceRadarChart.jsx';
import styles from './UserPerformance.module.scss';

const UserPerformance = ({ id }) => {
     const [userActivity, setUserActivity] = useState(null); // à revoir
     const [chartData, setChartData] = useState(null);
     const [isLoading, setIsLoading] = useState(true);
     const [error, setError] = useState(null);

     useEffect(() => {
          setIsLoading(true);
          async function fetchData() {
               try {
                    const response = await getUserPerformance(id);
                    setUserActivity(response);

                    setChartData(
                         response.data.map((item) => ({
                              subject: response.kind[item.kind],
                              value: item.value,
                              fullMark: 150,
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
          return <span>Il y a un problème: {error}</span>;
     }

     if (isLoading) {
          return <Loader />;
     }

     return (
          <div className={styles.container}>
               <PerformanceRadarChart data={chartData} />
          </div>
     );
};

export default UserPerformance;
