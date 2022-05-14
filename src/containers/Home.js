import '../styles/components/Home.css'

export const Home = () => {
	return (
		<section className="presentation">
			<img src={require("../img/polygon-scatter-haikei.png")} alt="background" className="background-main" />
			<div className="presentation-info">
				<h1 className="presentation-title">Cristian Díaz</h1>
			</div>
		</section>
	)
}