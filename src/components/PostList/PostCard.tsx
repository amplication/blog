import { PostCardProps } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import makeSlug from 'utils/makeSlug';
import AuthorInfo from './common/AuthorInfo';
import Tags from './HotNewsCard/Tags';

const PostCard: React.FC<PostCardProps> = ({
	id,
	image,
	text,
	title,
	postSlider = false,
	authorName,
	tags,
}) => {
	return (
		<div
			className={`border rounded-2xl border-dark-70 max-w-[476px] ${
				postSlider ? 'md:mr-5' : ''
			}`}
		>
			<Link href={`/posts/${makeSlug(title)}-${id}`} passHref>
				<div>
					<Image
						src={image}
						alt={title}
						width='476px'
						height='250px'
						className='cursor-pointer'
					/>
				</div>
			</Link>
			<div className='flex flex-col p-6 gap-y-4'>
				<AuthorInfo
					authorName={authorName}
					width='32px'
					height='32px'
				/>
				<Tags tags={tags} />
				<Link href={`/posts/${makeSlug(title)}-${id}`} passHref>
					<div className='cursor-pointer'>
						<h3 className='mb-3 text-lg font-poppinsmedium line-clamp-2 lg:line-clamp-none lg:mb-0'>
							{title}
						</h3>
						{text && (
							<p className='hidden text-sm lg:block'>{text}</p>
						)}
					</div>
				</Link>
			</div>
		</div>
	);
};

export default PostCard;
