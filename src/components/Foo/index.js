import React, { memo } from 'react';
import { connect } from 'react-redux';
import { increase, decrease, changeMsg } from './store/actions';
import PropTypes from 'prop-types';

const Foo = props => {
	const { count, msg, handleIncrease, handleDecrease, handleChangeMsg } = props;
	return (
		<div style={{ padding: '15px', border: '1px solid #ccc' }}>
			<h3>Foo...</h3>
			<p>
				count: {count} || msg: {msg}
			</p>
			<button onClick={handleIncrease}>increase</button>&nbsp;&nbsp;
			<button onClick={handleDecrease}>decrease</button>&nbsp;&nbsp;
			<button onClick={() => handleChangeMsg('change!!!')}>change msg</button>
		</div>
	);
};

Foo.propTypes = {
	count: PropTypes.number.isRequired,
	msg: PropTypes.string.isRequired,
	handleIncrease: PropTypes.func,
	handleDecrease: PropTypes.func,
	handleChangeMsg: PropTypes.func,
};

const mapStateToProps = state => {
	return {
		count: state.getIn(['fooReducer', 'count']),
		msg: state.get('fooReducer').get('testMsg'),
	};
};

const mapDispatchToProps = dispatch => ({
	handleIncrease() {
		dispatch(increase());
	},
	handleDecrease() {
		dispatch(decrease());
	},
	handleChangeMsg(newMsg) {
		dispatch(changeMsg(newMsg));
	},
});

export default memo(connect(mapStateToProps, mapDispatchToProps)(Foo));
