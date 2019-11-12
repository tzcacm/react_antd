import { initialState } from './initialState';
import { CHANGE_LOGIN } from './actionTypes';

export default (state = initialState, action) => {
    if (action.type === CHANGE_LOGIN) {
        let newState = JSON.parse(JSON.stringify(state));
        newState.userName = action.userName;
        newState.passWord = action.passWord;
        newState.tokenId = action.tokenId;
        return newState;
    }
    return state;
}