/* eslint-disable @next/next/no-img-element */
import SubscribeForm from './SubscribeForm';

interface Props {
	postDetails?: boolean;
}

const SubscribeNewsletter: React.FC<Props> = ({ postDetails = false }) => {
	return (
		<div
			className={` bg-dark-80 rounded-2xl text-2xl relative font-poppins font-bold flex flex-col items-center
				${
					postDetails
						? ' px-6 py-10 xl:px-12 xl:py-20  gap-y-6'
						: 'mx-4 xl:mx-0 px-6 py-[65px] my-14 xl:my-[74px] xl:py-[55px] xl:px-[91px] xl:flex-row gap-y-6 xl:gap-y-0 xl:gap-x-8  '
				}
			`}
		>
			<img
				src='/assets/images/newsletter/left-element.png'
				alt=''
				className={`absolute bottom-0 left-0 w-2/5 ${
					postDetails ? '' : 'xl:w-auto'
				} rounded-bl-2xl`}
			/>
			<div className='relative z-10'>
				<h2
					className={`text-lg leading-7 font-poppins font-bold ${
						postDetails ? '' : 'xl:leading-9 xl:text-2xl xl:pr-6'
					}`}
				>
					Sign up to stay up-to-date with our latest developments. We
					promise not to spam you.
				</h2>
			</div>
			<SubscribeForm postDetails={postDetails} />
			<img
				src='/assets/images/newsletter/right-element.png'
				alt=''
				className={`absolute top-0 right-0 w-2/5 rounded-tr-2xl ${
					postDetails ? '' : 'xl:w-auto'
				}`}
			/>
		</div>
	);
};

export default SubscribeNewsletter;
