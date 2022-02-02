import { useRef, useState } from 'react';

const categories = [
	'All',
	'Company news',
	'Cloud Security',
	'Open source projects',
	'Open source security',
	'Task management',
];

const CategorySwitcher: React.FC = () => {
	const containerRef = useRef<HTMLUListElement | any>(null);
	const [selectedCategory, setSelectedCategory] = useState('All');

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
			{categories.map((category, i) => (
				<li
					className={`text-lg px-[18px] cursor-pointer min-w-max ${
						category === selectedCategory
							? 'font-poppinsbold relative after:absolute after:w-full after:h-1 after:bg-[#41CADD] after:rounded-sm after:bottom-0 after:mb-[-10px] after:left-0'
							: ''
					}`}
					onClick={() => setSelectedCategory(category)}
					key={i}
				>
					{category}
				</li>
			))}
		</ul>
	);
};

export default CategorySwitcher;
