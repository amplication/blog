const MenuToggler: React.FC = () => {
	return (
		<button className='lg:hidden'>
			<svg
				width='22'
				height='20'
				viewBox='0 0 22 20'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<rect y='0.728271' width='22' height='3' fill='white' />
				<rect y='8.72827' width='22' height='3' fill='white' />
				<rect y='16.7283' width='22' height='3' fill='white' />
			</svg>
		</button>
	);
};

export default MenuToggler;
