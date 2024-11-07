import { apiHandler } from './apiHandler';

export const loginApi = (login, password) =>
    apiHandler('/login', 'POST', { login, password });
