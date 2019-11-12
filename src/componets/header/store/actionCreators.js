import { HEADER_INFO, GET_LIST } from './actionTypes';

export const header_info = (tokeid, name) => ({
    type: HEADER_INFO,
    tokeid,
    name
});


export const get_header_info = (() => {
    return (dispatch) => {
        const action = header_info('tzc', 'tzc');
        dispatch(action);
    }
})

export const get_list = (list, index) => ({
    type: GET_LIST,
    list,
    index
})