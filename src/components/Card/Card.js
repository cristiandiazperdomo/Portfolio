import React from 'react';
import './Card.css';

export const Card = ({ project, url, toWit, gitHub, iden }) => {

	const goToGitHub = iden => {
		const linkToGitHub = document.querySelectorAll('.github-link');
		let link = linkToGitHub[iden];
		
		if (link.style.display === 'none' || Boolean(link.style.display) === false) {
			link.style.display = 'block';
		} else {
			setTimeout(() => {
				link.style.display = 'none';
			}, 3000)
		}
	}

	return (
		<div className="card-container">
			<div className="card" onMouseOver={() => goToGitHub(iden)} onMouseOut={() => goToGitHub(iden)}>
				<header className="card-header">
					<img src={url} alt={project} className="card-header-img"/>
				</header>	
				<article className="card-content">
					<h4>{project}</h4>
				</article>
				<article>
				</article>
				<footer className="card-footer">
					<p>{toWit}</p>
				</footer>	
			</div>
			<div className="github-link">
				<a href={gitHub} className="github-repository" target="_blank" rel="noopener noreferrer">Go to GitHub</a>
			</div>		
		</div>
	)
} 