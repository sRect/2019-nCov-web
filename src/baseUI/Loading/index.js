import * as React from 'react';
import { Toast } from 'antd-mobile';

class Loading extends React.Component {
	render() {
		return <React.Fragment />;
	}
	componentDidMount() {
		Toast.loading('正在加载...', 1);
	}
}

export default Loading;
