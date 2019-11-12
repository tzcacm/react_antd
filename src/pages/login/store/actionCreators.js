import { CHANGE_LOGIN } from './actionTypes';

export const changeLogin = (userName, passWord, tokenId) => ({
    type: CHANGE_LOGIN,
    userName,
    passWord,
    tokenId
});