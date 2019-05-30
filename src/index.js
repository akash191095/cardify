import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './components/App';
import AddCards from './components/AddCards';
import reducers from './reducers';

let store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<Route exact path="/" component={App} />
			<Route path="/add" component={AddCards} />
		</Router>
	</Provider>,
	document.getElementById('root')
);
