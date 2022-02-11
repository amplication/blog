/* eslint-disable @next/next/no-img-element */

const FollowUs: React.FC = () => {
	return (
		<div className=''>
			<h4 className='mb-6 text-lg font-medium font-poppins'>Follow us</h4>
			<div className='flex gap-x-8'>
				<a href='https://github.com/amplication/amplication'>
					<img
						src='/assets/images/footer/github.svg'
						alt='Amplication'
					/>
				</a>
				<a href='https://www.linkedin.com/company/amplication'>
					<img
						src='/assets/images/footer/linkedin.svg'
						alt='Amplication'
					/>
				</a>
				<a href='https://twitter.com/amplication'>
					<img
						src='/assets/images/footer/twitter.svg'
						alt='Amplication'
					/>
				</a>
			</div>
		</div>
	);
};

export default FollowUs;
