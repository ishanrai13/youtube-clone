import React from 'react';

const SearchTextDropDown = ({ searchResults }) => {
	if (!searchResults || searchResults.length === 0) {
		return null;
	}
	return (
		<div className="flex flex-col border border-gray-400 rounded-md py-3 bg-gray-50">
			{searchResults.map((item) => (
				<div className="hover:bg-gray-200 px-2" key={item}>
					{item}
				</div>
			))}
		</div>
	);
};

export default SearchTextDropDown;
