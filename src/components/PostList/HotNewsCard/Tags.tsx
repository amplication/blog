import PostTag from '../common/PostTag';

const Tags: React.FC = () => {
	return (
		<div className='flex gap-x-[5px]'>
			<PostTag text='Blog Tag' />
			<PostTag text='Blog Tag' />
			<PostTag text='Blog Tag' />
		</div>
	);
};

export default Tags;
