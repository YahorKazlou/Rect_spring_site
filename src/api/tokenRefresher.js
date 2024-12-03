import { apiHandler } from './apiHandler';

export const refreshToken = (token) =>
    apiHandler('/refresh-token', 'POST', { token });

/*
 * TODO
 * handler to refresh token and repeat the call if it fails
 */
