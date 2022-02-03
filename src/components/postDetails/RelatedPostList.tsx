import PostCard from '@/components/PostList/PostCard';
import SidebarWidgetTitle from './Sidebar/SidebarWidgetTitle';

const RelatedPostList: React.FC = () => {
	const tags = [
		{ name: 'Blog Tag1' },
		{ name: 'Blog Tag2' },
		{ name: 'Blog Tag3' },
	];
	return (
		<div className='hidden xl:block xl:mb-[100px] '>
			<SidebarWidgetTitle title='Related Posts' />
			<div className='grid grid-cols-2 xl:grid-cols-3 gap-[30px] flex-wrap xl:mt-8'>
				<PostCard
					id='123'
					title='Amplication workdocs updates, better column visibility, and oth...'
					authorName='Jhon Doe'
					authorPicture='/assets/images/hot-news/author.png'
					image='/assets/images/related-posts/image-1.png'
					tags={tags}
				/>
				<PostCard
					id='124'
					title='Amplication workdocs updates, better column visibility, and oth...'
					authorName='Jhon Doe'
					authorPicture='/assets/images/hot-news/author.png'
					image='/assets/images/related-posts/image-2.png'
					tags={tags}
				/>
				<PostCard
					id='125'
					title='Amplication workdocs updates, better column visibility, and oth...'
					authorName='Jhon Doe'
					authorPicture='/assets/images/hot-news/author.png'
					image='/assets/images/related-posts/image-3.png'
					tags={tags}
				/>
			</div>
		</div>
	);
};

export default RelatedPostList;
