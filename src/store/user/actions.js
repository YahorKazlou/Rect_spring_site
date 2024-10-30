export const USER_LOGIN = 'USER/LOGIN';
export const login = (userData) => ({
    type: USER_LOGIN,
    payload: userData,
});
