import { ApolloClient, InMemoryCache} from '@apollo/client';

const client = new ApolloClient({
    uri: 'https://kind-lacewing-36.hasura.app/v1/graphql',
    cache: new InMemoryCache(),
    headers: {
        'x-hasura-admin-secret':
        'wVCpv4MfDN0tlkdJlQMNppqnHEbzkzgPUM8onFVJFD5iSbH1HXdsk6Pfr5gDRsRx'
    },
});

export default client;