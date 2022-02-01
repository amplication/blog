import Link from 'next/link';
import makeSlug from 'utils/makeSlug';

interface Props {
	title: string;
	text: string;
	id: string;
}

const NewsContent: React.FC<Props> = ({ title, text, id }) => {
	return (
		<Link href={`/posts/${makeSlug(title)}-${id}`} passHref>
			<div className='cursor-pointer'>
				<h2 className='mb-1 text-lg lg:mb-4 lg:text-2xl font-poppinsmedium line-clamp-2'>
					{title}
				</h2>
				<p className='text-sm lg:text-base line-clamp-2'>{text}</p>
			</div>
		</Link>
	);
};

export default NewsContent;
