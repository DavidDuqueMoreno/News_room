import React from 'react';
import '../index.css';

import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header';
import Main from './Main';

const App = () => (
	<BrowserRouter>
		<Header />
		<div className="margin">
			<Route exact path="/" component={Main} />
			<Route exact path="/tecnologia" component={Main} />
			<Route exact path="/politica" component={Main} />
			<Route exact path="/deportes" component={Main} />
			<Route exact path="/internacionales" component={Main} />
			<Route exact path="/diseno" component={Main} />
			<Route path="/buscar" component={Main} />
		</div>
	</BrowserRouter>
);

export default App;
