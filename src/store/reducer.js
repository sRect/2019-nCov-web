// import { combineReducers } from 'redux';
import { combineReducers } from 'redux-immutable';
import { reducer as homeReducer } from 'pages/Home/store';

const allReducer = {
	homeReducer,
};

const rootReducer = combineReducers(allReducer);

export default rootReducer;
