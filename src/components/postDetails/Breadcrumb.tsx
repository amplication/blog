import Link from 'next/link';

interface Props {
	text: string;
}

const Breadcrumb: React.FC<Props> = ({ text }) => {
	return (
		<p className='mb-8 text-sm'>
			Home / <Link href='/'>Blog</Link> /{' '}
			<span className=' font-poppins font-medium text-[#53DBEE]'>
				{text}
			</span>
		</p>
	);
};

export default Breadcrumb;
