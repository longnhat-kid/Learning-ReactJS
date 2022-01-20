import Header from './Header'
import ProductContainer from '../containers/ProductContainer'
import CartContainer from '../containers/CartContainer'

function App() {
	return (
		<div className="App">
			<div className="container">
				<Header/>
				<div className="row">
					<ProductContainer/>
					<CartContainer/>
				</div>
			</div>
		</div>
	);
}

export default App;
