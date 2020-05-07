import { fromJS } from 'immutable';

export const tableData = fromJS({
	areastaTheadData: [
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
	],
	listByCountryTheadData: [
		{
			dataField: 'provinceName',
			text: '地区',
		},
		{
			dataField: 'deadRate',
			text: '病死率',
		},
		{
			dataField: 'deadRateRank',
			text: '排序',
		},
		{
			dataField: 'deadCount',
			text: '累计死亡',
		},
		{
			dataField: 'deadCountRank',
			text: '排序',
		},
		{
			dataField: 'confirmedCount',
			text: '累计确诊',
		},
		{
			dataField: 'confirmedCountRank',
			text: '排序',
		},
	],
	tbodyData: [], // 表格数据
});
