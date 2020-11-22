import withApollo from 'next-with-apollo';
import ApolloClient, { InMemoryCache } from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

function getRuntimeApolloURL() {
  if (typeof window === 'undefined') {
    return `http://${process.env.APOLLO_SERVER_URI}`;
  } else {
    return `${window.location.protocol}//${
      window.document.getElementById('ApolloClientUri').value
    }`;
  }
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
