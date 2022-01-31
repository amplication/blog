/* eslint-disable @next/next/no-img-element */
import Layout from '@/components/Layout';
import Breadcrumb from '@/components/postDetails/Breadcrumb';
import Headline from '@/components/postDetails/Headline';
import PostContent from '@/components/postDetails/PostContent';
import PostTagList from '@/components/postDetails/PostTagList';
import RelatedPostList from '@/components/postDetails/RelatedPostList';
import RelatedPostSlider from '@/components/postDetails/RelatedPostSlider';
import Sidebar from '@/components/postDetails/Sidebar';
import AuthorInfo from '@/components/PostList/common/AuthorInfo';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';

const PostDetails: NextPage = () => {
	const router = useRouter();

	console.log(router.query);

	const heading =
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis';

	const first4 = heading.split(' ').slice(0, 4).join(' ');

	return (
		<Layout pageName='Post Details'>
			<section className='px-4 md:px-16 xl:px-0'>
				<div className='container'>
					{/* Breadcrumb */}
					<Breadcrumb text={first4} />
					<div className='xl:grid xl:grid-cols-12'>
						<div className='xl:col-span-8'>
							<div className='mb-8'>
								{/* Headline */}
								<Headline text={heading} />

								{/* Taglist */}
								<PostTagList />

								{/* Author Info */}
								<AuthorInfo
									width='50px'
									height='50px'
									postDetails
								/>
							</div>
							{/* Post Content */}
							<PostContent />

							{/* Related Post Slider for small devices */}
							<RelatedPostSlider />
						</div>
						{/* Spacer */}
						<div className='xl:col-span-1' />
						{/* Sidebar */}
						<Sidebar />
					</div>
					{/* Related Post Slider for Large devices */}
					<RelatedPostList />
				</div>
			</section>
		</Layout>
	);
};

export default PostDetails;
