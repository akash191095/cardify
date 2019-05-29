import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './components/App';
import reducers from './reducers';

let store = createStore(reducers);

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<Route exact path="/" component={App} />
		</Router>
	</Provider>,
	document.getElementById('root')
);
