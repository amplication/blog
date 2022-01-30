import React from 'react';
import ContactUs from './ContactUs';
import FollowUs from './FollowUs';

const WidgetTwo: React.FC = () => {
	return (
		<div className='flex flex-col items-center text-center md:items-start gap-y-12 md:flex-row md:text-left'>
			<ContactUs />
			<FollowUs />
		</div>
	);
};

export default WidgetTwo;
