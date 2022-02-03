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
import { Post } from '@/types';
import { gql } from '@apollo/client';
import { client } from 'lib/apollo-client';
import type { GetServerSideProps, NextPage } from 'next';
import getIdFromSlug from 'utils/getSlug';
interface Props {
	post: Post;
}

const PostDetails: NextPage<Props> = ({ post }) => {
	const first4 = post
		? post.title.split(' ').slice(0, 4).join(' ')
		: 'Lorem Sum a Lorem';
	const dummyText =
		'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati id consequuntur dicta sunt voluptates? Quaerat aperiam incidunt modi qui deserunt sint ipsam iste laboriosam asperiores ullam rerum doloribus nihil debitis minus, delectus at distinctio velit, id ipsa a ducimus fugiat quisquam? Doloribus saepe laboriosam excepturi illo, itaque quo tempora a est sunt facilis? Aperiam, eos impedit? Inventore delectus praesentium itaque necessitatibus, quis dolor ducimus deleniti modi odio, neque assumenda. Tempora repudiandae reiciendis culpa officiis rerum repellendus vero ipsa.';

	const tags = [
		{ name: 'Blog Tag1' },
		{ name: 'Blog Tag2' },
		{ name: 'Blog Tag3' },
	];
	return (
		<Layout
			pageName={post ? post.title : 'Related Post'}
			pageDesc={post ? post.content : dummyText}
		>
			<section className='px-4 md:px-16 xl:px-0'>
				<div className='container'>
					{/* Breadcrumb */}
					<Breadcrumb text={first4} />
					<div className='xl:grid xl:grid-cols-12'>
						<div className='xl:col-span-8'>
							<div className='mb-8'>
								{/* Headline */}
								<Headline
									text={post ? post.title : 'Lorem sum a pit'}
								/>

								{/* Taglist */}
								<PostTagList tags={post ? post.tags : tags} />

								{/* Author Info */}
								<AuthorInfo
									authorName={
										post
											? `${post.author.firstName} ${post.author.lastName}`
											: 'John Doe'
									}
									authorPicture={
										post
											? post.author.profileImage
											: '/assets/images/hot-news/author.png'
									}
									postDetails
								/>
							</div>
							{/* Post Content */}
							<PostContent
								image={
									post
										? post.featuredImage
										: '/assets/images/post-details/image-1.png'
								}
								text={post ? post.content : dummyText}
								title={post ? post.title : 'Lorem sum a pit'}
							/>

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

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	const postId = getIdFromSlug(ctx.query.slug);

	const { data } = await client.query({
		query: gql`
			query getPost($postId: String!) {
				post(where: { id: $postId }) {
					id
					author {
						id
						firstName
						lastName
						profileImage
					}
					title
					content
					featuredImage
					tags {
						name
					}
				}
			}
		`,
		variables: { postId },
	});

	return {
		props: {
			post: data.post,
		},
	};
};
