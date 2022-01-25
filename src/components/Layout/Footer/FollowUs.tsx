/* eslint-disable @next/next/no-img-element */

const FollowUs: React.FC = () => {
	return (
		<div className=''>
			<h4 className='mb-6 text-lg font-poppinsmedium'>Follow us</h4>
			<div className='flex gap-x-8'>
				<a href=''>
					<img src='/assets/images/footer/github.svg' alt='' />
				</a>
				<a href=''>
					<img src='/assets/images/footer/linkedin.svg' alt='' />
				</a>
				<a href=''>
					<img src='/assets/images/footer/twitter.svg' alt='' />
				</a>
			</div>
		</div>
	);
};

export default FollowUs;
