import { Link } from 'react-router-dom';
import { Card } from '../components/Card/Card';
import '../styles/components/Home.css';

export const Home = () => {
	const projectsCards = [{
		url: require('../img/weather.png'),
		toWit: 'Conoce el clima que habra en horas o dias',
		gitHub: "https://github.com/cristiandiazperdomo/Weather-App/tree/main/src/components",
		iden: 0,
	}, {
		url: require('../img/weather.png'),
		toWit: 'Conoce el clima que habra en horas o dias',
		gitHub: "https://github.com/cristiandiazperdomo/Weather-App/tree/main/src/components",
		iden: 1,
	}];

	return (
		<>
			<section className="presentation">
				<div className="presentation-info">
					<header className="presentation-header">
						<img src={require('../img/profile.jpg')} alt="mi photo" />
					</header>
					<article className="presentation-about-me">
						<p className="hello">Hola, soy</p>
						<h1 className="presentation-title">Cristian Díaz</h1>
						<p className="rol">Front-End Developer</p>
					</article>
					<footer>	
						<img src={require('../img/flecha.png')} alt="arrow"  className="presentation-arrow"/>
					</footer>
				</div>
				<div className="whoiam">
					<header className="header-whoiam">
						<h2>Me, Myself and I</h2>
					</header>
					<article className="article-whoiam">
						<p className="whoiam-studies">
							I have knowledge in HTML, CSS and JS.
							I am improving my Front-End skills, building Projects with React and learning English to go to level B2.
							I like to play the guitar, exercise and read books.
						</p>
						<p className="whoiam-studies">
							My purposes this year are to learn more about the backend and the database. 
							Although I am focused on Front-End, I created some small Back-ends to diferent projects.
						</p>
					</article>
					<footer>
						<Link to={require('../img/cv.pdf')} target="_blank" rel='noopener noreferrer' className="dowload-cv" download>
							<img src="https://cdn-icons-png.flaticon.com/512/724/724933.png" alt="dowload" className="icon-dowload"/>
							Download Resume
						</Link>
					</footer>
				</div>
			</section>
			<section>
				<h2 className="projects-title">My Portfolio</h2>
				<p className="projects-description">A small selection of projects</p>
				<div className="projects">
					{projectsCards.map(project => 
						<Card 
							url={project.url} 
							toWit={project.toWit}
							gitHub={project.gitHub} 
							iden={project.iden}
						/>)
					}
				</div>
			</section>
		</>
	)
}