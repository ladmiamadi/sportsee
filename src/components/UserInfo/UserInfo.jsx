import React, { useEffect, useState } from 'react';
import { getUserInfo } from '../../api/userService.js';
import Loader from '../Loader/Loader.jsx';
import styles from './UserInfo.module.scss';

const UserInfo = ({ id }) => {
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
          user && (
               <div className={styles.infos}>
                    <h2>
                         Bonjour <span>{user.userInfos.firstName}</span>
                    </h2>
                    <p>
                         Félicitation ! Vous avez explosé vos objectifs hier 👏
                    </p>
               </div>
          )
     );
};

export default UserInfo;
