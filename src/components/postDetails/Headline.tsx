import React from 'react';
interface Props {
	text: string;
}
const Headline: React.FC<Props> = ({ text }) => {
	return (
		<h1 className='text-lg xl:text-[32px] xl:leading-[48px] font-poppinssemibold'>
			{text}
		</h1>
	);
};

export default Headline;
