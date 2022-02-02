/* eslint-disable @next/next/no-img-element */
import SubscribeNewsletter from '@/components/SubscribeNewsletter';
import CategoriesList from './CategoriesList';
import PostShareWidget from './PostShareWidget';

const Sidebar: React.FC = () => {
	return (
		<div className='xl:col-span-3'>
			<div className='flex flex-col mb-12 gap-y-12 xl:gap-y-14 xl:mb-0'>
				<CategoriesList />
				<PostShareWidget />
				{/* <SubscribeForm /> */}
				<SubscribeNewsletter postDetails />
			</div>
		</div>
	);
};

export default Sidebar;
