import React from 'react';
import { NavLink } from 'react-router-dom';

const SidePanel = () => {
	return (
		<div className="p-5">
			<NavLink
				to={'/'}
				className={({ isActive }) => (isActive ? 'font-bold' : undefined)}
			>
				<div className="py-1">Home</div>
			</NavLink>
			<NavLink
				to={'/live'}
				className={({ isActive }) => (isActive ? 'font-bold' : undefined)}
			>
				<div className="py-1">Live</div>
			</NavLink>
			<div className="py-1">Shorts</div>
			<div className="py-1">Subscriptions</div>
			<div className="py-1">Library</div>
			<div className="py-1">History</div>
		</div>
	);
};

export default SidePanel;
