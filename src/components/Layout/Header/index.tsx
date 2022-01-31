import Navbar from './Navbar';
import Topbar from './Topbar';
import Version from './Version';

const Header: React.FC = () => {
	return (
		<header className=' border border-[#22273C] relative mb-[53px] lg:mb-[83px]'>
			{/* Topbar */}
			<Topbar />

			{/* Navbar */}
			<Navbar />

			{/* Current Version */}
			<Version />
		</header>
	);
};

export default Header;
