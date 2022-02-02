import Image from 'next/image';

interface Props {
	image: string;
	text: string;
	title: string;
}

const PostContent: React.FC<Props> = ({ title, text, image }) => {
	return (
		<div className='flex flex-col gap-y-8 mb-12 xl:mb-[100px]'>
			<div>
				<Image src={image} width='880px' height='400px' alt={title} />
			</div>
			<p className='text-lg'>{text}</p>
			{/* <p className='text-lg'>
				ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
				turpis molestie, dictum est a, mattis tellus. Sed dignissim,
				metus nec fringilla accumsan, risus sem sollicitudin lacus, ut
				interdum tellus elit sed risus. Maecenas eget condimentum velit,
				sit amet feugiat lectus. Class aptent taciti sociosqu ad litora
				torquent per conubia nostra, per inceptos himenaeos. Praesent
				auctor purus luctus enim egestas, ac scelerisque ante pulvinar.
				Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor
				urna. Curabitur vel bibendum lorem. Morbi convallis convallis
				diam sit amet lacinia. Aliquam in elementum tellus.
			</p>
			<div>
				<Image
					src='/assets/images/post-details/image-2.png'
					width='881px'
					height='400px'
					alt=''
				/>
			</div>
			<p className='text-lg'>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
				eu turpis molestie, dictum est a, mattis tellus. Sed dignissim,
				metus nec fringilla accumsan, risus sem sollicitudin lacus, ut
				interdum tellus elit sed risus. Maecenas eget condimentum velit,
				sit amet feugiat lectus. Class aptent taciti sociosqu ad litora
				torquent per conubia nostra, per inceptos himenaeos. Praesent
				auctor purus luctus enim egestas, ac scelerisque ante pulvinar.
				Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor
				urna. Curabitur vel bibendum lorem. Morbi convallis convallis
				diam sit amet lacinia. Aliquam in elementum tellus.Lorem
			</p>
			<p className='text-lg'>
				ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
				turpis molestie, dictum est a, mattis tellus. Sed dignissim,
				metus nec fringilla accumsan, risus sem sollicitudin lacus, ut
				interdum tellus elit sed risus. Maecenas eget condimentum velit,
				sit amet feugiat lectus. Class aptent taciti sociosqu ad litora
				torquent per conubia nostra, per inceptos himenaeos. Praesent
				auctor purus luctus enim egestas, ac scelerisque ante pulvinar.
				Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor
				urna. Curabitur vel bibendum lorem. Morbi convallis convallis
				diam sit amet lacinia. Aliquam in elementum tellus.
			</p>
			<p className='text-lg'>
				ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
				turpis molestie, dictum est a, mattis tellus. Sed dignissim,
				metus nec fringilla accumsan, risus sem sollicitudin lacus, ut
				interdum tellus elit sed risus. Maecenas eget condimentum velit,
				sit amet feugiat lectus.
			</p> */}
		</div>
	);
};

export default PostContent;
