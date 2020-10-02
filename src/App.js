import React from "react";
import "./App.css";
import Contacts from "./components/contacts/Contacts";
import Header from "./components/layouts/Header";
import { Provider } from "./context";
import AddContact from "./components/contacts/AddContact";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import About from './pages/About'
import NotFound from "./pages/NotFound";
import EditContact from "./components/contacts/EditContact";

function App() {
	return (
		<Provider>
			<Router>
				<div className='App'>
					<Header branding='Contact Manager' />
					<div className='container'>
						<Switch>
							<Route exact path="/" component={Contacts} />
							<Route path="/contact/add" component={AddContact} />
							<Route path="/About" component={About} />
							<Route path="/contact/edit/:id" component={EditContact} />
							<Route component={NotFound} />
						</Switch>
					</div>
				</div>
			</Router>
		</Provider>
	);
}

export default App;
