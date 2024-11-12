import {
    login,
    LOGIN_ERROR,
    LOGIN_PENDING,
    LOGIN_SUCCESS,
} from '../store/user/actions';
import { loginApi } from '../api';
import { enableFetchMocks } from 'jest-fetch-mock';

enableFetchMocks();

describe('userActions', () => {
    beforeEach(() => {
        fetch.resetMocks();
    });
    it('Login successful, creates LOGIN_PENDING and LOGIN_SUCCESS', async () => {
        const expected = [
            { type: LOGIN_PENDING },
            {
                type: LOGIN_SUCCESS,
                payload: {
                    login: 'test_user',
                    password: 'test_password',
                },
            },
        ];

        fetch.mockResponseOnce({ status: 200, body: { login: 'test_user' } });

        // mock the dispatch and getState functions from Redux thunk.
        const dispatch = jest.fn(),
            getState = jest.fn();

        // execute
        await login('test_user', 'test_password')(dispatch, getState);

        // verify
        expect(fetch.mock.calls.length).toEqual(1);
        expect(dispatch.mock.calls[0][0]).toEqual(expected[0]);
        expect(dispatch.mock.calls[1][0]).toEqual(expected[1]);
    });
    it('Login failed, creates LOGIN_PENDING and LOGIN_ERROR', async () => {
        const expected = [{ type: LOGIN_PENDING }, { type: LOGIN_ERROR }];

        fetch.mockResponseOnce(
            () => new Promise((resolve) => resolve({ status: 403 }))
        );
        // fetch.mockResponseOnce({ status: 403 });

        // mock the dispatch and getState functions from Redux thunk.
        const dispatch = jest.fn(),
            getState = jest.fn();

        // execute
        await login('test_user', 'test_password')(dispatch, getState);

        // verify
        expect(fetch.mock.calls.length).toEqual(1);
        expect(dispatch.mock.calls[0][0]).toEqual(expected[0]);
        expect(dispatch.mock.calls[1][0]).toEqual(expected[1]);
    });
});
