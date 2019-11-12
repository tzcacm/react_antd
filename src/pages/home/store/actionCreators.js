import { GET_COUNT } from './actionTypes';

export const getCount = (count) => ({
    type: GET_COUNT,
    count: count
})