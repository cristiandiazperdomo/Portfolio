import { Link } from 'react-router-dom'
import './Header.css';

export const Header = () => {
	return (
		<header className="Header">
			<Link to="/">
				<p className="Header-title">
					<span>C</span>
					D
				</p>
			</Link>
			<nav>
				<div className="hamburger-menu-container">
					<img src="https://img.icons8.com/material-rounded/344/menu--v1.png" alt="hamburger-menu" />
				</div>
			</nav>
		</header>
	)
} 