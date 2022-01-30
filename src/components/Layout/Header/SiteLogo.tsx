/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';

const SiteLogo: React.FC = () => {
	return (
		<Link href='/' passHref>
			<a>
				<img
					className='cursor-pointer'
					src='/assets/images/site-logo.png'
					alt='Site Logo'
					width='130px'
					height='27px'
				/>
			</a>
		</Link>
	);
};

export default SiteLogo;
