import { combineReducers } from 'redux';
import HomeReducer from '../pages/home/store/reducer';
import LoginReducer from '../pages/login/store/reducer';


import HeaderReducer from '../componets/header/store/reducer';

const reducer = combineReducers({
    header: HeaderReducer,
    home: HomeReducer,
    login: LoginReducer
});

export default reducer;