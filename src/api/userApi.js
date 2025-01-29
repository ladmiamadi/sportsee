import axios from 'axios';

export const getUserApi = async (id) => {
     try {
          const response = await axios.get(`http://localhost:3000/user/${id}`);

          const user = response.data;

          return user.data;
     } catch (error) {
          console.log('Erreur lors du chargement des utilisateurs:', error);
          return null;
     }
};

export const getUserActivitiesApi = async (id) => {
     try {
          const response = await axios.get(
               `http://localhost:3000/user/${id}/activity`,
          );

          const user = response.data;

          return user.data;
     } catch (error) {
          console.log('Erreur lors du chargement des utilisateurs:', error);
          return null;
     }
};

export const getUserSessionsApi = async (id) => {
     try {
          const response = await axios.get(
               `http://localhost:3000/user/${id}/average-sessions`,
          );

          const user = response.data;

          return user.data;
     } catch (error) {
          console.log('Erreur lors du chargement des utilisateurs:', error);
          return null;
     }
};

export const getUserPerformancesApi = async (id) => {
     try {
          const response = await axios.get(
               `http://localhost:3000/user/${id}/performance`,
          );

          const user = response.data;

          return user.data;
     } catch (error) {
          console.error('Erreur lors du chargement des utilisateurs:', error);
          return null;
     }
};
