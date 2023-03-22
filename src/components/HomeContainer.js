import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { MOST_POPULAR_VIDEOS_ENDPOINT } from '../constants/apiEndpoints';
import { getCookie } from '../utils/utilFunctions';
import VideoCard from './VideoCard';
import Shimmer from './Shimmer';

const HomeContainer = () => {
	const [videosList, setVideosList] = useState([]);
	const [hasMore, setHasMore] = useState(true);
	const [currentPageToken, setcurrentPageToken] = useState('');
	const [nextPageToken, setNextPageToken] = useState('');

	let mainDiv = useRef(null);
	const observer = useRef();
	const lastRenderedCard = useCallback(
		(node) => {
			console.log(node);
			console.log(document.querySelectorAll('mainDiv'));
			let options = {
				root: document.querySelectorAll('#mainDiv')[0],
				rootMargin: '0px',
				threshold: 1.0,
			};
			if (observer.current) observer.current.disconnect();
			observer.current = new IntersectionObserver((entries) => {
				console.log(entries);
				if (entries[0].isIntersecting && hasMore) {
					console.log(entries[0].isIntersecting);
					// setcurrentPageToken(nextPageToken);
				}
			}, options);
			if (node) {
				observer.current.observe(node);
			}
		},
		[nextPageToken, hasMore]
	);
	const getPopularVideos = async () => {
		const data = await fetch(
			MOST_POPULAR_VIDEOS_ENDPOINT +
				`maxResults=50&pageToken=${currentPageToken}`,
			{
				headers: {
					'Content-Type': 'application/json',
					Authorization: 'Bearer ' + getCookie('auth'),
				},
			}
		);
		const videos = await data.json();
		setVideosList([...videosList, ...videos.items]);
		setNextPageToken(videos.nextPageToken || '');
		if (!videos.nextPageToken) {
			setHasMore(false);
		}
	};
	useEffect(() => {
		if (hasMore) {
			getPopularVideos();
		}
	}, [currentPageToken, hasMore]);

	if (!videosList || videosList.length === 0) {
		return (
			<div>
				<Shimmer />
			</div>
		);
	}
	function showVideoCards(videosList) {
		return videosList.map((item, idx) => {
			if (idx === videosList.length - 1) {
				return (
					<Link to={'watch?v=' + item.id} key={item.id} ref={lastRenderedCard}>
						<VideoCard videoInfo={item} />
					</Link>
				);
			}
			return (
				<Link to={'watch?v=' + item.id} key={item.id}>
					<VideoCard videoInfo={item} />
				</Link>
			);
		});
	}
	return (
		<div className="p-10 flex flex-wrap">
			<div>Hello</div>
			<div id="mainDiv" >

			{showVideoCards(videosList)}
			</div>
		</div>
	);
};

export default HomeContainer;
