import axios from 'axios';
const environment = import.meta.env.VITE_API_ENV;

export const getUser = async (id) => {
     if (environment === 'dev') {
          try {
               const response = await axios.get('src/mock/users.json');
               const users = response.data;

               return users.find((user) => user.id === id) || null;
          } catch (error) {
               console.error(
                    'Erreur lors du chargement des utilisateurs:',
                    error,
               );
               return null;
          }
     } else {
          try {
               const response = await axios.get(
                    `http://localhost:3000/user/${id}`,
               );

               const user = response.data;

               return user.data;
          } catch (error) {
               console.error(
                    'Erreur lors du chargement des utilisateurs:',
                    error,
               );
               return null;
          }
     }
};

export const getUserActivities = async (id) => {
     if (environment === 'dev') {
          try {
               const response = await axios.get('src/mock/userActivities.json');
               const users = response.data;

               return users.find((user) => user.id === id) || null;
          } catch (error) {
               console.error(
                    'Erreur lors du chargement des utilisateurs:',
                    error,
               );
               return null;
          }
     } else {
          try {
               const response = await axios.get(
                    `http://localhost:3000/user/${id}/activity`,
               );

               const user = response.data;

               return user.data;
          } catch (error) {
               console.error(
                    'Erreur lors du chargement des utilisateurs:',
                    error,
               );
               return null;
          }
     }
};

export const getUserSessions = async (id) => {
     if (environment === 'dev') {
          try {
               const response = await axios.get(
                    'src/mock/userAverageSessions.json',
               );
               const users = response.data;

               return users.find((user) => user.id === id) || null;
          } catch (error) {
               console.error(
                    'Erreur lors du chargement des utilisateurs:',
                    error,
               );
               return null;
          }
     } else {
          try {
               const response = await axios.get(
                    `http://localhost:3000/user/${id}/average-sessions`,
               );

               const user = response.data;

               return user.data;
          } catch (error) {
               console.error(
                    'Erreur lors du chargement des utilisateurs:',
                    error,
               );
               return null;
          }
     }
};

export const getUserPerformances = async (id) => {
     if (environment === 'dev') {
          try {
               const response = await axios.get(
                    'src/mock/userPerformance.json',
               );
               const users = response.data;

               return users.find((user) => user.id === id) || null;
          } catch (error) {
               console.error(
                    'Erreur lors du chargement des utilisateurs:',
                    error,
               );
               return null;
          }
     } else {
          try {
               const response = await axios.get(
                    `http://localhost:3000/user/${id}/performance`,
               );

               const user = response.data;

               return user.data;
          } catch (error) {
               console.error(
                    'Erreur lors du chargement des utilisateurs:',
                    error,
               );
               return null;
          }
     }
};
