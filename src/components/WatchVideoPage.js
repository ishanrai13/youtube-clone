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
	}, [dispatch]);

	return (
		<div className="w-full">
			<div className="w-full flex flex-wrap justify-center">
				<iframe
					className="w-full sm:w-[70%] h-[500px] m-6"
					src={
						'https://www.youtube.com/embed/' +
						searchParams.get('v') +
						'?autoplay=1'
					}
					title="YouTube video player"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					allowFullScreen
				></iframe>
				<div className=" w-full mt-6 sm:w-[70%] h-[500px] lg:w-[25%]">
					<LiveChat />
				</div>
			</div>
			<div className="mt-12 lg:m-6">
				<CommentContainer commentsList={dummyComments.comments} />
			</div>
		</div>
	);
};

export default WatchVideoPage;
