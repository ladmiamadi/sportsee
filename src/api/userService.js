import {
     getUser,
     getUserActivities,
     getUserPerformances,
     getUserSessions,
} from './userMock.js';

export const getUserInfo = async (id) => {
     return await getUser(id);
};

export const getUserActivity = async (id) => {
     return await getUserActivities(id);
};

export const getUserSession = async (id) => {
     return await getUserSessions(id);
};

export const getUserPerformance = async (id) => {
     return await getUserPerformances();
};
