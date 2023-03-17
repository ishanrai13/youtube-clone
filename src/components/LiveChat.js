import React, { useCallback, useEffect, useState } from 'react';
import _ from 'lodash';

const ChatMessage = ({ username, avatar_url, message }) => {
	return (
		<div className="p-2">
			<div className="flex items-center font-bold">
				<img src={avatar_url} alt="user avatar" className="w-8 p-1" />
				<span>{username}</span>
			</div>
			<div>{message}</div>
		</div>
	);
};

const DisplayChat = ({ chatContent }) => {
	return (
		<div className="bg-gray-100 flex flex-col-reverse overflow-y-scroll h-full">
			{chatContent.map((item, idx) => (
				<ChatMessage
					username={item.username}
					avatar_url={item.avatar_url}
					message={item.message}
					key={idx}
				/>
			))}
		</div>
	);
};

const LiveChat = () => {
	const [chatContent, setChatContent] = useState([]);

	const [messageText, setMessageText] = useState('');

	const addNewMessage = useCallback((message) => {
		setChatContent((prevState) => {
			const tempChatContent = _.cloneDeep(prevState);
			tempChatContent.unshift({
				username: 'ishan_rai',
				avatar_url:
					'https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg',
				message: message,
			});
			if (tempChatContent?.length > 20) {
				tempChatContent.pop();
			}
			return tempChatContent;
		});
	}, []);

	function makeid(length) {
		let result = '';
		const characters =
			'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
		const charactersLength = characters.length;
		let counter = 0;
		while (counter < length) {
			result += characters.charAt(Math.floor(Math.random() * charactersLength));
			counter += 1;
		}
		return result;
	}

	useEffect(() => {
		const interval = setInterval(() => {
			addNewMessage(makeid(10));
		}, 2000);
		return () => clearInterval(interval);
	}, []);

	return (
		<div className="w-full h-full">
			<DisplayChat chatContent={chatContent} />
			<div>
				<form
					className="flex mt-2"
					onSubmit={(e) => {
						e.preventDefault();
						addNewMessage(messageText);
						setMessageText('');
					}}
				>
					<input
						className="w-full border border-black focus:outline-none px-3"
						value={messageText}
						onChange={(e) => {
							setMessageText(e.target.value);
						}}
					/>
					<button className="border border-black mx-1 p-1">send</button>
				</form>
			</div>
		</div>
	);
};

export default LiveChat;
