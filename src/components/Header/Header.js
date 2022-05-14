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
				<p>
					Portfolio
				</p>
			</Link>
			<nav>
				<div className="hamburger-menu-container">
					<img src={require('../../img/menu.png')} alt="hamburger-menu" />
				</div>
			</nav>
		</header>
	)
} 