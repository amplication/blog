/* eslint-disable @next/next/no-img-element */

interface AuthorProps {
	postDetails?: boolean;
	authorName: string;
	authorPicture: string;
}

const AuthorInfo: React.FC<AuthorProps> = ({
	authorName,
	authorPicture,
	postDetails = false,
}) => {
	return (
		<div className='flex items-center gap-x-3'>
			<div>
				<img
					src={authorPicture}
					alt={authorName}
					width={postDetails ? '50px' : '32px'}
					height={postDetails ? '50px' : '32px'}
					className='rounded-full'
				/>
			</div>
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
