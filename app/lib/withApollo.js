import getConfig from 'next/config';
import withApollo from 'next-with-apollo';
import ApolloClient, { InMemoryCache } from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

function getRuntimeApolloURL() {
  const { publicRuntimeConfig } = getConfig();
  const protocol = typeof window === 'undefined' ? 'http:' : window.location.protocol;
  return `${protocol}//${publicRuntimeConfig.apolloClientUri}`;
}

export default withApollo(
  ({ initialState }) => {
    return new ApolloClient({
      ssrMode: typeof window === 'undefined',
      uri: getRuntimeApolloURL(),
      cache: new InMemoryCache().restore(initialState || {}),
    });
  },
  {
    render: ({ Page, props }) => {
      return (
        <ApolloProvider client={props.apollo}>
          <Page {...props} />
        </ApolloProvider>
      );
    },
  }
);
