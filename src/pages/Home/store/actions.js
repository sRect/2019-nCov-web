import * as types from './actionTypes';

export const setUuid = uuid => {
	return {
		type: types.SET_UUID,
		uuid,
	};
};
