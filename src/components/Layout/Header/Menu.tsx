import React from 'react';

const Menu: React.FC = () => {
	const navlinks = [
		{
			title: 'Docs',
			link: 'https://docs.amplication.com/docs/getting-started/',
		},
		{ title: 'Features', link: 'https://amplication.com/features.html' },
		{ title: 'Pricing', link: 'https://amplication.com/pricing.html' },
		{ title: 'Community', link: 'https://amplication.com/community.html' },
		{ title: 'Team', link: 'https://amplication.com/team.html' },
		{ title: 'Careers', link: 'https://amplication.breezy.hr/' },
		{ title: 'Roadmap', link: 'https://amplication.com/#roadmap' },
	];
	return (
		<ul className='items-center hidden lg:flex gap-x-8'>
			{navlinks.map((navlink, index) => {
				return (
					<li
						key={index}
						className='transition duration-300 ease-in-out text-dark-20 hover:text-white'
					>
						<a href={navlink.link}>{navlink.title}</a>
					</li>
				);
			})}
			<li>
				<a
					href='https://app.amplication.com/login'
					className='block h-10 px-8 py-2 text-center rounded bg-purple-primary-light'
				>
					Login
				</a>
			</li>
		</ul>
	);
};

export default Menu;
