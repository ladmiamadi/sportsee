import React, { useEffect, useState } from 'react';
import SessionLineChart from '../SessionLineChart/SessionLineChart.jsx';
import styles from './UserSession.module.scss';
import Loader from '../Loader/Loader.jsx';
import { getUserSession } from '../../api/userService.js';

const UserSession = ({ id }) => {
     const [chartData, setChartData] = useState(null);
     const [isLoading, setIsLoading] = useState(true);
     const [error, setError] = useState(null);

     useEffect(() => {
          setIsLoading(true);
          async function fetchData() {
               try {
                    const response = await getUserSession(id);
                    setChartData(
                         response.sessions.map((session) => ({
                              day: ['L', 'M', 'M', 'J', 'V', 'S', 'D'][
                                   session.day - 1
                              ],
                              duration: session.sessionLength,
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
          return (
               <span>
                    Un problème est survenu lors de l'affichage de la page!
               </span>
          );
     }

     if (isLoading) {
          return <Loader />;
     }
     return (
          <div className={styles.container}>
               <SessionLineChart data={chartData} />
          </div>
     );
};

export default UserSession;
