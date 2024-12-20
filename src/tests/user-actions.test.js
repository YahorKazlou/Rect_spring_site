import {
    login,
} from '../store/user/actions';
import {
    LOGIN_ERROR,
    LOGIN_PENDING,
    LOGIN_SUCCESS,
} from '../store/user/loginActions';
import { enableFetchMocks } from 'jest-fetch-mock';

enableFetchMocks();
const localStorageMock = {
    getItem: jest.fn(),
    setItem: jest.fn(),
    clear: jest.fn(),
};
global.localStorage = localStorageMock;

describe('userActions', () => {
    beforeEach(() => {
        fetch.resetMocks();
        // global.localStorage = {
        //     getItem: localStorageSpy,
        // };
    });
    it('Should dispatch LOGIN_PENDING and LOGIN_SUCCESS on successful login', async () => {
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
        fetch.mockResponseOnce(JSON.stringify({ status: 200, data: '12345' }));

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
    it('Should dispatch LOGIN_PENDING and LOGIN_SUCCESS if login failed', async () => {
        const expected = [{ type: LOGIN_PENDING }, { type: LOGIN_ERROR }];

        fetch.mockResponseOnce(JSON.stringify({ status: 403, message: 'Forbidden' }), { status: 403 }); 
        
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
