interface PostTagProps {
	text: string;
	postDetails?: boolean;
}

const PostTag: React.FC<PostTagProps> = ({ text, postDetails = false }) => {
	return (
		<span
			className={`bg-dark-90 border border-[#444B66] rounded-[20px] py-1 px-2 font-poppinsmedium ${
				postDetails ? 'text-[10px] lg:text-xs' : 'text-[10px]'
			}`}
		>
			{text}
		</span>
	);
};

export default PostTag;
