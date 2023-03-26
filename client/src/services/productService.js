import { requestFactory } from './requester';
const baseUrl = `http://localhost:3030/data`;

export const productServiceFactory = (token) => {
    const request = requestFactory(token);

    const getAll = async () => {
        const result = await request.get(baseUrl);
        const products = Object.values(result);
        return products;
    }

    const getOne = async (productId) => {
        const result = await request.get(`${baseUrl}/${productId}`);
        return result;
    }

    const create = async (productData) => {
        const result = await request.post(baseUrl, productData);
        return result;
    }

    const addComment = async (productId, data) => {
        const result = await request.post(`${baseUrl}/${productId}/comments`, data);

        return result;
    }

    const productDelete = (productId) => request.delete(`${baseUrl}/${productId}`);

    const edit = (productId, data) => {
        return request.put(`${baseUrl}/${productId}`, data)
    }

    return {
        getOne,
        getAll,
        create,
        edit,
        addComment,
        delete: productDelete
    }
}