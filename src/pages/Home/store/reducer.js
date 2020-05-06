import * as types from './actionTypes';
import { uuidData } from './state';

export default (state = uuidData, action) => {
	switch (action.type) {
		case types.SET_UUID:
			return state.set('uuid', action.uuid);
		default:
			return state;
	}
};
