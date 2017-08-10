import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { App, Step1, Step2, Result } from 'containers';

//Redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from 'reducers';
import thunk from 'redux-thunk';

const store = createStore(reducers, applyMiddleware(thunk));

const rootElement = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
	  <Route path="/" component={App}>
	    <IndexRoute component={Step1}/>
		<Route path="step1" component={Step1}/>
		<Route path="step2" component={Step2}/>
		<Route path="result" component={Result}/>						
	  </Route>
	</Router>
  </Provider>, rootElement
);