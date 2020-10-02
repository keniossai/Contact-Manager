import React from "react";
import PropTypes from "prop-types";
import { Consumer } from "../../context";
import axios from "axios";
import { Link } from 'react-router-dom'

class Contact extends React.Component {
	state = {
		showContact: false,
	};
	static propTypes = {
		contact: PropTypes.object.isRequired,
	};

	onshowClick = (event) => {
		this.setState({
			showContact: !this.state.showContact,
		});
	};

	onDeleteClick = async (id, dispatch) => {
		try {
			await axios
			.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
			dispatch({ type: "DELETE_CONTACT", payload: id })
		}catch(e){
			dispatch({ type: "DELETE_CONTACT", payload: id })
		}
	};

	render() {
		const { name, email, phone, id } = this.props.contact;
		const { showContact } = this.state;
		return (
			<Consumer>
				{(value) => {
					const { dispatch } = value;
					return (
						<div>
							<div className='card card-body mb-3'>
								<h6>
									{name}
									<i
										onClick={this.onshowClick}
										className='fas fa-sort-down'
										style={{ cursor: "pointer" }}></i>
									<i
										className='fas fa-times'
										style={{ color: "red", cursor: "pointer", float: "right" }}
										onClick={this.onDeleteClick.bind(this, id, dispatch)}></i>
										<Link to={`contact/edit/${id}`}>
											<i 
												style={{cursor: 'pointer', float: "right", color: "black", marginRight: "1rem"}}
											   className="fas fa-pencil-alt"
											   ></i>
										</Link>
								</h6>
								{showContact ? (
									<ul className='list-group'>
										<li className='list-group-item'>Email: {email}</li>
										<li className='list-group-item'>Phone: {phone}</li>
									</ul>
								) : null}
							</div>
						</div>
					);
				}}
			</Consumer>
		);
	}
}

export default Contact;
