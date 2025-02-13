import React, { useEffect, useState } from 'react';
import { getUserInfo } from '../../api/userService.js';
import Loader from '../Loader/Loader.jsx';
import styles from './UserScore.module.scss';
import ScoreRadialChart from '../ScroreRadialChart/ScoreRadialChart';

const UserScore = ({ id }) => {
     const [userActivity, setUserActivity] = useState(null); // à revoir
     const [chartData, setChartData] = useState(null);
     const [isLoading, setIsLoading] = useState(true);
     const [error, setError] = useState(null);

     useEffect(() => {
          setIsLoading(true);
          async function fetchData() {
               try {
                    const response = await getUserInfo(id);
                    setUserActivity(response);
                    setChartData([
                         {
                              score:
                                   (response.todayScore || response.score) *
                                   100,
                         },
                    ]);
               } catch (error) {
                    setError(true);
                    console.log(error);
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
               <ScoreRadialChart data={chartData} />
          </div>
     );
};

export default UserScore;
