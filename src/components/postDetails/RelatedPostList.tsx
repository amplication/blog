import PostCard from '@/components/PostList/PostCard';
import SidebarWidgetTitle from './Sidebar/SidebarWidgetTitle';

const RelatedPostList: React.FC = () => {
	return (
		<div className='hidden xl:block xl:mb-[100px] '>
			<SidebarWidgetTitle title='Related Posts' />
			<div className='grid grid-cols-2 xl:grid-cols-3 gap-[30px] flex-wrap xl:mt-8'>
				<PostCard
					title='Amplication workdocs updates, better column visibility, and oth...'
					image='/assets/images/related-posts/image-1.png'
				/>
				<PostCard
					title='Amplication workdocs updates, better column visibility, and oth...'
					image='/assets/images/related-posts/image-2.png'
				/>
				<PostCard
					title='Amplication workdocs updates, better column visibility, and oth...'
					image='/assets/images/related-posts/image-3.png'
				/>
			</div>
		</div>
	);
};

export default RelatedPostList;
