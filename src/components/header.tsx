import React from 'react';
import {Link, useNavigate} from 'react-router-dom';

export default function header() {
	const navigate = useNavigate();
	const handleLogout = () => {
		navigate('/');
	};

	return (
		<div>
			<nav>
				<ul>
					<li>
						<Link to='/'>Home</Link>
					</li>
					<li>
						<Link to='/about'>About</Link>
					</li>
					<li>
						<button type='button' onClick={handleLogout}>logout</button>
					</li>
				</ul>
			</nav>
		</div>
	);
}
