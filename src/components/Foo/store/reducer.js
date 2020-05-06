import { countData } from './state';
import * as types from './actionTypes';

export default (state = countData, action) => {
	switch (action.type) {
		case types.INCREASE:
			// return { ...state, count: state.count + 1 }
			return state.set('count', state.get('count') + 1);
		case types.DECREASE:
			// return { ...state, count: state.count - 1 }
			return state.set('count', state.get('count') - 1);
		case types.CHANGE_MSG:
			return state.set('testMsg', action.msg);
		default:
			return state;
	}
};
