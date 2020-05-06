import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducer';

// https://github.com/zalmoxisus/redux-devtools-extension
const composeEnhancers =
	typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
		? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
				// Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
				// eslint-disable-next-line
		  })
		: compose;

const enhancer = composeEnhancers(
	applyMiddleware(thunk)
	// other store enhancers if any
);

const store = createStore(rootReducer, enhancer);
export default store;
