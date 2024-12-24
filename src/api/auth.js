import { apiHandler } from './apiHandler';

export const authLogin = (login, password) =>
    apiHandler('/login', 'POST', { login, password });

export const authSignup = (userData) => apiHandler('/signup', 'POST', userData);
