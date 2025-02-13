import React, { useEffect, useState } from 'react';
import styles from './UserResults.module.scss';
import { getUserInfo } from '../../api/userService.js';
import Loader from '../Loader/Loader.jsx';
import Energy from '../../assets/images/energy.svg';
import Protein from '../../assets/images/chicken.svg';
import Glucide from '../../assets/images/apple.svg';
import Lipide from '../../assets/images/cheeseburger.svg';

const UserResults = ({ id }) => {
     const [user, setUser] = useState(null);
     const [isLoading, setIsLoading] = useState(true);
     const [error, setError] = useState(null);

     useEffect(() => {
          setIsLoading(true);

          async function fetchData() {
               try {
                    const response = await getUserInfo(id);
                    setUser(response);
               } catch (error) {
                    console.log(error);
                    setError(true);
               } finally {
                    setIsLoading(false);
               }
          }

          fetchData();
     }, []);

     if (error || !user) {
          return <span></span>;
     }

     if (isLoading) {
          return <Loader />;
     }
     return (
          <div className={styles.cards}>
               <div className={styles.card}>
                    <div className={styles.energy}>
                         <img src={Energy} alt="Calories" />
                    </div>
                    <div className={styles.details}>
                         <h4>
                              {user?.keyData.calorieCount.toLocaleString(
                                   'en-US',
                              )}
                              KCal
                         </h4>
                         <p>Calories</p>
                    </div>
               </div>
               <div className={styles.card}>
                    <div className={styles.protein}>
                         <img src={Protein} alt="Proteins" />
                    </div>
                    <div className={styles.details}>
                         <h4>{user?.keyData.proteinCount}g</h4>
                         <p>Protéines</p>
                    </div>
               </div>
               <div className={styles.card}>
                    <div className={styles.glucide}>
                         <img src={Glucide} alt="Glucides" />
                    </div>
                    <div className={styles.details}>
                         <h4>{user?.keyData.carbohydrateCount}g</h4>
                         <p>Glucides</p>
                    </div>
               </div>
               <div className={styles.card}>
                    <div className={styles.lipide}>
                         <img src={Lipide} alt="Lipides" />
                    </div>
                    <div className={styles.details}>
                         <h4>{user?.keyData.lipidCount}g</h4>
                         <p>Lipides</p>
                    </div>
               </div>
          </div>
     );
};

export default UserResults;
