import React, { useContext } from 'react';
import { withAxios } from 'react-axios';
import { renderRoutes } from 'react-router-config';
import { NavLink, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import TestComponent from 'components/TestComponent';
import { Context } from '../../App';
import { setUuid } from './store/actions';
import api from '../../api/request';

function App(props) {
	const {
		route: { routes },
	} = props;
	// const [uuid, getUuid] = useState('default data');
	const history = useHistory();
	const [data, dispatch] = useContext(Context);
	const { uuid } = data.toJS();

	const hanleClick = () => {
		api
			.getUuid()
			.then(({ uuid }) => {
				console.log(uuid);
				dispatch(setUuid(uuid));
			})
			.catch(error => {
				console.log(error);
			});
	};

	const testCrossDomain = () => {
		console.log('====');
	};

	return (
		<div className="App">
			<header className="App-header">
				<p>uuid: {uuid}</p>
				<button onClick={hanleClick}>get uuid</button>
				&nbsp;&nbsp;
				<button onClick={testCrossDomain}>testCrossDomain</button>
				<TestComponent />
			</header>
			<main>
				<NavLink to="/foo" activeClassName="active">
					<span>foo</span>
				</NavLink>{' '}
				|
				<NavLink to="/bar" activeClassName="active">
					<span>bar</span>
				</NavLink>{' '}
				|
				<button
					onClick={() => {
						history.push('/about');
					}}
				>
					goto about
				</button>
				&nbsp;&nbsp;
				<button
					onClick={() => {
						history.push('/modelshow');
					}}
				>
					modelshow
				</button>
			</main>
			<div>{renderRoutes(routes)}</div>
		</div>
	);
}

App.propTypes = {
	route: PropTypes.object,
};

export default withAxios(App);
