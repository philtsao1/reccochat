import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { history } from './history';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Register2 from './components/Register2/Register2';
import Home from './components/Home/Home'
import './index.css';
import registerServiceWorker from './registerServiceWorker';



ReactDOM.render(
	<Provider>
		<Router history={history}>
			<React.Fragment>
				<Route exact path={'/'} component={Login} key="Login" />
				<Route path={'/register'} component={Register} key="Register" />
				<Route path={'/register2'} component={Register2} key="Register2" />
				<Route path={'/home'} component={Home} key="home" />

			</React.Fragment>
		</Router>
	</Provider>,
	document.getElementById('root'));

registerServiceWorker();
