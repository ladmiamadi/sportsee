import React, { useEffect, useState } from 'react';
import styles from './UserResults.module.scss';
import { getUserInfo } from '../../api/userService.js';
import Loader from '../Loader/Loader.jsx';

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

     if (error) {
          return <span>Il y a un problème: {error}</span>;
     }

     if (isLoading) {
          return <Loader />;
     }
     return <div>results</div>;
};

export default UserResults;
