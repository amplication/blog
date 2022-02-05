/* eslint-disable @next/next/no-img-element */
import Copyright from './Copyright';
import WidgetOne from './WidgetOne';
import WidgetTwo from './WidgetTwo';

const Footer: React.FC = () => {
	return (
		<footer className='relative'>
			<img
				src='/assets/images/footer/left-elements.png'
				alt=''
				className='absolute bottom-0 left-0 hidden opacity-30 xl:block'
			/>
			<img
				src='/assets/images/footer/right-elements.png'
				alt=''
				className='absolute bottom-0 right-0 hidden opacity-30 xl:block'
			/>
			<div className='py-12 md:py-20 xl:py-[121px] relative z-10'>
				<div className='container'>
					<div className='flex flex-col items-center px-6 md:px-0 xl:flex-row xl:justify-between gap-y-12 md:gap-y-20 xl:gap-y-0'>
						<WidgetOne />
						<WidgetTwo />
					</div>
				</div>
			</div>
			<Copyright />
		</footer>
	);
};

export default Footer;
