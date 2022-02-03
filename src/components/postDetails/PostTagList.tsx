import { Tag } from '@/types';
import PostTag from '../PostList/common/PostTag';

interface Props {
	tags: Tag[];
}

const PostTagList: React.FC<Props> = ({ tags }) => {
	return (
		<div className='flex my-6 xl:my-8 gap-x-[5px]'>
			{tags.length > 0 ? (
				tags.map((tag) => <PostTag key={tag.name} text={tag.name} />)
			) : (
				<PostTag text='No Tag' />
			)}
		</div>
	);
};

export default PostTagList;
