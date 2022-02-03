/* eslint-disable @next/next/no-img-element */
import { PageProps } from '@/types';
import CategorySwitcher from './CategorySwitcher';
import HotNewsCard from './HotNewsCard';
import PostCard from './PostCard';

const PostList: React.FC<PageProps> = ({ children, posts }) => {
	return (
		<section>
			<div className='container'>
				{/* Category Switcher */}
				<CategorySwitcher />
				{/* Hot News Card */}
				<HotNewsCard hotNews={posts[0]} />
				{/* First 6 Posts */}
				<div className='px-4 xl:px-0 w-full grid md:grid-cols-2 lg:grid-cols-3 gap-y-6 lg:gap-y-[75px] gap-x-[30px]'>
					{posts.slice(1, 7).map((post) => (
						<PostCard
							key={post.id}
							id={post.id}
							title={post.title}
							text={post.content}
							image={post.featuredImage}
							authorName={`${post.author.firstName} ${post.author.lastName}`}
							authorPicture={post.author.profileImage}
							tags={post.tags}
						/>
					))}
				</div>

				{children}

				{/* Rest Posts */}
				<div className='px-4 xl:px-0 w-full grid lg:grid-cols-3 gap-y-6 lg:gap-y-[75px] lg:gap-x-[30px]'>
					{posts.slice(7, 10).map((post) => (
						<PostCard
							id={post.id}
							key={post.id}
							title={post.title}
							text={post.content}
							image={post.featuredImage}
							authorName={`${post.author.firstName} ${post.author.lastName}`}
							authorPicture={post.author.profileImage}
							tags={post.tags}
						/>
					))}
				</div>

				{posts.length > 9 ? (
					<div className='py-12 lg:pt-[75px] lg:pb-[100px] text-center'>
						<button className='bg-dark-70 w-[118px] py-2 px-4 rounded'>
							Load More
						</button>
					</div>
				) : (
					<div className='mb-12 lg:mb-[100px]' />
				)}
			</div>
		</section>
	);
};

export default PostList;
