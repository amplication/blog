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
import { Post, Tag } from '@/types';
import { gql } from '@apollo/client';
import { client } from 'lib/apollo-client';
import type { GetServerSideProps, NextPage } from 'next';
import getIdFromSlug from 'utils/getSlug';
interface Props {
	post: Post;
	tagList: Tag[];
	postList: Post[];
}

const PostDetails: NextPage<Props> = ({ post, tagList, postList }) => {
	const newTagList = post.tags.map((tag) => tag.id);
	const relatedPosts = postList.filter((post) => {
		if (post.tags.some((tag) => newTagList.includes(tag.id))) {
			return post;
		}
	});

	const filteredRelatedPosts = relatedPosts.filter(
		(relatedPost) => relatedPost.id !== post.id
	);

	const first4Word = post.title.split(' ').slice(0, 4).join(' ');

	return (
		<Layout pageName={post.title} pageDesc={post.content}>
			<section className='px-4 md:px-16 xl:px-0'>
				<div className='container'>
					{/* Breadcrumb */}
					<Breadcrumb text={first4Word} />
					<div className='xl:grid xl:grid-cols-12'>
						<div className='xl:col-span-8'>
							<div className='mb-8'>
								{/* Headline */}
								<Headline text={post.title} />

								{/* Taglist */}
								<PostTagList tags={post.tags} />

								{/* Author Info */}
								<AuthorInfo
									authorName={`${post.author.firstName} ${post.author.lastName}`}
									authorPicture={post.author.profileImage}
									postDetails
									createdAt={post.createdAt}
								/>
							</div>
							{/* Post Content */}
							<PostContent
								image={post.featuredImage}
								text={post.content}
								title={post.title}
							/>

							{/* Related Post Slider for small devices */}
							{relatedPosts.length > 0 && (
								<RelatedPostSlider
									relatedPosts={filteredRelatedPosts}
								/>
							)}
						</div>
						{/* Spacer */}
						<div className='xl:col-span-1' />
						{/* Sidebar */}
						<Sidebar tagList={tagList} />
					</div>
					{/* Related Post Slider for Large devices */}
					{relatedPosts.length > 0 && (
						<RelatedPostList relatedPosts={filteredRelatedPosts} />
					)}
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
					title
					content
					featuredImage
					author {
						id
						firstName
						lastName
						profileImage
					}
					tags {
						id
						name
					}
					createdAt
				}
				posts(orderBy: { createdAt: Desc }) {
					id
					title
					content
					featuredImage
					author {
						id
						firstName
						lastName
						profileImage
					}
					tags {
						id
						name
					}
					createdAt
				}
				tags {
					id
					name
				}
			}
		`,
		variables: { postId },
	});

	return {
		props: {
			post: data.post,
			tagList: data.tags,
			postList: data.posts,
		},
	};
};
