import React from 'react';
import styles from './Home.module.scss';
import { getUserInfo } from '../../api/userService.js';
import Loader from '../../components/Loader/Loader.jsx';
import UserInfo from '../../components/UserInfo/UserInfo.jsx';

const Home = () => {
     const { data: user, isLoading, error } = getUserInfo(12);

     if (error) {
          return <span>Il y a un problème!</span>;
     }

     if (isLoading) {
          return (
               <>
                    <Loader />
               </>
          );
     }

     return (
          <div>
               <UserInfo id={18} />
          </div>
     );
};

export default Home;
