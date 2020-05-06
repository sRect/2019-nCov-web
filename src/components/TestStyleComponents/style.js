import styled from 'styled-components';

// https://github.com/styled-components/styled-components#example
// vscode 插件  https://github.com/styled-components/vscode-styled-components

// Create a <Title> react component that renders an <h1> which is
// centered, palevioletred and sized at 1.5em

// https://styled-components.com/docs/faqs#when-to-use-attrs
export const Title = styled.h1.attrs(props => ({
	title: `${props.msgText}`,
}))`
	font-size: 1.5em;
	text-align: center;
	color: ${props => props.msgColor};
`;

// Create a <Wrapper> react component that renders a <section> with
// some padding and a papayawhip background
export const Wrapper = styled.section`
	padding: 4em;
	background: papayawhip;
`;
