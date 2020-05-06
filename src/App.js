import React, { Suspense, createContext } from 'react';
import {
	BrowserRouter,
	// Route,
	Switch,
	Redirect,
} from 'react-router-dom';
import { Provider } from 'react-redux';
// renderRoutes 读取路由配置转化为 Route 标签
// renderRoutes 这个方法只渲染一层路由
import { renderRoutes } from 'react-router-config';
// import { AxiosProvider } from 'react-axios';
// import { withAxios } from 'react-axios';
import routes from './routes';
import { GlobaleStyle } from './style';
import store from 'store';
import Loading from '@/baseUI/Loading';

export const Context = createContext(null);

function App() {
	return (
		<Provider store={store}>
			{/* <AxiosProvider instance={axiosInstance}> */}
			<Suspense fallback={<Loading />}>
				<BrowserRouter>
					<Switch>
						{/* {
              routes.map(route => {
                const { path, exact, component } = route;
                return <Route key={path} path={path} exact={exact} component={component} />
              })
            } */}
						{renderRoutes(routes)}
						<Redirect from="*" to="/"></Redirect>
					</Switch>
				</BrowserRouter>
			</Suspense>
			<GlobaleStyle />
			{/* </AxiosProvider> */}
		</Provider>
	);
}

export default App;
