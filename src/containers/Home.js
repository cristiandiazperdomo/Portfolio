import { Link } from 'react-router-dom';
import { Card } from '../components/Card/Card';
import '../styles/components/Home.css';

export const Home = () => {
	const projectsCards = [{
		url: require('../img/weather.png'),
		toWit: 'Know the weather that speaks in hours or days',
		gitHub: "https://github.com/cristiandiazperdomo/Weather-App",
		iden: 0,
	}, {
		url: require('../img/e-commerce.png'),
		toWit: 'Your favourite e-commerce',
		gitHub: "https://github.com/cristiandiazperdomo/E-commerce",
		iden: 1,
	}, {
		url: require('../img/game.jpg'),
		toWit: 'Replay the classic game of Rocks, paper and scissors',
		gitHub: "https://github.com/cristiandiazperdomo/Rock-Paper-and-Scissors",
		iden: 2,
	}, {
		url: require('../img/contact.jpg'),
		toWit: "Don't lose your contacts",
		gitHub: "https://github.com/cristiandiazperdomo/Contact-List",
		iden: 3,
	}, {
		url: require('../img/contablito.jpg'),
		toWit: 'Manage your business finances',
		gitHub: "https://github.com/cristiandiazperdomo/Contablito",
		iden: 4,
	}];

	return (
		<>
			<section className="presentation">
				<div className="presentation-info">
					<header className="presentation-header">
						<img src={require('../img/profile.jpg')} alt="mainprofile"/>
					</header>
					<article className="presentation-about-me">
						<p className="hello">Hola, soy</p>
						<h1 className="presentation-title">Cristian Díaz</h1>
						<p className="rol">Front-End Developer</p>
					</article>
					<footer>	
						<img src={require('../img/flecha-animated.gif')} alt="arrow"  className="presentation-arrow"/>
					</footer>
				</div>
				<div className="whoiam">
					<div className="whoiam-two">
						<article className="article-whoiam">
							<header className="header-whoiam">
								<h2>Me, Myself and I</h2>
							</header>
								<p className="whoiam-studies">
									I have knowledge in HTML, CSS and JS.
									I am improving my Front-End skills, building Projects with React and learning English to go to level B2.
									I like to play the guitar, exercise and read books.
								</p>
								<p className="whoiam-studies">
									My purposes this year are to learn more about the backend and the database. 
									Although I am focused on Front-End, I created some small Back-ends to diferent projects.
								</p>
								<article>
									<Link to={require('../img/cv.pdf')} target="_blank" rel='noopener noreferrer' className="dowload-cv" download>
										<img src="https://cdn-icons-png.flaticon.com/512/724/724933.png" alt="dowload-img" className="icon-dowload"/>
										Download Resume
									</Link>
								</article>
							</article>
						<div className="technologies-container">
							<div className="technologies">
								<img src={require('../img/javascript.png')} alt="html, css and js"/>
								<img src={require('../img/css.png')} alt="html, css and js"/>
								<img src={require('../img/html.png')} alt="html, css and js"/>
								<img src={require('../img/bootstrap.png')} alt="html, css and js"/>
								<img src={require('../img/react.png')} alt="html, css and js"/>
								<img src={require('../img/git.png')} alt="html, css and js"/>
								<img src={require('../img/github.png')} alt="html, css and js"/>
							</div>
							<div className="whoiam-arrow-container">
								<img src={require('../img/flecha-animated.gif')} alt="arrow" className="presentation-arrow"/>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="section-projects">
				<h2 className="projects-title">My Portfolio</h2>
				<p className="projects-description">A small selection of projects</p>
				<div className="projects">
					{projectsCards.map(project => 
						<Card 
							url={project.url} 
							toWit={project.toWit}
							gitHub={project.gitHub} 
							iden={project.iden}
							key={project.iden}
						/>)
					}
				</div>
			</section>
		</>
	)
}