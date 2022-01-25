import React from 'react';

const NewsContent: React.FC = () => {
	return (
		<div>
			<h2 className='mb-1 text-lg lg:mb-4 lg:text-2xl font-poppinsmedium line-clamp-2 lg:line-clamp-none'>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
				eu turpis molestie, dictum est a, mattis tellus...
			</h2>
			<p className='text-sm lg:text-base line-clamp-2 lg:line-clamp-none'>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
				eu turpis molestie, dictum est a, mattis tellus. Sed dignissim,
				metus nec fringilla accumsan, risus sem sollicitudin ...
			</p>
		</div>
	);
};

export default NewsContent;
