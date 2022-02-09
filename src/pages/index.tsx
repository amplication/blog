import Layout from '@/components/Layout';
import PostList from '@/components/PostList';
import SubscribeNewsletter from '@/components/SubscribeNewsletter';
import { PageProps } from '@/types';
import { gql } from '@apollo/client';
import { client } from 'lib/apollo-client';
import type { GetServerSideProps, NextPage } from 'next';

const Home: NextPage<PageProps> = ({ posts, tagList }) => {
	return (
		<Layout
			pageName='Blog'
			pageDesc='Amplication is an open‑source development tool. It helps you develop quality Node.js applications without spending time on repetitive coding tasks.'
		>
			<PostList posts={posts} tagList={tagList}>
				{/* Newsletter Sign Up Form */}
				<SubscribeNewsletter />
			</PostList>
		</Layout>
	);
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
	const { data } = await client.query({
		query: gql`
			query {
				posts(orderBy: { createdAt: Desc }) {
					id
					title
					content
					featuredImage
					tags {
						id
						name
					}
					author {
						id
						firstName
						lastName
						profileImage
					}
					createdAt
				}
				tags {
					id
					name
				}
			}
		`,
	});

	return {
		props: {
			posts: data.posts,
			tagList: data.tags,
		},
	};
};
