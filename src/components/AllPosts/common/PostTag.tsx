interface PostTagProps {
	text: string;
}

const PostTag: React.FC<PostTagProps> = ({ text }) => {
	return (
		<span className='bg-dark-90 border border-[#444B66] rounded-[20px] py-1 px-2 text-[10px] font-poppinsmedium'>
			{text}
		</span>
	);
};

export default PostTag;
