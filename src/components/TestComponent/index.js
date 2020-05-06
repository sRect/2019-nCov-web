import React, { Fragment, memo } from 'react';
import { Pagination } from 'antd';

function TestComponent() {
	return (
		<Fragment>
			<hr />
			<Pagination defaultCurrent={1} total={50} />
		</Fragment>
	);
}

export default memo(TestComponent);
