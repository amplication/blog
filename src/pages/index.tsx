import AllPosts from '@/components/AllPosts';
import Layout from '@/components/Layout';
import type { NextPage } from 'next';

const Home: NextPage = () => {
	return (
		<Layout pageName='Blog'>
			<AllPosts />
		</Layout>
	);
};

export default Home;
