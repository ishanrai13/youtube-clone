import React from 'react';

const Comment = ({ username, avatar_url, comment }) => {
	return (
		<div className="w-full bg-gray-100 p-2 mb-1">
			<div className="flex items-center mb-1">
				<img alt="user avatar" src={avatar_url} className="w-8" />
				<span>{username}</span>
			</div>
			<div>{comment}</div>
		</div>
	);
};

const CommentsList = ({ commentsList }) => {
	return commentsList.map((comment, idx) => (
		<div className="border-l border-l-black" key={idx}>
			<Comment
				avatar_url={comment.avatar_url}
				username={comment.username}
				comment={comment.comment}
			/>
			<div className="ml-8">
				<CommentsList commentsList={comment.reply} />
			</div>
		</div>
	));
};

const CommentContainer = ({ commentsList }) => {
	return (
		<div className="w-full">
			<CommentsList commentsList={commentsList} />
		</div>
	);
};

export default CommentContainer;
