/* eslint-disable @next/next/no-img-element */
import CategorySwitcher from './CategorySwitcher';
import HotNewsCard from './HotNewsCard';

const AllPosts: React.FC = () => {
	return (
		<section className='mt-[53px] lg:mt-[83px] '>
			<div className='container'>
				{/* Category Switcher */}
				<CategorySwitcher />
				{/* Hot News Card */}
				<HotNewsCard />
			</div>
		</section>
	);
};

export default AllPosts;
