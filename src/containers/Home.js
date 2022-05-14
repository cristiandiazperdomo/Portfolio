import '../styles/components/Home.css'

export const Home = () => {
	return (
		<section className="presentation">
			<div className="presentation-info">
				<header className="presentation-header">
					<img src={require('../img/profile.jpg')} alt="mi photo" />
				</header>
				<article className="presentation-about-me">
					<p className="hello">Hola, soy</p>
					<h1 className="presentation-title">Cristian Díaz</h1>
				</article>
			</div>
		</section>
	)
}