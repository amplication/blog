interface Props {
	title: string;
}

const SidebarWidgetTitle: React.FC<Props> = ({ title }) => {
	return (
		<h3 className='text-2xl font-poppinsmedium'>
			{title}
			<span className='text-[#4DCCDE] font-poppinssemibold'>.</span>
		</h3>
	);
};

export default SidebarWidgetTitle;
