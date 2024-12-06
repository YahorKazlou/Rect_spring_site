export const apiHandler = async (
    endpoint,
    method = 'GET',
    requestBody,
    headers = {}
) => {
    const requestOptions = {
        method,
        headers: { 'Content-Type': 'application/json', ...headers },
    };

    if (requestBody) {
        requestOptions.body = JSON.stringify(requestBody);
    }

    const response = await fetch(
        `http://localhost:3001${endpoint}`,
        requestOptions
    );
    return response;
};

export const authorisedApiHandler = (endpoint, method = 'GET', requestBody) => {
    const token = localStorage.getItem('authToken');

    return apiHandler(endpoint, method, requestBody, {
        Authorization: `Bearer ${token}`,
    });
};
