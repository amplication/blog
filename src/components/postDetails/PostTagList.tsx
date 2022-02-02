import PostTag from '../PostList/common/PostTag';

const PostTagList: React.FC = () => {
	return (
		<div className='flex my-6 xl:my-8 gap-x-[5px]'>
			<PostTag text='Blog Tag' postDetails />
			<PostTag text='Blog Tag' postDetails />
			<PostTag text='Blog Tag' postDetails />
		</div>
	);
};

export default PostTagList;
