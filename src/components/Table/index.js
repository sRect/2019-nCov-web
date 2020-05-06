import React, { Fragment } from 'react';
import { WingBlank, WhiteSpace } from 'antd-mobile';
import BootstrapTable from 'react-bootstrap-table-next';
import { TableWrap } from './style';

const columns = [
	{
		dataField: 'provinceName',
		text: '地区',
	},
	{
		dataField: 'currentConfirmedCount',
		text: '现存确诊',
	},
	{
		dataField: 'confirmedCount',
		text: '累计确诊',
	},
	{
		dataField: 'deadCount',
		text: '死亡',
	},
	{
		dataField: 'curedCount',
		text: '治愈',
	},
	{
		dataField: 'detail',
		text: '查看详情',
	},
];

function Table() {
	return (
		<Fragment>
			<WhiteSpace />
			<TableWrap>
				<WingBlank>
					<BootstrapTable keyField="id" data={[]} columns={columns} />
				</WingBlank>
			</TableWrap>
		</Fragment>
	);
}

export default Table;
