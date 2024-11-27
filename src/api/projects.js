import { apiHandler } from './apiHandler';

export const getProjects = (searchTerm) => {
    let url = '/projects';
    if (searchTerm) {
        url += `?search=${searchTerm}`;
    }

    return apiHandler(url);
};
