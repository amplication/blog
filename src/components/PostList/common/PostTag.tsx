import Link from 'next/link';

interface PostTagProps {
	text: string;
	postDetails?: boolean;
	tagId?: string;
}

const PostTag: React.FC<PostTagProps> = ({
	text,
	postDetails = false,
	tagId,
}) => {
	return (
		<Link href={`/tags/${tagId}`} passHref>
			<span
				className={`cursor-pointer bg-dark-90 border border-[#444B66] rounded-[20px] py-1 px-2 font-poppins font-medium ${
					postDetails ? 'text-[10px] lg:text-xs' : 'text-[10px]'
				}`}
			>
				{text}
			</span>
		</Link>
	);
};

export default PostTag;
