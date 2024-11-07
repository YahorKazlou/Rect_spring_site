export const apiHandler = async (endpoint, method = 'GET', requestBody) => {
    const requestOptions = {
        method,
        headers: { 'Content-Type': 'application/json' },
    };

    if (requestBody) {
        requestOptions.body = JSON.stringify(requestBody);
    }

    const response = await fetch(
        `http://localhost:3001${endpoint}`,
        requestOptions
    );

    return response
};
