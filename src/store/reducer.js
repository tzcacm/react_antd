import { combineReducers } from 'redux';
import { HeaderReducer } from '../componets/header/store';
import { HomeReducer } from '../pages/home/store';
import LoginReducer from '../pages/login/store/reducer';

const reducer = combineReducers({
    header: HeaderReducer,
    home: HomeReducer,
    login: LoginReducer
});

export default reducer;