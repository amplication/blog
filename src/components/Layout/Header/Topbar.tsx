import Image from 'next/image';

const Topbar: React.FC = () => {
	return (
		<a
			href='https://github.com/amplication/amplication'
			className='items-center justify-center hidden px-4 py-4 lg:flex xl:px-16 gap-x-2 bg-dark-90'
		>
			{/* Star Icon */}
			<div>
				<Image
					src='/assets/images/icons/star.svg'
					alt=''
					width='16px'
					height='16px'
				/>
			</div>

			{/* Text */}
			<span className='mb-1 text-xs font-dm_monoregular'>
				Amplication is open source. Star our GitHub repo!
			</span>

			{/* Github Icon */}
			<div>
				<Image
					src='/assets/images/icons/github.svg'
					alt=''
					width='16px'
					height='16px'
				/>
			</div>
		</a>
	);
};

export default Topbar;
