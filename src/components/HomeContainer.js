import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MOST_POPULAR_VIDEOS_ENDPOINT } from '../constants/apiEndpoints';
import { getCookie } from '../utils/utilFunctions';
import VideoCard from './VideoCard';
import Shimmer from './Shimmer';

const HomeContainer = () => {
	const [videosList, setVideosList] = useState([]);
	const getPopularVideos = async () => {
		const data = await fetch(MOST_POPULAR_VIDEOS_ENDPOINT, {
			headers: {
				'Content-Type': 'application/json',
				Authorization: 'Bearer ' + getCookie('auth'),
			},
		});
		const videos = await data.json();
		setVideosList(videos.items);
	};
	useEffect(() => {
		getPopularVideos();
	}, []);
	if (!videosList || videosList.length === 0) {
		return <div><Shimmer /></div>;
	}
	return (
		<div className="p-10 flex flex-wrap">
			{videosList.map((item) => (
				<Link to={'watch?v=' + item.id} key={item.id}>
					<VideoCard videoInfo={item} />
				</Link>
			))}
		</div>
	);
};

export default HomeContainer;
