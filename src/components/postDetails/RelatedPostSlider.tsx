import PostCard from '@/components/PostList/PostCard';
import { Post } from '@/types';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import SidebarWidgetTitle from './Sidebar/SidebarWidgetTitle';

interface RelatedPostListProps {
	relatedPosts: Post[];
}

const RelatedPostSlider: React.FC<RelatedPostListProps> = ({
	relatedPosts,
}) => {
	const settings = {
		arrows: false,
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1025,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
					dots: true,
				},
			},
		],
	};

	return (
		<div className='mb-20 xl:hidden'>
			<SidebarWidgetTitle title='Related Posts' />
			<div className='mt-4'>
				<Slider {...settings}>
					{relatedPosts.slice(0, 3).map((post) => (
						<div key={post.id}>
							<PostCard
								id={post.id}
								title={post.title}
								authorName={`${post.author.firstName} ${post.author.lastName}`}
								authorPicture={post.author.profileImage}
								image={post.featuredImage}
								tags={post.tags}
								createdAt={post.createdAt}
							/>
						</div>
					))}
				</Slider>
			</div>
		</div>
	);
};

export default RelatedPostSlider;
