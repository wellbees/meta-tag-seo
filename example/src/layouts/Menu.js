import React from 'react'
import { Outlet, Link } from 'react-router-dom'

const Menu = () => {
	return (
		<div>
			<nav>
				<ul>
					<li>
						<Link to='/'>Homepage</Link>
					</li>
					<li>
						<Link to='/page-one'>Page One</Link>
					</li>
					<li>
						<Link to='/page-two'>Page Two</Link>
					</li>
				</ul>
			</nav>
			<hr />
			<Outlet />
		</div>
	)
}

export default Menu
