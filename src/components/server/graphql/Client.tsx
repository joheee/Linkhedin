import { ApolloClient, InMemoryCache } from "@apollo/client";

export const GetClient =()=>{
    const client = new ApolloClient({
        uri: 'http://localhost:8080/query',
        cache: new InMemoryCache()
      })
    return client
}