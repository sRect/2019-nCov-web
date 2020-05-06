import React, { useState } from 'react';
import { TabBar, Toast } from 'antd-mobile';
import { withAxios } from 'react-axios';
import { renderRoutes } from 'react-router-config';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import api from 'api/request';
import './home.less';

function App(props) {
	const {
		route: { routes },
	} = props;
	const { getAreaStat, getListByCountryTypeService2true } = api;
	const history = useHistory();
	const [selectedTab, setSelectedTab] = useState('Areastat');

	const getData = type => {
		if (type === 'Areastat') {
			getAreaStat()
				.then(data => {
					console.log(data);
					history.push('/areastat');
				})
				.catch(err => {
					console.log(err);
					Toast.fail('areastat fetch error');
				});
		} else {
			getListByCountryTypeService2true()
				.then(data => {
					console.log(data);
					history.push('/listByCountryTypeService2true');
				})
				.catch(err => {
					console.log(err);
					Toast.fail('listByCountryTypeService2true fetch error');
				});
		}
	};

	return (
		<div className="App">
			<TabBar
				unselectedTintColor="#949494"
				tintColor="#33A3F4"
				barTintColor="white"
				tabBarPosition="top"
			>
				<TabBar.Item
					title="国内疫情"
					key="Areastat"
					icon={
						<div
							style={{
								width: '0',
								height: '0',
								background: 'none',
							}}
						/>
					}
					selectedIcon={
						<div
							style={{
								width: '0',
								height: '0',
								background: 'none',
							}}
						/>
					}
					selected={selectedTab === 'Areastat'}
					onPress={() => {
						setSelectedTab('Areastat');
						getData('Areastat');
					}}
					data-seed="logId"
				>
					{''}
				</TabBar.Item>
				<TabBar.Item
					title="全球疫情"
					key="ListByCountryTypeService2true"
					icon={
						<div
							style={{
								width: '0',
								height: '0',
								background: 'none',
							}}
						/>
					}
					selectedIcon={
						<div
							style={{
								width: '0',
								height: '0',
								background: 'none',
							}}
						/>
					}
					selected={selectedTab === 'ListByCountryTypeService2true'}
					onPress={() => {
						setSelectedTab('ListByCountryTypeService2true');
						getData('ListByCountryTypeService2true');
					}}
					data-seed="logId1"
				>
					{''}
				</TabBar.Item>
			</TabBar>
			<div>{renderRoutes(routes)}</div>
		</div>
	);
}

App.propTypes = {
	route: PropTypes.object,
};

export default withAxios(App);
