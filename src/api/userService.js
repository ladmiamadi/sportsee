import {
     getUserActivitiesApi,
     getUserApi,
     getUserPerformancesApi,
     getUserSessionsApi,
} from './userApi.js';
import {
     getUserActivitiesMock,
     getUserMock,
     getUserPerformancesMock,
     getUserSessionsMock,
} from './userMock.js';

const environment = import.meta.env.VITE_API_ENV;

export const getUserInfo = async (id) => {
     if (environment === 'prod') {
          return await getUserApi(id);
     } else {
          return await getUserMock(id);
     }
};

export const getUserActivity = async (id) => {
     if (environment === 'prod') {
          return await getUserActivitiesApi(id);
     } else {
          return await getUserActivitiesMock(id);
     }
};

export const getUserSession = async (id) => {
     if (environment === 'prod') {
          return await getUserSessionsApi(id);
     } else {
          return await getUserSessionsMock(id);
     }
};

export const getUserPerformance = async (id) => {
     if (environment === 'prod') {
          return await getUserPerformancesApi(id);
     } else {
          return await getUserPerformancesMock(id);
     }
};
