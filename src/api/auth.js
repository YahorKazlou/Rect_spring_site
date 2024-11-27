import { apiHandler } from './apiHandler';

export const authLogin = (login, password) =>
    apiHandler('/login', 'POST', { login, password });
