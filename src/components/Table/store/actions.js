import * as types from './actionTypes';

export const setTableData = tableData => {
	return {
		type: types.SET_TABLE_DATA,
		tableData,
	};
};
