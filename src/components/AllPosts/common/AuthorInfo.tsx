import Image from 'next/image';

const AuthorInfo: React.FC = () => {
	return (
		<div className='flex items-center gap-x-3'>
			<Image
				src='/assets/images/hot-news/author.png'
				alt=''
				width='32px'
				height='32px'
			/>
			<div className='text-xs'>
				<p>Matan Shidlov</p>
				<p>Dec 27, 2021</p>
			</div>
		</div>
	);
};

export default AuthorInfo;
