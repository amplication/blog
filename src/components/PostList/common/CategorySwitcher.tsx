import { Tag } from '@/types';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface Props {
	tagList: Tag[];
}

const firstTag = {
	id: '1',
	name: 'All',
};

const CategorySwitcher: React.FC<Props> = ({ tagList }) => {
	const Router = useRouter();

	const tagID = Router.query.tagId || '1';

	const updatedTagList = [firstTag, ...tagList];

	return (
		<ul className='flex px-4 pb-3 overflow-x-scroll xl:px-0 gap-x-8 scrollbar-hide mb-[35px] lg:mb-[50px]'>
			{updatedTagList.map((tag) => (
				<Link
					key={tag.id}
					href={tag.id === '1' ? '/' : `/tags/${tag.id}`}
					passHref
				>
					<li
						className={`text-lg px-[18px] cursor-pointer min-w-max ${
							tag.id === tagID
								? 'font-poppinsbold relative after:absolute after:w-full after:h-1 after:bg-[#41CADD] after:rounded-sm after:bottom-0 after:mb-[-10px] after:left-0'
								: ''
						}`}
					>
						{tag.name}
					</li>
				</Link>
			))}
		</ul>
	);
};

export default CategorySwitcher;
