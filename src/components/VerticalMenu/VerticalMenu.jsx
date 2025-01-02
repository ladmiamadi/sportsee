import React from 'react';
import styles from './VerticalMenu.module.scss';
import { Link } from 'react-router';
import Meditation from '../../assets/images/meditation.png';
import Dumbbell from '../../assets/images/dumbbell.png';
import Bike from '../../assets/images/bike.png';
import Swimming from '../../assets/images/swimming.png';

const VerticalMenu = () => {
     return (
          <div className={styles.menu}>
               <nav>
                    <ul>
                         <li className={styles.icon}>
                              <Link to="/">
                                   <img
                                        src={Meditation}
                                        alt="Meditation icon"
                                   />
                              </Link>
                         </li>
                         <li className={styles.icon}>
                              <Link to="#">
                                   <img src={Swimming} alt="swimming icon" />
                              </Link>
                         </li>
                         <li className={styles.icon}>
                              <Link to="#">
                                   <img src={Bike} alt="Bike icon" />
                              </Link>
                         </li>
                         <li className={styles.icon}>
                              <Link to="#">
                                   <img src={Dumbbell} alt="Dumbbell icon" />
                              </Link>
                         </li>
                    </ul>
               </nav>
               <p className={styles.copyright}>Copiryght, SportSee 2025</p>
          </div>
     );
};

export default VerticalMenu;
