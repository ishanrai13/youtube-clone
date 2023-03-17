const Shimmer = () => {
	return (
		<div className="p-10 flex flex-wrap">
			{Array(20)
				.fill('')
				.map((item, idx) => (
					<div
						className=" w-72 shadow-md rounded-md p-5 border-gray-400 m-2 min-h-[200px]"
						key={idx}
					></div>
				))}
		</div>
	);
};

export default Shimmer;
