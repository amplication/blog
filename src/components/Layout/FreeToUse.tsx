import Image from 'next/image';

const FreeToUse: React.FC = () => {
	return (
		<section>
			<div className='container'>
				<div
					className='bg-purple-primary-dark rounded mx-4 xl:mx-0 px-[18px] xl:px-0 pt-[34px] xl:pt-0 bg-right-top xl:bg-center'
					style={{
						backgroundImage:
							'url(/assets/images/free-to-use/bg.png)',
						backgroundSize: 'cover',
						backgroundRepeat: 'no-repeat',
					}}
				>
					<div className='flex flex-col items-center xl:flex-row gap-y-8 xl:gap-x-20 '>
						<div className='flex order-1 xl:items-end xl:pt-4 xl:pl-10 xl:order-none '>
							<Image
								src='/assets/images/free-to-use/dashboard.png'
								alt=''
								width='855px'
								height='324px'
								className='shrink-0'
							/>
						</div>
						<div className='flex flex-col items-center text-center xl:text-left xl:items-start gap-y-6 xl:gap-y-10 xl:py-[58px] '>
							<div className=' font-poppinssemibold text-[30px] leading-9 xl:text-[60px] xl:leading-[72px]'>
								<h3>
									Free to Use.{' '}
									<br className='hidden xl:block' />{' '}
									Open-source.
								</h3>
								<h3></h3>
							</div>
							<button className=' bg-dark-100 w-full xl:w-[294px] py-2 rounded font-poppinsmedium try-amplication'>
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
