/* eslint-disable @next/next/no-img-element */

const NewsletterForm: React.FC = () => {
	return (
		<div className='mx-4 lg:mx-0 px-4 py-[65px] my-14 lg:my-[74px] lg:py-[55px] lg:px-[91px] bg-dark-80 rounded-2xl flex flex-col lg:flex-row gap-y-6 lg:gap-y-0 lg:gap-x-8 items-center font-poppinsbold text-2xl relative'>
			<img
				src='/assets/images/newsletter/left-element.png'
				alt=''
				className='absolute bottom-0 left-0 w-3/5 lg:w-auto rounded-bl-2xl'
			/>
			<div className='relative z-10'>
				<h2 className='text-lg leading-7 lg:leading-9 lg:text-2xl font-poppinsbold'>
					Sign up to stay up-to-date with our latest developments. We
					promise not to spam you.
				</h2>
			</div>
			<form className='relative z-10 grid w-full lg:w-auto gap-y-4 lg:gap-x-3 lg:grid-cols-2 text-dark-20 shrink-0'>
				<input
					type='text'
					placeholder='Full Name'
					className='bg-dark-100 w-full lg:w-[280px] text-base font-poppinsregular border border-dark-60 rounded-lg py-2 px-3 placeholder:text-dark-20'
				/>
				<input
					type='text'
					placeholder='email@example.com'
					className='bg-dark-100 lg:w-[280px] text-base font-poppinsregular border border-dark-60 rounded-lg py-2 px-3 placeholder:text-dark-20'
				/>
				<select
					name=''
					className='bg-dark-100 lg:w-[280px] text-base font-poppinsregular border border-dark-60 rounded-lg py-2 px-3 placeholder:text-dark-20'
				>
					<option>How did you hear about us</option>
					<option value='social'>Social Media</option>
					<option value='other'>Other</option>
				</select>
				<button
					type='submit'
					className='py-2 mt-2 lg:w-[280px] text-base font-poppinsregular bg-purple-primary-light rounded text-center text-white'
				>
					Subscribe
				</button>
			</form>
			<img
				src='/assets/images/newsletter/right-element.png'
				alt=''
				className='absolute top-0 right-0 w-3/5 rounded-tr-2xl lg:w-auto'
			/>
		</div>
	);
};

export default NewsletterForm;
