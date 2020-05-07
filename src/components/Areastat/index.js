import React, { memo, Fragment, useState, useEffect } from 'react';
import { Toast } from 'antd-mobile';
import Table from '../Table';
import api from 'api/request';

const AreaStat = memo(() => {
	const { getAreaStat } = api;
	const [tableData, setTableData] = useState([]);

	const getTableData = () => {
		getAreaStat()
			.then(data => {
				setTableData(data);
			})
			.catch(err => {
				console.log(err);
				Toast.fail('areastat fetch error');
			});
	};

	useEffect(() => {
		getTableData();
	}, []);

	return (
		<Fragment>
			<Table type="AreaStat" tableData={tableData}></Table>
		</Fragment>
	);
});

export default AreaStat;
