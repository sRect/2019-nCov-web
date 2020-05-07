import React, { useState } from 'react';
import { TabBar } from 'antd-mobile';
import { withAxios } from 'react-axios';
import { renderRoutes } from 'react-router-config';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import './home.less';

function App(props) {
	const {
		route: { routes },
	} = props;

	const history = useHistory();
	const [selectedTab, setSelectedTab] = useState('Areastat');

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
						history.push('/areastat');
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
						history.push('/listByCountryTypeService2true');
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
