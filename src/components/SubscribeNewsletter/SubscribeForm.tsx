import { useRef, useState } from 'react';

interface Props {
	postDetails?: boolean;
}
const SubscribeForm: React.FC<Props> = ({ postDetails }) => {
	const fullNameRef = useRef<HTMLInputElement | any>(null);
	const emailRef = useRef<HTMLInputElement | any>(null);
	const [selectedOption, setSelectedOption] = useState(
		'How did you hear about us'
	);

	const handleInputChange = (e: any) => {
		if (e.type === 'text') {
			fullNameRef.current.value = e.target.value;
		}
		if (e.type === 'email') {
			emailRef.current.value = e.target.value;
		}
	};

	const handleFormSubmit = (e: any) => {
		e.preventDefault();

		if (
			!fullNameRef.current.value ||
			!emailRef.current.value ||
			selectedOption === 'How did you hear about us'
		)
			return;

		alert(
			'Full Name: ' +
				fullNameRef.current.value +
				'\nEmail: ' +
				emailRef.current.value +
				'\nHow did you hear about us: ' +
				selectedOption
		);

		fullNameRef.current.value = '';
		emailRef.current.value = '';
		setSelectedOption('How did you hear about us');
	};
	return (
		<form
			onSubmit={handleFormSubmit}
			className={`relative z-10 w-full  ${
				postDetails
					? ' flex flex-col'
					: ' grid xl:w-auto xl:gap-x-3 xl:grid-cols-2'
			} gap-y-4  text-dark-20 shrink-0`}
		>
			<input
				ref={fullNameRef}
				required
				onChange={handleInputChange}
				type='text'
				placeholder='Full Name'
				className={`bg-dark-100 ${
					postDetails ? '' : 'w-full xl:w-[280px]'
				} text-base font-poppinsregular border border-dark-60 rounded-lg py-2 px-3 placeholder:text-dark-20`}
			/>
			<input
				ref={emailRef}
				required
				onChange={handleInputChange}
				type='text'
				placeholder='email@example.com'
				className={`bg-dark-100 ${
					postDetails ? '' : 'w-full xl:w-[280px]'
				} text-base font-poppinsregular border border-dark-60 rounded-lg py-2 px-3 placeholder:text-dark-20`}
			/>
			<select
				required
				value={selectedOption}
				onChange={(e) => setSelectedOption(e.target.value)}
				className={`bg-dark-100 ${
					postDetails ? '' : 'w-full xl:w-[280px]'
				} text-base font-poppinsregular border border-dark-60 rounded-lg py-2 px-3 placeholder:text-dark-20`}
			>
				<option>How did you hear about us</option>
				<option value='facebook'>Facebook</option>
				<option value='twitter'>Twitter</option>
				<option value='linkedin'>Linkedin</option>
				<option value='other'>Other</option>
			</select>
			<button
				type='submit'
				className={`py-2 mt-2 ${
					postDetails ? '' : 'xl:w-[280px]'
				} text-base font-poppinsregular bg-purple-primary-light rounded text-center text-white`}
			>
				Subscribe
			</button>
		</form>
	);
};

export default SubscribeForm;
