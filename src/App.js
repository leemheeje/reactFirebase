import React from 'react';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import {
	Header,
	Footer,
	Main,
} from './pages';
import './assets/scss/common.scss';
function App() {
	return (
		<div className="viewport">
			<Header />
			<div style={{
				paddingTop:20,
				paddingBottom: 20
			}}>
				<BrowserRouter>
					<Switch>
						<Route exact path="/" component={Main} />
					</Switch>
				</BrowserRouter>
			</div>
			<Footer />
		</div>
	);
}
export default App;
