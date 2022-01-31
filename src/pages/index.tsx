import Layout from '@/components/Layout';
import SubscribeNewsletter from '@/components/SubscribeNewsletter';
import PostList from '@/components/PostList';
import type { NextPage } from 'next';

const Home: NextPage = () => {
	return (
		<Layout pageName='Blog'>
			<PostList>
				{/* Newsletter Sign Up Form */}
				<SubscribeNewsletter />
			</PostList>
		</Layout>
	);
};

export default Home;
