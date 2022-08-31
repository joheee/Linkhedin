import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

export const GetClient =()=>{
  return new ApolloClient({
    link: new HttpLink({
      uri: 'https://linkhedin.hasura.app/v1/graphql',
      headers: {
        'x-hasura-admin-secret': `mJdIAJ1vY9nCTlYSRVpFdn3SlpidB1hkqkCSjy6MJKO627qBsDg2jN41YYYki2QB`
      }
    }),
    cache: new InMemoryCache()
  })
}