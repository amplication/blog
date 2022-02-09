import Layout from '@/components/Layout';
import CategorySwitcher from '@/components/PostList/common/CategorySwitcher';
import PostCard from '@/components/PostList/PostCard';
import { Post, Tag } from '@/types';
import { gql } from '@apollo/client';
import { client } from 'lib/apollo-client';
import type { GetServerSideProps, NextPage } from 'next';
import { useState } from 'react';

interface Props {
	currentTag: Tag;
	tagList: Tag[];
	posts: Post[];
}

const EachTagPage: NextPage<Props> = ({ tagList, currentTag, posts }) => {
	const [postLimit, setPostLimit] = useState(10);

	return (
		<Layout pageName={`Category - ${currentTag.name}`}>
			<div className='container'>
				<CategorySwitcher tagList={tagList} />

				<div className='px-4 xl:px-0 w-full grid md:grid-cols-2 lg:grid-cols-3 gap-y-6 lg:gap-y-[75px] gap-x-[30px]'>
					{posts.length > 0 ? (
						posts
							.slice(0, postLimit)
							.map((post) => (
								<PostCard
									key={post.id}
									id={post.id}
									title={post.title}
									text={post.content}
									image={post.featuredImage}
									authorName={`${post.author.firstName} ${post.author.lastName}`}
									authorPicture={post.author.profileImage}
									tags={post.tags}
									createdAt={post.createdAt}
								/>
							))
					) : (
						<p className='text-2xl'>No post is found!</p>
					)}
				</div>

				{posts.length > 9 ? (
					<div className='py-12 lg:pt-[75px] lg:pb-[100px] text-center'>
						<button
							className='bg-dark-70 w-[118px] py-2 px-4 rounded'
							onClick={() => setPostLimit((prev) => prev + 9)}
						>
							Load More
						</button>
					</div>
				) : (
					<div className='mb-12 lg:mb-[100px]' />
				)}
			</div>
		</Layout>
	);
};

export default EachTagPage;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	const tagID = ctx.query.tagId;

	const { data } = await client.query({
		query: gql`
			query getTag($tagID: String!) {
				tag(where: { id: $tagID }) {
					id
					name
					posts {
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
					}
				}
				tags {
					id
					name
				}
			}
		`,
		variables: { tagID },
	});

	return {
		props: {
			currentTag: data.tag,
			tagList: data.tags,
			posts: data.tag.posts,
		},
	};
};
