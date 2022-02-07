import { Tag } from '@/types';
import { useRef, useState } from 'react';

// const categories = [
// 	'All',
// 	'Company news',
// 	'Cloud Security',
// 	'Open source projects',
// 	'Open source security',
// 	'Task management',
// ];

interface Props {
	tagList: Tag[];
}

const firstTag = {
	id: 1,
	name: 'All',
};

const CategorySwitcher: React.FC<Props> = ({ tagList }) => {
	const containerRef = useRef<HTMLUListElement | any>(null);
	const [selectedCategory, setSelectedCategory] = useState('All');

	const updatedTagList = [firstTag, ...tagList];

	const handleOnWheelScroll = (e: React.WheelEvent<HTMLUListElement>) => {
		e.preventDefault();
		containerRef.current.scrollLeft += e.deltaY;
	};
	return (
		<ul
			ref={containerRef}
			onWheel={handleOnWheelScroll}
			className='flex px-4 pb-3 overflow-x-scroll xl:px-0 gap-x-8 scrollbar-hide mb-[35px] lg:mb-[50px]'
		>
			{updatedTagList.map((tag) => (
				<li
					className={`text-lg px-[18px] cursor-pointer min-w-max ${
						tag.name === selectedCategory
							? 'font-poppinsbold relative after:absolute after:w-full after:h-1 after:bg-[#41CADD] after:rounded-sm after:bottom-0 after:mb-[-10px] after:left-0'
							: ''
					}`}
					onClick={() => setSelectedCategory(tag.name)}
					key={tag.id}
				>
					{tag.name}
				</li>
			))}
		</ul>
	);
};

export default CategorySwitcher;
