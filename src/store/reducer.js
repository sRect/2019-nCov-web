// import { combineReducers } from 'redux';
import { combineReducers } from 'redux-immutable';
import { reducer as homeReducer } from 'pages/Home/store';
import { reducer as tableReducer } from 'components/Table/store';

const allReducer = {
	homeReducer,
	tableReducer,
};

const rootReducer = combineReducers(allReducer);

export default rootReducer;
