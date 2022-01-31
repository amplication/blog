import Image from 'next/image';
import AuthorInfo from './common/AuthorInfo';
import Tags from './HotNewsCard/Tags';

interface PostCardProps {
	title: string;
	text?: string;
	image: string;
	postSlider?: boolean;
}

const PostCard: React.FC<PostCardProps> = ({
	image,
	text,
	title,
	postSlider = false,
}) => {
	return (
		<div
			className={`border rounded-2xl border-dark-70 max-w-[476px] ${
				postSlider ? 'md:mr-5' : ''
			}`}
		>
			<div>
				<Image src={image} alt='' width='476px' height='250px' />
			</div>
			<div className='flex flex-col p-6 gap-y-4'>
				<AuthorInfo width='32px' height='32px' />
				<Tags />
				<div>
					<h3 className='mb-3 text-lg font-poppinsmedium line-clamp-2 lg:line-clamp-none lg:mb-0'>
						{title}
					</h3>
					{text && <p className='hidden text-sm lg:block'>{text}</p>}
				</div>
			</div>
		</div>
	);
};

export default PostCard;
