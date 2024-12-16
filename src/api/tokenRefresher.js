import { apiHandler } from './apiHandler';

export const refreshToken = (refreshToken) =>
    apiHandler('/refresh-token', 'POST', { refreshToken });

export const callApiWithRefresher = async (api, params) => {
    try {
        const response = await api(...params);
        if (response.status === 401) {
            const token = localStorage.getItem('refreshToken');
            if (!token) return response;
            const newTokenResponse = await refreshToken(token);
            if (newTokenResponse.status === 200) {
                const data = await newTokenResponse.json();
                localStorage.setItem('accessToken', data?.accessToken);
                localStorage.setItem('refreshToken', data?.refreshToken);
                const repeatedResponse = await api(...params);
                return repeatedResponse;
            } else {
                localStorage.removeItem('accessToken');
                localStorage.removeItem('refreshToken');
                return response;
            }
        } else {
            return response;
        }
    } catch (error) {
        console.error(error);
    }
};
