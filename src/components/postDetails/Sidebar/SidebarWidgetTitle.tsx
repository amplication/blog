interface Props {
	title: string;
}

const SidebarWidgetTitle: React.FC<Props> = ({ title }) => {
	return (
		<h3 className='text-2xl font-medium font-poppins'>
			{title}
			<span className='text-[#4DCCDE] font-poppins font-semibold'>.</span>
		</h3>
	);
};

export default SidebarWidgetTitle;
