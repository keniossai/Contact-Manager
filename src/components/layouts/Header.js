import React from "react";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom'

const Header = (props) => {
	const { branding } = props;
	return (
		<nav className='navbar navbar-expand-lg navbar-dark bg-success mb-3 py-0'>
			<div className='container'>
				<Link className='navbar-brand'>{branding}</Link>
				<ul className='navbar-nav ml-auto'>
					<li className='nav-item'>
						<Link to='/' className='nav-link'>
							<i className="fas fa-home"></i> Home
						</Link>
					</li>
					<li className='nav-item'>
						<Link to='/contact/add' className='nav-link'>
						<i className="fas fa-plus"></i> Add
						</Link>
					</li>
					<li className='nav-item'>
						<Link to='/about' className='nav-link'>
						<i className="fas fa-question"></i> About
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};

Header.propTypes = {
	branding: PropTypes.string.isRequired,
};

export default Header;
