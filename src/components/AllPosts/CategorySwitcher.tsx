import { useRef } from 'react';

const CategorySwitcher: React.FC = () => {
	const containerRef = useRef<any>(null);

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
			<li className='text-lg font-poppinsbold cursor-pointer  px-[18px] relative after:absolute after:w-full after:h-1 after:bg-[#41CADD] after:rounded-sm after:bottom-0 after:mb-[-10px] after:left-0'>
				All
			</li>
			<li className='text-lg cursor-pointer min-w-max'>Company news</li>
			<li className='text-lg cursor-pointer min-w-max'>Cloud security</li>
			<li className='text-lg cursor-pointer min-w-max'>
				Open source projects
			</li>
			<li className='text-lg cursor-pointer min-w-max'>
				Open source security
			</li>
			<li className='text-lg cursor-pointer min-w-max'>
				Task Management
			</li>
		</ul>
	);
};

export default CategorySwitcher;
