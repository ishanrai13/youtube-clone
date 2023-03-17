import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Body from './components/Body';
import Header from './components/Header';
import HomeContainer from './components/HomeContainer';
import WatchVideoPage from './components/WatchVideoPage';
import store from './utils/store';
import SearchResults from './components/SearchResults';
import LiveVideosListContainer from './components/LiveVideosListContainer';
import AuthRoute from './components/AuthRoute';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Body />,
		children: [
			{
				path: '/',
				element: (
					<AuthRoute>
						<HomeContainer />
					</AuthRoute>
				),
			},
			{
				path: 'live',
				element: (
					<AuthRoute>
						<LiveVideosListContainer />
					</AuthRoute>
				),
			},
			{
				path: 'watch',
				element: (
					<AuthRoute>
						<WatchVideoPage />
					</AuthRoute>
				),
			},
			{
				path: 'results',
				element: (
					<AuthRoute>
						<SearchResults />
					</AuthRoute>
				),
			},
		],
	},
]);

function App() {
	return (
		<Provider className="min-h-screen" store={store}>
			<Header />
			<RouterProvider router={router} />
		</Provider>
	);
}

export default App;
