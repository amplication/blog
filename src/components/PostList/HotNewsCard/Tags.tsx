import { Tag } from '@/types';
import PostTag from '../common/PostTag';

interface Props {
	tags: Tag[];
}

const Tags: React.FC<Props> = ({ tags }) => {
	return (
		<div className='flex gap-x-[5px]'>
			{tags.length > 0 ? (
				tags.map((tag) => <PostTag key={tag.id} text={tag.name} />)
			) : (
				<PostTag text='No Tag' />
			)}
		</div>
	);
};

export default Tags;
