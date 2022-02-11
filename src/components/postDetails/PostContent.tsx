import 'highlight.js/styles/github.css';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';

interface Props {
	image: string;
	text: string;
	title: string;
}

const PostContent: React.FC<Props> = ({ title, text, image }) => {
	return (
		<div className='post-content flex flex-col gap-y-8 mb-12 xl:mb-[100px]'>
			<div>
				<Image
					src={image}
					width='880px'
					height='400px'
					alt={title}
					className='rounded-2xl'
				/>
			</div>
			<ReactMarkdown
				remarkPlugins={[remarkGfm]}
				rehypePlugins={[rehypeRaw, rehypeHighlight]}
			>
				{text as string}
			</ReactMarkdown>
		</div>
	);
};

export default PostContent;
