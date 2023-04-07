import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import Header from './components/Header';
import store from './utils/store';
import { router } from './utils/routerConfig';


function App() {
	return (
		<Provider className="min-h-screen" store={store}>
			<Header />
			<RouterProvider router={router} />
		</Provider>
	);
}

export default App;
