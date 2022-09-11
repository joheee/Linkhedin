import { ApolloClient, HttpLink, InMemoryCache, split } from "@apollo/client";
import { GraphQLWsLink } from '@apollo/client/link/subscriptions'
import { getMainDefinition } from "@apollo/client/utilities";
import { createClient } from "graphql-ws";


export const GetClient =()=>{
  const wsLink = new GraphQLWsLink(createClient({
    url: 'ws://linkhedin.hasura.app/v1/graphql',
    connectionParams: {
      headers: {
        'x-hasura-admin-secret': `mJdIAJ1vY9nCTlYSRVpFdn3SlpidB1hkqkCSjy6MJKO627qBsDg2jN41YYYki2QB`
      }
    }
  }))

  const httpLink   = new HttpLink({
    uri: 'https://linkhedin.hasura.app/v1/graphql',
    headers: {
      'x-hasura-admin-secret': `mJdIAJ1vY9nCTlYSRVpFdn3SlpidB1hkqkCSjy6MJKO627qBsDg2jN41YYYki2QB`
    }
  })

  const splitLink = split(
    ({ query }) => {
      const definition = getMainDefinition(query);
      return (
        definition.kind === 'OperationDefinition' &&
        definition.operation === 'subscription'
      );
    },
    wsLink,
    httpLink,
  );
  return new ApolloClient({
    link: splitLink,
    cache: new InMemoryCache()
  });
}