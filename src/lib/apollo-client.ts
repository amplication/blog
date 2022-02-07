import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
	cache: new InMemoryCache(),
	ssrMode: true,
	uri: process.env.NEXT_PUBLIC_API_URL,
});
