import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from '../components/Layout/Layout';
import { Home } from '../containers/Home';

export const App = () => {
	return (
		<Router>
			<Layout>
				<Routes>
					<Route exact path="/" element={<Home />} />
				</Routes>
			</Layout>
		</Router>
	)
}