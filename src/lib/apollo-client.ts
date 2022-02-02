import {
	ApolloClient,
	ApolloLink,
	concat,
	HttpLink,
	InMemoryCache,
} from '@apollo/client';

const httpLink = new HttpLink({
	uri: 'https://ckyrgxqh2135618801s6xmf6elb7-server-vn57etnuya-ue.a.run.app/graphql',
	credentials: 'include',
});

const authMiddleware = new ApolloLink((operation, forward) => {
	operation.setContext(({ headers = {} }) => ({
		headers: {
			...headers,
			authorization:
				'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNjQzNjU2OTgzLCJleHAiOjE2NDM4Mjk3ODN9.vBc_HWz7jwl02XYCFWscXQ_5OWuL7Gc7DXmH5C8zRsk',
		},
	}));

	return forward(operation);
});

export const client = new ApolloClient({
	cache: new InMemoryCache(),
	link: concat(authMiddleware, httpLink),
	ssrMode: true,
});
