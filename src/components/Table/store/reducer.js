import * as types from './actionTypes';
import { tableData } from './state';

export default (state = tableData, action) => {
	switch (action.type) {
		case types.SET_TABLE_DATA:
			return state.set('tbodyData', action.tableData);
		default:
			return state;
	}
};
