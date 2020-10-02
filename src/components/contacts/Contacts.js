import React from "react";
import Contact from "../../components/contacts/Contact";

import { Consumer } from "../../context";

class Contacts extends React.Component {
	render() {
		return (
			<Consumer>
				{(value) => {
					const { contacts } = value;
					return (
						<div>
						<h1 className="display-4">
							<span className="text-danger">Contact </span>List
						</h1>
							{contacts.map((contact) => (
								<Contact key={contact.id} contact={contact} />
							))}
						</div>
					);
				}}
			</Consumer>
		);
	}
}

export default Contacts;
