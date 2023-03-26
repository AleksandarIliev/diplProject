import { requestFactory } from './requester';

const request = requestFactory();
const baseUrl = 'http://localhost:3030/data/comments';

export const create = async (productId, comment) => {
   const result = await request.post(baseUrl, {productId, comment});
   return result;
};

export const getAll = async (productId) => {
    const searchQuery = encodeURIComponent(`productId="${productId}"`);
    const relQuery = encodeURIComponent(`author=_ownerId:users`);
    const result = await request.get(`${baseUrl}?where=${searchQuery}&load=${relQuery}`);
    const comments = Object.values(result);
    return comments;
}