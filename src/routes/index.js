import React, {
	// Suspense,
	// Fragment,
	lazy,
} from 'react';
import {
	// BrowserRouter,
	// // Route,
	// Switch,
	Redirect,
} from 'react-router-dom';
// renderRoutes 读取路由配置转化为 Route 标签
// renderRoutes 这个方法只渲染一层路由
// import { renderRoutes } from 'react-router-config';

const Home = lazy(() => import(/* webpackChunkName: "home" */ 'pages/Home')); // 组件懒加载
const About = lazy(() => import(/* webpackChunkName: "about" */ 'pages/About'));
const Foo = lazy(() => import(/* webpackChunkName: "foo" */ 'components/Foo'));
const Bar = lazy(() => import(/* webpackChunkName: "bar" */ 'components/Bar'));
const ModelShow = lazy(() => import(/* webpackChunkName: "modelshow" */ 'pages/ModelShow'));

const routes = [
	{
		path: '/modelshow',
		exact: true,
		component: ModelShow,
	},
	{
		path: '/about',
		exact: true,
		component: About,
	},
	{
		path: '/',
		component: Home,
		routes: [
			{
				path: '/',
				exact: true,
				render: () => <Redirect to={'/foo'} />,
			},
			{
				path: '/foo',
				exact: true,
				component: Foo,
			},
			{
				path: '/bar',
				exact: true,
				component: Bar,
			},
		],
	},
];

export default routes;
