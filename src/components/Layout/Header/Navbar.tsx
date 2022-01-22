import Menu from './Menu';
import MenuToggler from './MenuToggler';
import SiteLogo from './SiteLogo';

const Navbar: React.FC = () => {
	return (
		<nav className='flex justify-between px-4 xl:px-16 py-4 xl:py-[10px]'>
			{/* Site Logo */}
			<SiteLogo />

			{/* Menu Toggler */}
			<MenuToggler />

			{/* Menu */}
			<Menu />
		</nav>
	);
};

export default Navbar;
