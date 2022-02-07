/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: [
			'res.cloudinary.com',
			'media.sproutsocial.com',
			'dev-to-uploads.s3.amazonaws.com',
		],
	},
};

module.exports = nextConfig;
