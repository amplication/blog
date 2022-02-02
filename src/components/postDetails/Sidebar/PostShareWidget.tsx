/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router';
import {
	FacebookShareButton,
	LinkedinShareButton,
	TwitterShareButton,
} from 'react-share';
import SidebarWidgetTitle from './SidebarWidgetTitle';

const PostShareWidget: React.FC = () => {
	const router = useRouter();
	return (
		<div className='flex flex-col order-2 md:order-none gap-y-4'>
			<SidebarWidgetTitle title='Share this post' />
			<div className='flex gap-x-[19px]'>
				<LinkedinShareButton
					url={`https://amplication.com/${router.asPath}`}
				>
					<img
						src='/assets/images/sidebar/social-icons/linkedin.svg'
						alt=''
					/>
				</LinkedinShareButton>
				<FacebookShareButton
					url={`https://amplication.com/${router.asPath}`}
				>
					<img
						src='/assets/images/sidebar/social-icons/facebook.svg'
						alt=''
					/>
				</FacebookShareButton>
				<TwitterShareButton
					url={`https://amplication.com/${router.asPath}`}
				>
					<img
						src='/assets/images/sidebar/social-icons/twitter.svg'
						alt=''
					/>
				</TwitterShareButton>
			</div>
		</div>
	);
};

export default PostShareWidget;
