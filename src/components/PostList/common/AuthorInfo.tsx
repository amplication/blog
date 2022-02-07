/* eslint-disable @next/next/no-img-element */

import dayjs from 'dayjs';
interface AuthorProps {
	postDetails?: boolean;
	authorName: string;
	authorPicture: string;
	createdAt: string;
}

const AuthorInfo: React.FC<AuthorProps> = ({
	authorName,
	authorPicture,
	postDetails = false,
	createdAt,
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
					{dayjs(createdAt).format('DD MMM YYYY')}
				</p>
			</div>
		</div>
	);
};

export default AuthorInfo;
