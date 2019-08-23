import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import '../cssNonRetina/Navbar.css'

const Navbar = (props) => {

	const renderLinks = () => {
		const { type } = props;
		if (type === 'main') {
			return (
				<div className="NavContainer">
					<div>
						<span ><Link className="NavItem2" to="/users/collection">Collections</Link></span>
					</div>
				</div>
			);
		} else if (type === 'results') {
			return (
				<div>
					<div>
					</div>
				</div>
			);
		} else if (type === 'user_page') {

		} else if (type === 'details_page') {
			return (
				<div>
				</div>
			);
		}
	};

	return (
		<nav className="NavContainer">
			<div id="navbar" className="navbar-collapse collapse">
				{renderLinks()}
			</div>
		</nav>
	);
}

export default withRouter(Navbar);