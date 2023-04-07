import { createBrowserRouter } from 'react-router-dom';
import SearchResults from '../components/SearchResults';
import LiveVideosListContainer from '../components/LiveVideosListContainer';
import AuthRoute from '../components/AuthRoute';
import HomeContainer from '../components/HomeContainer';
import WatchVideoPage from '../components/WatchVideoPage';
import Body from '../components/Body';

export const router = createBrowserRouter([
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
