/* eslint-disable @next/next/no-img-element */

import { Author, Tag } from '@/types';
import Link from 'next/link';
import makeSlug from 'utils/makeSlug';
import AuthorInfo from '../common/AuthorInfo';
import CardBadge from './CardBadge';
import NewsContent from './NewsContent';
import Tags from './Tags';

interface Props {
	hotNews: HotNews;
}
interface HotNews {
	id: string;
	title: string;
	content: string;
	featuredImage: string;
	author: Author;
	tags: Tag[];
}

const HotNewsCard: React.FC<Props> = ({ hotNews }) => {
	return (
		<div className='flex relative flex-col px-4 lg:flex-row hot-news-shadow xl:px-0 mb-[24px] lg:mb-[100px]'>
			{/* Card Text */}
			<div className='order-1 lg:order-none lg:px-8 bg-dark-90 lg:pt-[100px] lg:pb-[84px] lg:basis-1/2 rounded-bl-2xl rounded-br-2xl lg:rounded-br-none lg:rounded-tl-2xl py-[30px] px-6'>
				<div className='flex flex-col gap-y-4 lg:gap-y-6'>
					<AuthorInfo
						authorName={`${hotNews.author.firstName} ${hotNews.author.lastName}`}
						authorPicture={hotNews.author.profileImage}
					/>
					<Tags tags={hotNews.tags} />
					<NewsContent
						id={hotNews.id}
						title={hotNews.title}
						text={hotNews.content}
					/>
				</div>
			</div>
			{/* Card Image */}
			<Link
				href={`/posts/${makeSlug(hotNews.title)}-${hotNews.id}`}
				passHref
			>
				<div className='flex items-stretch cursor-pointer lg:basis-1/2 shrink-0'>
					<img
						src={hotNews.featuredImage}
						alt=''
						width='100%'
						height='100%'
						className='rounded-tl-2xl rounded-tr-2xl lg:rounded-tl-none lg:rounded-br-2xl'
					/>
				</div>
			</Link>

			<CardBadge />
		</div>
	);
};

export default HotNewsCard;
