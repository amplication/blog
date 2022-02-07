/* eslint-disable @next/next/no-img-element */
import SubscribeNewsletter from '@/components/SubscribeNewsletter';
import { Tag } from '@/types';
import CategoriesList from './CategoriesList';
import PostShareWidget from './PostShareWidget';

interface Props {
	tagList: Tag[];
}

const Sidebar: React.FC<Props> = ({ tagList }) => {
	return (
		<div className='xl:col-span-3'>
			<div className='flex flex-col mb-12 gap-y-12 xl:gap-y-14 xl:mb-0'>
				<CategoriesList tagList={tagList} />
				<PostShareWidget />
				{/* <SubscribeForm /> */}
				<SubscribeNewsletter postDetails />
			</div>
		</div>
	);
};

export default Sidebar;
