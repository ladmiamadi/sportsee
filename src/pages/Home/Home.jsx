import React from 'react';
import UserInfo from '../../components/UserInfo/UserInfo.jsx';
import UserActivity from '../../components/UserActivity/UserActivity.jsx';
import UserSession from '../../components/UserSession/UserSession.jsx';
import styles from './Home.module.scss';
import { useParams } from 'react-router';
import UserPerformance from '../../components/UserPerformance/UserPerformance.jsx';
import UserScore from '../../components/UserScore/UserScore.jsx';
import UserResults from '../../components/UserResults/UserResults.jsx';

const Home = () => {
     const { id } = useParams();

     return (
          <div>
               <UserInfo id={id} />
               <div className={styles.flexContainer}>
                    <div className={styles.container}>
                         <UserActivity id={id} />
                         <div className={styles.bottomContainer}>
                              <UserSession id={id} />
                              <UserPerformance id={id} />
                              <UserScore id={id} />
                         </div>
                    </div>
                    <div>
                         <UserResults id={id} />
                    </div>
               </div>
          </div>
     );
};

export default Home;
