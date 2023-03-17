import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { closeSideBar } from '../utils/appSlice';
import dummyComments from '../utils/dummComments.json';
import CommentContainer from './CommentContainer';
import LiveChat from './LiveChat';

const WatchVideoPage = () => {
	let [searchParams] = useSearchParams();
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(closeSideBar());
	}, []);

	return (
		<div className="w-full">
			<div className="w-full flex">
				<iframe
					className="w-[70%] h-[500px] m-6"
					src={
						'https://www.youtube.com/embed/' +
						searchParams.get('v') +
						'?autoplay=1'
					}
					title="YouTube video player"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					allowFullScreen
				></iframe>
				{/* <iframe
					width="560"
					height="315"
					src="https://www.youtube.com/embed/Nq2wYlWFucg"
					title="YouTube video player"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					allowfullscreen
				></iframe> */}
				<div className="mt-6 w-[30%] h-[500px]">
					<LiveChat />
				</div>
			</div>
			<div className="m-6">
				<CommentContainer commentsList={dummyComments.comments} />
			</div>
		</div>
	);
};

export default WatchVideoPage;
