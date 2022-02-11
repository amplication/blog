import { Tag } from '@/types';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useRef } from 'react';

interface Props {
	tagList: Tag[];
}

const firstTag = {
	id: '1',
	name: 'All',
};

const CategorySwitcher: React.FC<Props> = ({ tagList }) => {
	const Router = useRouter();
	const containerRef = useRef<HTMLUListElement | any>(null);

	const tagID = Router.query.tagId || '1';

	const updatedTagList = [firstTag, ...tagList];

	const handleOnWheelScroll = (e: React.WheelEvent<HTMLUListElement>) => {
		e.preventDefault();
		containerRef.current.scrollLeft += e.deltaY;
	};

	return (
		<ul
			ref={containerRef}
			className='flex px-4 pb-3 overflow-x-scroll xl:px-0 gap-x-8 scrollbar-hide mb-[35px] lg:mb-[50px]'
			onWheel={handleOnWheelScroll}
		>
			{updatedTagList.map((tag) => (
				<Link
					key={tag.id}
					href={tag.id === '1' ? '/' : `/tags/${tag.id}`}
					passHref
				>
					<li
						className={`text-lg px-[18px] cursor-pointer min-w-max ${
							tag.id === tagID
								? 'font-poppins font-bold relative after:absolute after:w-full after:h-1 after:bg-[#41CADD] after:rounded-sm after:bottom-0 after:mb-[-10px] after:left-0'
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
