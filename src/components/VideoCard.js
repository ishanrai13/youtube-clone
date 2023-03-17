import React from 'react';

const VideoCard = ({ videoInfo }) => {
	const { snippet, statistics } = videoInfo;
	return (
		<div className="flex flex-col flex-wrap w-72 shadow-md rounded-md p-5 cursor-pointer hover:border border-gray-400 m-2">
			<img alt={snippet.title} src={snippet.thumbnails.medium.url} />
			<div className="font-bold mt-2">{snippet.title}</div>
			<div className="mt-1">{snippet.channelTitle}</div>
			<div className="mt-1">{statistics.viewCount}</div>
		</div>
	);
};

export default VideoCard;
