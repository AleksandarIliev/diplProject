import { requestFactory } from './requester';

const baseUrl = `http://localhost:3030/jsonstore`;

export const authServiceFactory = (token) => {
    const request = requestFactory(token);
    return {
        login: (data) => request.post(`${baseUrl}/login`, token, data),
        register: (data) => request.post(`${baseUrl}/register`, token, data),
        logout: () => request.get(`${baseUrl}/logout`),
    }
}