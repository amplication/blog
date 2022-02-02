/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: [
			'i.postimg.cc',
			'www.iconstudiosny.com',
			'www.gannett-cdn.com',
			'graphql.org',
			'static.standard.co.uk',
			'pluralsight.imgix.net',
			'images-na.ssl-images-amazon.com',
			'www.oxfordwebstudio.com',
		],
	},
};

module.exports = nextConfig;
