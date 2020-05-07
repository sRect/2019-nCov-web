import React, { memo, Fragment, useState, useEffect } from 'react';
import { Toast } from 'antd-mobile';
import Table from '../Table';
import api from 'api/request';

const ListByCountryTypeService2true = memo(() => {
	const [tableData, setTableData] = useState([]);
	const { getListByCountryTypeService2true } = api;

	useEffect(() => {
		getListByCountryTypeService2true({
			continents: 'ashia',
			orderQuery: { confirmedCount: -1 },
			pageNum: 0,
			pageSize: 10,
		})
			.then(data => {
				console.log(data);
				setTableData(data);
			})
			.catch(err => {
				console.log(err);
				Toast.fail('listByCountryTypeService2true fetch error');
			});
	}, []);

	return (
		<Fragment>
			<Table type="ListByCountryTypeService2true" tableData={tableData} />
		</Fragment>
	);
});

export default ListByCountryTypeService2true;
