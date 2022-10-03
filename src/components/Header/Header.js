import { Link } from 'react-router-dom';
import './Header.css';

export const Header = () => {
	return (
		<header className="Header">
			<div className="Header-div">	
				<div className="left-side">
					<Link to="/">
						<p className="Header-title">
							<span>C</span>
							D
						</p>
					</Link>
					<Link to="/">
						<p>
							Portfolio
						</p>
					</Link>
				</div>
				<nav>
					<div className="right-side">	
						<nav>
							<ul className="Header-ul">
								<li>
									<a href="https://github.com/cristiandiazperdomo">
										Otros proyectos
									</a> 
								</li>
								<li>
									<a href="https://www.linkedin.com/in/cristian-d%C3%ADaz-390971222/">
										Linkedin
									</a>
								</li>
								<li>
									<a href="https://github.com/cristiandiazperdomo">
										GitHub
									</a>
								</li>
							</ul>
						</nav>
					</div>
					<div className="hamburger-menu-container">
						<img src={require('../../img/menu.png')} alt="hamburger-menu"/>
					</div>
				</nav>
			</div>
		</header>
	)
} 