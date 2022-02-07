import { PostCardProps } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
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
	authorPicture,
	tags,
	createdAt,
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
						className='cursor-pointer rounded-tr-2xl rounded-tl-2xl'
					/>
				</div>
			</Link>
			<div className='flex flex-col p-6 gap-y-4'>
				<AuthorInfo
					authorName={authorName}
					authorPicture={authorPicture}
					createdAt={createdAt}
				/>
				<Tags tags={tags} />
				<Link href={`/posts/${makeSlug(title)}-${id}`} passHref>
					<div className='cursor-pointer'>
						<h3 className='mb-3 text-lg font-poppinsmedium line-clamp-2 lg:mb-0'>
							{title}
						</h3>
						<ReactMarkdown className='hidden text-sm lg:block lg:line-clamp-2'>
							{text as string}
						</ReactMarkdown>
					</div>
				</Link>
			</div>
		</div>
	);
};

export default PostCard;
