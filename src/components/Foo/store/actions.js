import * as types from './actionTypes';

export const increase = () => {
	return {
		type: types.INCREASE,
	};
};

export const decrease = () => {
	return {
		type: types.DECREASE,
	};
};

export const changeMsg = msg => ({
	type: types.CHANGE_MSG,
	msg,
});
