/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import Footer from './Footer';
import FreeToUse from './FreeToUse';
import Header from './Header';

interface Props {
	pageName: string;
	pageDesc: string;
}

const Layout: React.FC<Props> = ({ children, pageName, pageDesc }) => {
	return (
		<div className='text-white font-poppinsregular bg-dark-100'>
			<Head>
				<title>{pageName} - Amplication</title>
				<meta name='description' content={pageDesc} />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			{/* Header */}
			<Header />

			{/* Children */}
			<main>{children}</main>

			{/* Free to use */}
			<FreeToUse />

			{/* Footer */}
			<Footer />
		</div>
	);
};

export default Layout;
