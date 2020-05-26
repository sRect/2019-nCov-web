import React, { memo, Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { WingBlank, WhiteSpace } from 'antd-mobile';
import BootstrapTable from 'react-bootstrap-table-next';
import Scroll from 'baseUI/Scroll';
import { setTableData } from './store/actions';
import { TableWrap } from './style';

function Table(props) {
	console.log('props===>', props);
	const { type, areastaTheadData, listByCountryTheadData, tableData, setTableData } = props;
	const columns =
		type.toLowerCase() === 'areastat' ? areastaTheadData.toJS() : listByCountryTheadData.toJS();

	useEffect(() => {
		setTableData(tableData);
	}, [tableData.length]);

	return (
		<Fragment>
			<WhiteSpace />
			<TableWrap className="tableWrap">
				<Scroll>
					<WingBlank>
						{/* _id 是tableData数据中的key值，取决你的数据 */}
						<BootstrapTable
							keyField="_id"
							bordered={true}
							striped={true}
							loading={true}
							data={tableData}
							columns={[...columns]}
						/>
					</WingBlank>
				</Scroll>
			</TableWrap>
		</Fragment>
	);
}

Table.propTypes = {
	type: PropTypes.string.isRequired,
	areastaTheadData: PropTypes.object.isRequired,
	listByCountryTheadData: PropTypes.object.isRequired,
	tableData: PropTypes.array.isRequired,
	setTableData: PropTypes.func,
};

const mapStateToPops = state => {
	return {
		areastaTheadData: state.getIn(['tableReducer', 'areastaTheadData']),
		listByCountryTheadData: state.getIn(['tableReducer', 'listByCountryTheadData']),
	};
};

const mapDispatchToProps = dispatch => {
	return {
		setTableData: data => dispatch(setTableData(data)),
	};
};

export default memo(connect(mapStateToPops, mapDispatchToProps)(Table));
