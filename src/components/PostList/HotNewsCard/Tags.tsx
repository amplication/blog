import PostTag from '../common/PostTag';

interface Props {
	tags?: Tag[];
}

interface Tag {
	name: string;
}

const Tags: React.FC<Props> = ({ tags }) => {
	return (
		<div className='flex gap-x-[5px]'>
			{/* {tags.length > 0 ? (
				tags.map((tag) => <PostTag key={tag.name} text={tag.name} />)
			) : (
				<p>No tag is found!</p>
			)} */}
			<PostTag text='Blog Tag' />
			<PostTag text='Blog Tag' />
			<PostTag text='Blog Tag' />
		</div>
	);
};

export default Tags;
