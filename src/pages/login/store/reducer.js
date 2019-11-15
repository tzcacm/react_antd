const initialState = {
    userName: 'admin',
    passWord: 'admin',
    tokenId: '',
}

export default (state = initialState, action) => {
    if (action.type === 'loginInfo') {
        let newState = JSON.parse(JSON.stringify(state));
        newState.userName = action.userName;
        newState.passWord = action.passWord;
        newState.tokenId = action.tokenId;
        return newState;
    } else if (action.type === 'exit_login') {
        let newState = JSON.parse(JSON.stringify(state));
        newState.tokenId = action.tokenId
        return newState;
    }
    return state;
}

export const login = ((userName, passWord, tokenId) =>
    (dispatch) => {
        return new Promise(reslove => {
            const action = {
                type: 'loginInfo',
                userName: userName,
                passWord: passWord,
                tokenId: tokenId,
            };
            dispatch(action);
            reslove('success');
        })
    }
)

export const exitLogin = () => {
    return (dispatch) => {
        const action = {
            type: 'exit_login',
            tokenId: ''
        }
        dispatch(action);
        localStorage.removeItem('tokenId');
        window.location = '#/login';
    }
}