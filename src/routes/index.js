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
const Areastat = lazy(() => import(/* webpackChunkName: "areastat" */ 'components/Areastat'));
const ListByCountryTypeService2true = lazy(() =>
	import(
		/* webpackChunkName: "listByCountryTypeService2true" */ 'components/ListByCountryTypeService2true'
	)
);

const routes = [
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
				render: () => <Redirect to={'/areastat'} />,
			},
			{
				path: '/areastat',
				exact: true,
				component: Areastat,
			},
			{
				path: '/listByCountryTypeService2true',
				exact: true,
				component: ListByCountryTypeService2true,
			},
		],
	},
];

export default routes;
