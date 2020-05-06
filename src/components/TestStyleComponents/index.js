import React, { memo, Fragment } from 'react';
import { Wrapper, Title } from './style';

const TestStyleComponents = () => {
	const msgColor = 'palevioletred';
	const msgText = 'Hello World, this is my first styled component!';

	return (
		<Fragment>
			<h3>TestStyleComponents...</h3>
			<Wrapper>
				<Title msgColor={msgColor} msgText={msgText}>
					{msgText}
				</Title>
			</Wrapper>
		</Fragment>
	);
};

export default memo(TestStyleComponents);
