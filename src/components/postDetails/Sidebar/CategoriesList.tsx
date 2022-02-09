import { Tag } from '@/types';
import Link from 'next/link';
import React from 'react';
import SidebarWidgetTitle from './SidebarWidgetTitle';

interface Props {
	tagList: Tag[];
}

const CategoriesList: React.FC<Props> = ({ tagList }) => {
	return (
		<div className='flex flex-col order-1 md:order-none gap-y-4'>
			<SidebarWidgetTitle title='Categories' />
			<div className='text-xs  font-poppinsmedium flex gap-x-[5px] gap-y-2 flex-wrap'>
				{tagList.map((tag) => (
					<Link key={tag.id} href={`/tags/${tag.id}`} passHref>
						<span className=' bg-dark-90 border border-[#444B66] py-1 px-2 rounded-[20px] min-w-max cursor-pointer'>
							{tag.name}
						</span>
					</Link>
				))}
			</div>
		</div>
	);
};

export default CategoriesList;
