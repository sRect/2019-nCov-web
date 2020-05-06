// import { combineReducers } from 'redux';
import { combineReducers } from 'redux-immutable';
import { reducer as fooReducer } from 'components/Foo/store';
import { reducer as homeReducer } from 'pages/Home/store';

const allReducer = {
	homeReducer,
	fooReducer,
};

const rootReducer = combineReducers(allReducer);

export default rootReducer;
