import React, { Fragment, memo } from 'react';
import TestStyleComponents from 'components/TestStyleComponents';

const About = () => {
	return (
		<Fragment>
			<h1>about page</h1>
			<TestStyleComponents />
		</Fragment>
	);
};

export default memo(About);
