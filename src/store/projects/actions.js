import {
    getProjects as getProjectsApi,
    callApiWithRefresher as callApi,
} from '../../api';

export const GET_PROJECTS_PENDING = 'GET_PROJECTS_PENDING';
export const GET_PROJECTS_SUCCESS = 'GET_PROJECTS_SUCCESS';
export const GET_PROJECTS_ERROR = 'GET_PROJECTS_ERROR';

export const getProjectsPending = () => ({
    type: GET_PROJECTS_PENDING,
});

export const getProjectsSuccess = (userData) => ({
    type: GET_PROJECTS_SUCCESS,
    payload: userData,
});

export const getProjectsError = () => ({
    type: GET_PROJECTS_ERROR,
});

export const getProjects = (searchTerm) => async (dispatch) => {
    dispatch(getProjectsPending());
    try {
        const response = await callApi(getProjectsApi, [searchTerm]);
        const data = await response.json();
        const { status } = response;
        if (status === 200 || status === 204) {
            dispatch(getProjectsSuccess(data?.data));
        } else {
            dispatch(getProjectsError());
        }
    } catch (error) {
        dispatch(getProjectsError());
    }
};
