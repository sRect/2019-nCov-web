import * as types from './actionTypes';
import { homeData } from './state';

export default (state = homeData, action) => {
	switch (action.type) {
		case types.SET_UUID:
			return state.set('uuid', action.uuid);
		default:
			return state;
	}
};
