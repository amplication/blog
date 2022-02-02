import Link from 'next/link';
import React from 'react';
import SidebarWidgetTitle from './SidebarWidgetTitle';

const CategoriesList: React.FC = () => {
	const categories = [
		{
			title: 'Company news',
			link: '/company-news',
		},
		{
			title: 'Cloud Security',
			link: '/cloud-security',
		},
		{
			title: 'Open source projects',
			link: '/open-source-projects',
		},
		{
			title: 'Task management',
			link: '/task-management',
		},
	];
	return (
		<div className='flex flex-col order-1 md:order-none gap-y-4'>
			<SidebarWidgetTitle title='Categories' />
			<div className='text-xs  font-poppinsmedium flex gap-x-[5px] gap-y-2 flex-wrap'>
				{categories.map((category, i) => (
					<Link href={category.link} key={i} passHref>
						<span className=' bg-dark-90 border border-[#444B66] py-1 px-2 rounded-[20px] min-w-max cursor-pointer'>
							{category.title}
						</span>
					</Link>
				))}
			</div>
		</div>
	);
};

export default CategoriesList;
