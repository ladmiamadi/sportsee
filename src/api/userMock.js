import axios from 'axios';

export const getUserMock = async (id) => {
     try {
          const response = await axios.get('src/mock/users.json');
          const users = response.data;

          return users.find((user) => user.id === parseInt(id)) || null;
     } catch (error) {
          console.log('Erreur lors du chargement des utilisateurs:', error);
          return error;
     }
};

export const getUserActivitiesMock = async (id) => {
     try {
          const response = await axios.get('src/mock/userActivities.json');
          const users = response.data;

          return users.find((user) => user.userId === parseInt(id)) || null;
     } catch (error) {
          console.log('Erreur lors du chargement des utilisateurs:', error);
          return error;
     }
};

export const getUserSessionsMock = async (id) => {
     try {
          const response = await axios.get('src/mock/userAverageSessions.json');
          const users = response.data;

          return users.find((user) => user.userId === parseInt(id)) || null;
     } catch (error) {
          console.log('Erreur lors du chargement des utilisateurs:', error);
          return error;
     }
};

export const getUserPerformancesMock = async (id) => {
     try {
          const response = await axios.get('src/mock/userPerformance.json');
          const users = response.data;

          return users.find((user) => user.userId === parseInt(id)) || null;
     } catch (error) {
          console.log('Erreur lors du chargement des utilisateurs:', error);
          return error;
     }
};
