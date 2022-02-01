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
import { gql } from '@apollo/client';
import { client } from 'lib/apollo-client';
import type { GetServerSideProps, NextPage } from 'next';
import getIdFromSlug from 'utils/getSlug';

interface Props {
	post: Post;
}

interface Post {
	id: string;
	title: string;
	content: string;
	featuredImage: string;
	author: Author;
	tags: Tag[];
}

interface Author {
	id: string;
	firstName: string;
	lastName: string;
	picture?: string;
}

interface Tag {
	name: string;
}

const PostDetails: NextPage<Props> = ({ post }) => {
	console.log(post);

	const first4 = post.title.split(' ').slice(0, 4).join(' ');

	return (
		<Layout pageName={post.title} pageDesc={post.content}>
			<section className='px-4 md:px-16 xl:px-0'>
				<div className='container'>
					{/* Breadcrumb */}
					<Breadcrumb text={first4} />
					<div className='xl:grid xl:grid-cols-12'>
						<div className='xl:col-span-8'>
							<div className='mb-8'>
								{/* Headline */}
								<Headline text={post.title} />

								{/* Taglist */}
								<PostTagList />

								{/* Author Info */}
								<AuthorInfo
									authorName={`${post.author.firstName} ${post.author.lastName}`}
									width='50px'
									height='50px'
									postDetails
								/>
							</div>
							{/* Post Content */}
							<PostContent
								image={post.featuredImage}
								text={post.content}
								title={post.title}
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
