/* eslint-disable @next/next/no-img-element */
import data from './allposts.json';
import CategorySwitcher from './CategorySwitcher';
import HotNewsCard from './HotNewsCard';
import PostCard from './PostCard';
const AllPosts: React.FC = ({ children }) => {
	return (
		<section className='mt-[53px] lg:mt-[83px] '>
			<div className='container'>
				{/* Category Switcher */}
				<CategorySwitcher />
				{/* Hot News Card */}
				<HotNewsCard />
				{/* First 6 Posts */}
				<div className='px-4 xl:px-0 w-full grid md:grid-cols-2 lg:grid-cols-3 gap-y-6 lg:gap-y-[75px] gap-x-[30px]'>
					{data.slice(0, 6).map((post, index) => (
						<PostCard
							key={index}
							title={post.title}
							text={post.text}
							image={post.image}
						/>
					))}
				</div>

				{children}

				{/* Rest Posts */}
				<div className='px-4 xl:px-0 w-full grid lg:grid-cols-3 gap-y-6 lg:gap-y-[75px] lg:gap-x-[30px]'>
					{data.slice(6, 9).map((post, index) => (
						<PostCard
							key={index}
							title={post.title}
							text={post.text}
							image={post.image}
						/>
					))}
				</div>

				<div className='py-12 lg:pt-[75px] lg:pb-[100px] text-center'>
					<button className='bg-dark-70 w-[118px] py-2 px-4 rounded'>
						Load More
					</button>
				</div>
			</div>
		</section>
	);
};

export default AllPosts;
