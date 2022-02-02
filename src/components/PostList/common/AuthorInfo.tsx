import Image from 'next/image';

interface AuthorProps {
	width: string;
	height: string;
	postDetails?: boolean;
	authorName: string;
	picture?: string;
}

const AuthorInfo: React.FC<AuthorProps> = ({
	authorName,
	picture,
	width,
	height,
	postDetails = false,
}) => {
	return (
		<div className='flex items-center gap-x-3'>
			<Image
				src='/assets/images/hot-news/author.png'
				alt=''
				width={width}
				height={height}
			/>
			<div className=''>
				<p className={postDetails ? 'text-lg ' : 'text-sm'}>
					{authorName}
				</p>
				<p className={postDetails ? 'text-sm ' : 'text-xs'}>
					Dec 27, 2021
				</p>
			</div>
		</div>
	);
};

export default AuthorInfo;