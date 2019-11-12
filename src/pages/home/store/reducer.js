import { GET_COUNT } from './actionTypes';
import { initialState } from './initialState';

export default (state = initialState, action) => {
    if (action.type === GET_COUNT) {
        const newState = JSON.parse(JSON.stringify(initialState));
        newState.count = action.count;
        return newState;
    }
    return state;
}