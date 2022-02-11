import PostCard from '@/components/PostList/PostCard';
import { Post } from '@/types';
import SidebarWidgetTitle from './Sidebar/SidebarWidgetTitle';

interface RelatedPostListProps {
	relatedPosts: Post[];
}

const RelatedPostList: React.FC<RelatedPostListProps> = ({ relatedPosts }) => {
	return (
		<div className='hidden xl:block xl:mb-[100px] '>
			<SidebarWidgetTitle title='Related Posts' />
			<div className='grid grid-cols-2 xl:grid-cols-3 gap-[30px] flex-wrap xl:mt-8'>
				{relatedPosts.slice(0, 3).map((post) => (
					<PostCard
						id={post.id}
						key={post.id}
						title={post.title}
						authorName={`${post.author.firstName} ${post.author.lastName}`}
						authorPicture={post.author.profileImage}
						image={post.featuredImage}
						tags={post.tags}
						createdAt={post.createdAt}
					/>
				))}
			</div>
		</div>
	);
};

export default RelatedPostList;
