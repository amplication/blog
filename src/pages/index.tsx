import AllPosts from '@/components/AllPosts';
import Layout from '@/components/Layout';
import NewsletterForm from '@/components/NewsletterForm';
import type { NextPage } from 'next';

const Home: NextPage = () => {
	return (
		<Layout pageName='Blog'>
			<AllPosts>
				{/* Newsletter Sign Up Form */}
				<NewsletterForm />
			</AllPosts>
		</Layout>
	);
};

export default Home;
