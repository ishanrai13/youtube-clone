import React from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import SidePanel from './SidePanel';

const Body = () => {
	const isSideBarOpen = useSelector((store) => store.app.isSideBarOpen);
	return (
		<div className="flex h-[92vh]">
			{isSideBarOpen && (
				<div className="w-40 shadow-md">
					<SidePanel />
				</div>
			)}
			<div className="flex-1 overflow-scroll">
				<Outlet />
			</div>
		</div>
	);
};

export default Body;
