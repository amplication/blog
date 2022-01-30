import React from 'react';

const Menu: React.FC = () => {
	const navlinks = [
		{ title: 'Docs', link: '#' },
		{ title: 'Features', link: '#' },
		{ title: 'Pricing', link: '#' },
		{ title: 'Community', link: '#' },
		{ title: 'Careers', link: '#' },
		{ title: 'Roadmap', link: '#' },
	];
	return (
		<ul className='items-center hidden lg:flex gap-x-8'>
			{navlinks.map((navlink, index) => {
				return (
					<li key={index} className='text-dark-20'>
						<a href={navlink.link}>{navlink.title}</a>
					</li>
				);
			})}
			<li>
				<a
					href='#'
					className='block h-10 px-8 py-2 text-center rounded bg-purple-primary-light'
				>
					Login
				</a>
			</li>
		</ul>
	);
};

export default Menu;
