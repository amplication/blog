/* eslint-disable @next/next/no-img-element */

import AuthorInfo from '../common/AuthorInfo';
import Tags from './Tags';
import CardBadge from './CardBadge';
import NewsContent from './NewsContent';

const HotNewsCard: React.FC = () => {
	return (
		<div className='flex relative flex-col px-4 lg:flex-row hot-news-shadow xl:px-0 mb-[24px] lg:mb-[100px]'>
			{/* Card Text */}
			<div className='order-1 lg:order-none lg:px-8 bg-dark-90 lg:pt-[100px] lg:pb-[84px] lg:basis-1/2 rounded-bl-2xl rounded-br-2xl lg:rounded-br-none lg:rounded-tl-2xl py-[30px] px-6'>
				<div className='flex flex-col gap-y-4 lg:gap-y-6'>
					<AuthorInfo width='32px' height='32px' />
					<Tags />
					<NewsContent />
				</div>
			</div>
			{/* Card Image */}
			<div className='flex items-stretch lg:basis-1/2 shrink-0'>
				<img
					src='/assets/images/hot-news/image.png'
					alt=''
					width='100%'
					height='100%'
					className='rounded-tl-2xl rounded-tr-2xl lg:rounded-tl-none lg:rounded-br-2xl'
				/>
			</div>
			<CardBadge />
		</div>
	);
};

export default HotNewsCard;
