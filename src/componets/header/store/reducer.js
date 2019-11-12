import { HEADER_INFO, GET_LIST } from './actionTypes';

const loginInfo = {
    tokenid: '1',
    name: 'tzc',
    list: [1, 2],
    pageIndex: 1,
    pageSize: 10
};

export default (state = loginInfo, action) => {
    if (action.type === HEADER_INFO) {
        const newLoginInfo = JSON.parse(JSON.stringify(state));
        newLoginInfo.tokenid = action.tokenid;
        newLoginInfo.name = action.name;
        return newLoginInfo;
    }

    if (action.type === GET_LIST) {
        const newList = JSON.parse(JSON.stringify(state));
        console.log(action);
        newList.list = action.list;
        newList.pageIndex = action.index;
        return newList;
    }

    return state;
}