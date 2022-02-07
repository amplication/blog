import PostCard from '@/components/PostList/PostCard';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import SidebarWidgetTitle from './Sidebar/SidebarWidgetTitle';

const RelatedPostSlider: React.FC = () => {
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

	const tags = [
		{ id: '1', name: 'Blog Tag1' },
		{ id: '2', name: 'Blog Tag2' },
		{ id: '3', name: 'Blog Tag3' },
	];
	return (
		<div className='mb-20 xl:hidden'>
			<SidebarWidgetTitle title='Related Posts' />
			<div className='mt-4'>
				<Slider {...settings}>
					<div>
						<PostCard
							id='123'
							title='Amplication workdocs updates, better column visibility, and oth...'
							image='/assets/images/related-posts/image-1.png'
							authorName='Jhon Doe'
							postSlider
							authorPicture='/assets/images/hot-news/author.png'
							tags={tags}
							createdAt='2020-05-01'
						/>
					</div>
					<div>
						<PostCard
							id='124'
							title='Amplication workdocs updates, better column visibility, and oth...'
							image='/assets/images/related-posts/image-2.png'
							authorName='Jhon Doe'
							postSlider
							authorPicture='/assets/images/hot-news/author.png'
							tags={tags}
							createdAt='2020-05-01'
						/>
					</div>
					<div>
						<PostCard
							id='125'
							title='Amplication workdocs updates, better column visibility, and oth...'
							image='/assets/images/related-posts/image-3.png'
							authorName='Jhon Doe'
							authorPicture='/assets/images/hot-news/author.png'
							postSlider
							tags={tags}
							createdAt='2020-05-01'
						/>
					</div>
				</Slider>
			</div>
		</div>
	);
};

export default RelatedPostSlider;
