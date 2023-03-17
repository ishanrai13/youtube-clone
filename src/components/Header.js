import React, { useEffect, useState } from 'react';
import ytLogo from '../assets/yt-logo.png';
import hamburger from '../assets/hamburger.png';
import userLogo from '../assets/user-logo.jpeg';
import {
	oauth2GoogleEndpoint,
	SEARCH_SUGGESTIONS_ENDPOINT,
} from '../constants/apiEndpoints';
import SearchTextDropDown from './SearchTextDropDown';
import { useDispatch, useSelector } from 'react-redux';
import { toggleSideBar } from '../utils/appSlice';
import { setSearchCache } from '../utils/searchCacheSlice';
import { updateLoggedInToken } from '../utils/utilFunctions';

const Header = () => {
	const [searchText, setSearchText] = useState('');
	const [searchResults, setSearchResults] = useState([]);

	const searchCache = useSelector((store) => store.searchCache);

	const dispatch = useDispatch();

	useEffect(() => {
		const getSuggestions = async (searchPrefix) => {
			const data = await fetch(SEARCH_SUGGESTIONS_ENDPOINT + searchPrefix);
			const results = await data.json();
			setSearchResults(results[1]);
			dispatch(
				setSearchCache({
					[searchPrefix]: results[1],
				})
			);
		};
		if (!searchText || searchText.length === 0) {
			setSearchResults([]);
			return;
		}
		if (searchCache[searchText]) {
			setSearchResults(searchCache[searchText]);
		} else {
			const timer = setTimeout(() => {
				getSuggestions(searchText);
			}, 300);
			return () => clearTimeout(timer);
		}
	}, [searchText, searchCache, dispatch]);

	useEffect(() => {
		updateLoggedInToken();
	}, []);

	const handleLogin = () => {
		window.location.href = oauth2GoogleEndpoint;
	};
	return (
		<div className="flex py-4 justify-between px-5 shadow-md h-[8vh]">
			<div className="flex items-center">
				<img
					className="h-4 mr-4 cursor-pointer"
					src={hamburger}
					alt="hamburger logo"
					onClick={() => {
						dispatch(toggleSideBar());
					}}
				/>
				<img
					className="w-24 cursor-pointer"
					src={ytLogo}
					alt="yputube logo"
					onClick={() => {
						window.location.href = '/';
					}}
				/>
			</div>
			<div className="relative flex-[1] flex justify-center">
				<form
					className="h-10 w-2/4 flex"
					onSubmit={(e) => {
						e.preventDefault();
					}}
				>
					<input
						className="border border-black rounded-l-md h-[80%] focus:outline-none px-3 w-full"
						onChange={(e) => {
							setSearchText(e.target.value);
						}}
					/>
					<button className="border border-black rounded-r-md px-1 h-[80%] w-12">
						🔍
					</button>
				</form>
				<div className="absolute top-8 w-2/4">
					<SearchTextDropDown searchResults={searchResults} />
				</div>
			</div>
			<div className="relative">
				<img
					className="h-10 cursor-pointer"
					src={userLogo}
					alt="user dp"
					onClick={handleLogin}
				/>
			</div>
		</div>
	);
};

export default Header;
