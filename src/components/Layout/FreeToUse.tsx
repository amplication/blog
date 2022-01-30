import Image from 'next/image';

const FreeToUse: React.FC = () => {
	return (
		<section>
			<div className='container'>
				<div
					className='bg-purple-primary-dark rounded mx-4 lg:mx-0 px-[18px] lg:px-0 pt-[34px] lg:pt-0 bg-right-top lg:bg-center'
					style={{
						backgroundImage:
							'url(/assets/images/free-to-use/bg.png)',
						backgroundSize: 'cover',
						backgroundRepeat: 'no-repeat',
					}}
				>
					<div className='flex flex-col items-center lg:flex-row gap-y-8 lg:gap-x-20 '>
						<div className='flex order-1 lg:items-end lg:pt-4 lg:pl-10 lg:order-none '>
							<Image
								src='/assets/images/free-to-use/dashboard.png'
								alt=''
								width='855px'
								height='324px'
								className='shrink-0'
							/>
						</div>
						<div className='flex flex-col items-center text-center lg:text-left lg:items-start gap-y-6 lg:gap-y-10 lg:py-[58px] '>
							<div className=' font-poppinssemibold text-[30px] leading-9 lg:text-[60px] lg:leading-[72px]'>
								<h3>
									Free to Use.{' '}
									<br className='hidden lg:block' />{' '}
									Open-source.
								</h3>
								<h3></h3>
							</div>
							<button className=' bg-dark-100 w-full lg:w-[294px] py-2 rounded font-poppinsmedium try-amplication'>
								Try amplication in 5 minutes
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default FreeToUse;
