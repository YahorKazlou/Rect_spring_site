import { apiHandler } from './apiHandler';

export const getProjectsApi = (searchTerm) => {
    let url = '/projects';
    if (searchTerm) {
        url += `?search=${searchTerm}`;
    }

    return apiHandler(url);
};
